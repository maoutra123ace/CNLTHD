import * as OrderRepo from "../repositories/OrderRepo.js";
import * as Utils from "../utils/Utils.js";
import * as OrderDetailsSvc from "../services/OrderDetailsSvc.js";
import * as ProductsSvc from "../services/ProductSvc.js";
import * as AccountSvc from "../services/AccountSvc.js";
import { OrderFiltersModel } from "../models/filters/OrderFiltersModel.js";
import moment from "moment";
import { Router } from "express";
import { Error } from "mongoose";

const PAGE_SIZE = 10;

export const getFiltersOrder = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = [];
  const ignoreCases = ["Status"];
  const orderFilters = new OrderFiltersModel(filters);
  const query = {};
  let skipProducts = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    orderFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    orderFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), orderFilters);

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

    skipProducts = (filters.page - 1) * PAGE_SIZE;
  }

  return await OrderRepo.getFiltersOrder(query, skipProducts, PAGE_SIZE);
};

export const getOrderByAccountId = async (_id) => {
  return await OrderRepo.getOrderByAccountId(_id);
};

export const getOrderById = async (_id) => {
  return await OrderRepo.getOrderById(_id);
};

export const addOrder = async (order) => {
  return await OrderRepo.addOrder(order);
};

export const payment = async (objReq) => {
  const account = await AccountSvc.getAccountById(objReq.idAccount);
  const orderDetails = [];
  // const productsNotProvideEnough = [];

  // bat loi khong du so luong cung cap
  // for (let i = 0; i < objectReq.storeCart.length; i++) {
  //   const product = await ProductsSvc.getProductById(objectReq.storeCart[i]._id);

  //   if (product.Quantity < objectReq.storeCart[i].cartQuantity) {
  //     const b = {
  //       _id: objectReq.storeCart[i]._id,
  //       Name: objectReq.storeCart[i].Name,
  //       RemainingQuantity: product.Quantity,
  //       QuantityRequired: objectReq.storeCart[i].cartQuantity,
  //     };

  //     productsNotProvideEnough[i] = b;
  //   }
  // }

  // if (productsNotProvideEnough.length > 0) {
  //   const error = {
  //     Message: "Some products are not enough to provide !",
  //     Products: productsNotProvideEnough,
  //   };

  //   throw(error);
  // }

  //xu ly thanh toan
  const cart = {
    AccountId: account._id,
    Date: moment(Date.now()).format("yyyy-MM-DD"),
    Total: 0, //160940000
    Status: "Unconfirmed",
    Email: account.email,
    Phone: account.phone,
    Address: account.address,
  };

  objReq.storeCart.forEach((element) => {
    cart.Total += element.CartQuantity * element.UnitPrice;
  });

  const orderAdd = await addOrder(cart);

  for (let i = 0; i < objReq.storeCart.length; i++) {
    let orderDetailsItem = {
      OrderId: orderAdd._id,
      ProductId: objReq.storeCart[i].ProductId,
      UnitPrice: objReq.storeCart[i].UnitPrice,
      Quantity: objReq.storeCart[i].CartQuantity,
      Total: 0,
    };
    orderDetailsItem.Total =
      orderDetailsItem.Quantity * orderDetailsItem.UnitPrice;

    orderDetails[i] = orderDetailsItem;
  }

  await OrderDetailsSvc.addOrderDetails(orderDetails);
  await ProductsSvc.calculationQuantityProduct(orderDetails, "sub");
};

export const updateOrder = async (_id, order) => {
  return await OrderRepo.updateOrder(_id, order);
  //return getOrderById(_id);
};

export const deleteOrder = async (_id) => {
  await OrderRepo.deleteOrder(_id);
};
