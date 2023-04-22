import express from "express";
import * as ReceiptDetailsController from "../controllers/ReceiptDetailsController.js";

const ReceiptDetailsRouter = express.Router();

//==================Get==================
ReceiptDetailsRouter.get(
  "/receiptDetails/getReceiptDetailsFilters/",
  ReceiptDetailsController.getFiltersReceiptDetails
);

ReceiptDetailsRouter.get(
  "/receiptDetails/getReceiptDetailsByReceiptId/:_id",
  ReceiptDetailsController.getReceiptDetailsByReceiptId
);
//==================Post==================
ReceiptDetailsRouter.post(
  "/receiptDetails/addReceiptDetails",
  ReceiptDetailsController.addReceiptDetails
);
//==================Put==================

//==================Delete==================
ReceiptDetailsRouter.delete(
  "/receiptDetails/deleteReceiptDetailsByReceiptId/:receiptId",
  ReceiptDetailsController.deleteReceiptDetailsByReceiptId
);
export default ReceiptDetailsRouter;
