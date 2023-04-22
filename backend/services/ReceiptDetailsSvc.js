import * as ReceiptDetailsRepo from "../repositories/ReceiptDetailsRepo.js";
import { ReceiptDetailsFiltersModel } from "../models/filters/ReceiptDetailsFilterModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersReceiptDetails = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = [];
  const ignoreCases = [];
  const receiptDetailsFilters = new ReceiptDetailsFiltersModel(filters);
  const query = {};
  let skipReceiptDetails = -1;

  // Utils.addQueryFilters(
  //   query,
  //   nearlyRight,
  //   receiptFilters,
  //   Utils.regexNearlyRight(),
  //   "iu"
  // );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    receiptDetailsFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(
    query,
    nearlyRight.concat(ignoreCases),
    receiptDetailsFilters
  );

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipReceiptDetails = (filters.page - 1) * PAGE_SIZE;
  }

  return await ReceiptDetailsRepo.getFiltersReceiptDetails(
    query,
    skipReceiptDetails,
    PAGE_SIZE
  );
};

export const getReceiptDetailsByReceiptId = async (_id) => {
  return await ReceiptDetailsRepo.getReceiptDetailsByReceiptId(_id);
};

export const addReceiptDetails = async (receipt) => {
  return await ReceiptDetailsRepo.addReceiptDetails(receipt);
};

export const deleteReceiptDetailsByReceiptId = async (receiptId) => {
  await ReceiptDetailsRepo.deleteReceiptDetailsByReceiptId(receiptId);
};
