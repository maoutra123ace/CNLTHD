import * as ReceiptRepo from "../repositories/ReceiptRepo.js";
import * as ReceiptDetailsSvc from "./ReceiptDetailsSvc.js";
import * as ProductSvc from "../services/ProductSvc.js";
import * as Utils from "../utils/Utils.js";
import { ReceiptFiltersModel } from "../models/filters/ReceiptFiltersModel.js";
import moment from "moment";

const PAGE_SIZE = 10;

export const getFiltersReceipt = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = [];
  const ignoreCases = [];
  const receiptFilters = new ReceiptFiltersModel(filters);
  const query = {};
  let skipReceipts = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    receiptFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    receiptFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), receiptFilters);

  if (query["DateStart"] && query["DateEnd"]) {
    query["Date"] = {
      $gte: query["DateStart"],
      $lte: query["DateEnd"],
    };

    delete query["DateStart"];
    delete query["DateEnd"];
  }

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipReceipts = (filters.page - 1) * PAGE_SIZE;
  }

  return await ReceiptRepo.getFiltersReceipt(query, skipReceipts, PAGE_SIZE);
};

export const getReceiptById = async (_id) => {
  return await ReceiptRepo.getReceiptById(_id);
};

export const addReceipt = async (receipt) => {
  return await ReceiptRepo.addReceipt(receipt);
};

export const updateReceipt = async (_id, receipt) => {
  return await ReceiptRepo.updateReceipt(_id, receipt);
  //return getReceiptById(_id);
};

export const deleteReceipt = async (_id) => {
  await ReceiptRepo.deleteReceipt(_id);
};

export const warehouseReceived = async (receiptProducts) => {
  //---------------------add receipt---------------------
  const receipt = {
    Date: moment(Date.now()).format("YYYY-MM-DD"),
    Total: receiptProducts.Total,
  };

  const receiptAdd = await addReceipt(receipt);

  //---------------------add receipt details---------------------
  receiptProducts.Products.forEach((element) => {
    element["ReceiptId"] = receiptAdd["_id"].toString();
  });

  await ReceiptDetailsSvc.addReceiptDetails(receiptProducts.Products);

  //---------------------add quantity products---------------------
  await ProductSvc.calculationQuantityProduct(receiptProducts.Products, "plus");
};
