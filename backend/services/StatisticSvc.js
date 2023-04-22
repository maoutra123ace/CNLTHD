import * as OrderSvc from "../services/OrderSvc.js";
import * as ReceiptSvc from "../services/ReceiptSvc.js";
import * as OrderDetailsSvc from "../services/OrderDetailsSvc.js";
import * as ProductSvc from "../services/ProductSvc.js";
import * as Utils from "../utils/Utils.js";
import { OrderDetailsModel } from "../models/data/OrderDetailsModel.js";

export const getStatisticByOverTime = async (dateStart, dateEnd) => {
  const filters = {
    DateStart: dateStart,
    DateEnd: dateEnd,
  };
  let totalOrder = 0;
  let totalReceipt = 0;
  const orders = await OrderSvc.getFiltersOrder(filters);
  const receipts = await ReceiptSvc.getFiltersReceipt({});

  orders.forEach((element) => {
    totalOrder += element.Total;
  });

  receipts.forEach((element) => {
    totalReceipt += element.Total;
  });

  return totalOrder - totalReceipt;
};

export const getStatisticByTrendingProduct = async () => {
  const result = [];
  const query = [
    {
      $group: {
        _id: "$ProductId",
        Quantity: {
          $sum: "$Quantity",
        },
        Total: {
          $sum: "$Total",
        },
        // count: {
        //   $sum: 1,
        // },
      },
    },
    { $sort: { Total: -1 } },
    // { $limit: 3 },
  ];

  const product = await OrderDetailsModel.aggregate(query);

  if (Utils.isEmpty(product)) {
    return null;
  }

  const bestSaleProduct = product[0];

  for (let i = 0; i < product.length; i++) {
    if (product[i].Total == bestSaleProduct.Total) {
      let item = {};
      item["Information"] = await ProductSvc.getProductById(product[i]._id);
      item["Sale"] = product[i];
      delete item["Sale"]['_id'];

      result[i] = item;
    }
  }

  return result;
};
