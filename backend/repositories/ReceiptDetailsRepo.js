import { ReceiptDetailsModel } from "../models/data/ReceiptDetailsModel.js";

export const getFiltersReceiptDetails = async (
  query,
  skipReceiptsDetails,
  PAGE_SIZE
) => {
  if (skipReceiptsDetails >= 0) {
    return await ReceiptDetailsModel.find(query)
      .skip(skipReceiptsDetails)
      .limit(PAGE_SIZE);
  }
  return await ReceiptDetailsModel.find(query);
};

export const getReceiptDetailsByReceiptId = async (_id) => {
  return await ReceiptDetailsModel.find({ ReceiptId: _id });
};

export const addReceiptDetails = async (receipt) => {
  return await ReceiptDetailsModel.create(receipt);
};

export const deleteReceiptDetailsByReceiptId = async (receiptId) => {
  await ReceiptDetailsModel.deleteMany({ ReceiptId: receiptId });
};
