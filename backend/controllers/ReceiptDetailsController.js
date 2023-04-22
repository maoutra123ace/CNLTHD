import * as ReceiptDetailsSvc from "../services/ReceiptDetailsSvc.js";

export const getFiltersReceiptDetails = async (req, res) => {
  try {
    const receiptDetails = await ReceiptDetailsSvc.getFiltersReceiptDetails(
      req.query
    );

    return res.status(200).json(receiptDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getReceiptDetailsByReceiptId = async (req, res) => {
  try {
    const receiptDetails = await ReceiptDetailsSvc.getReceiptDetailsByReceiptId(
      req.params
    );
    return res.status(200).json(receiptDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
export const addReceiptDetails = async (req, res) => {
  try {
    const receiptDetails = req.body;
    const newReceiptDetails = await ReceiptDetailsSvc.addReceiptDetails(
      receiptDetails
    );

    return res.status(200).json(newReceiptDetails);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteReceiptDetailsByReceiptId = async (req, res) => {
  try {
    const { receiptId } = req.params;

    await ReceiptDetailsSvc.deleteReceiptDetailsByReceiptId(receiptId);

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
