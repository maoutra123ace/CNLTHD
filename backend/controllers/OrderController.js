import * as OrderSvc from "../services/OrderSvc.js";
import moment from "moment";

export const getFiltersOrder = async (req, res) => {
  try {
    const order = await OrderSvc.getFiltersOrder(req.query);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getOrderByAccountId = async (req, res) => {
  try {
    const order = await OrderSvc.getOrderByAccountId(req.params);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await OrderSvc.getOrderById(req.params);

    return res.status(200).json(order);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addOrder = async (req, res) => {
  try {
    const order = req.body;
    const newOrder = await OrderSvc.addOrder(order);

    return res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const payment = async (req, res) => {
  try {
    // const objReq = {
    //   idAccount: "637f256fcd947d681e5305de",
    //   storeCart: [
    //     {
    //       ProductId: "6363f9e950420980842dfd6d",
    //       UnitPrice: 25290000,
    //       CartQuantity: 7,
    //     },
    //     {
    //       ProductId: "6363f9e950420980842dfd70",
    //       UnitPrice: 32490000,
    //       CartQuantity: 6,
    //     },
    //   ],
    // };

    const objReq = req.body;

    //console.log(objReq)

    await OrderSvc.payment(objReq);

    return res.status(200).json({ Message: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { _id } = req.params;
    const order = req.body;

    await OrderSvc.updateOrder(_id, order);

    const orderUpdate = await OrderSvc.getOrderById(_id);

    return res.status(200).json(orderUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
export const deleteOrder = async (req, res) => {
  try {
    const { _id } = req.params;

    await OrderSvc.deleteOrder(_id);

    return res.status(200).json({ Message: "ok" });
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
