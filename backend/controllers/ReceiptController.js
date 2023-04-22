import * as ReceiptSvc from "../services/ReceiptSvc.js";

export const getFiltersReceipt = async (req, res) => {
  try {
    const receipts = await ReceiptSvc.getFiltersReceipt(req.query);

    return res.status(200).json(receipts);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getReceiptById = async (req, res) => {
  try {
    const receipt = await ReceiptSvc.getReceiptById(req.params);
    return res.status(200).json(receipt);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addReceipt = async (req, res) => {
  try {
    const receipt = req.body;
    const newReceipt = await ReceiptSvc.addReceipt(receipt);

    return res.status(200).json(newReceipt);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateReceipt = async (req, res) => {
  try {
    const { _id } = req.params;
    const receipt = req.body;

    await ReceiptSvc.updateReceipt(_id, receipt);

    const receiptUpdate = await ReceiptSvc.getReceiptById(_id);

    return res.status(200).json(receiptUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteReceipt = async (req, res) => {
  try {
    const { _id } = req.params;

    await ReceiptSvc.deleteReceipt(_id);

    return res.status(200).json({
      Message: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const warehouseReceived = async (receiptProducts, res) => {
  try {
    receiptProducts = {
      Total: 160940000, //6363f9e950420980842dfd6e - 2 ; 6363f9e950420980842dfd6f - 3 ; 6363f9e950420980842dfd70 - 1
      Products: [
        {
          ProductId: "6363f9e950420980842dfd6e",
          UnitPrice: 25990000,
          Quantity: 2,
          Total: 51980000,
        },
        {
          ProductId: "6363f9e950420980842dfd6f",
          UnitPrice: 25490000,
          Quantity: 3,
          Total: 76470000,
        },
        {
          ProductId: "6363f9e950420980842dfd70",
          UnitPrice: 32490000,
          Quantity: 1,
          Total: 32490000,
        },
      ],
    };

    await ReceiptSvc.warehouseReceived(receiptProducts);

    return res.status(200).json({ Message: "ok" });
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
