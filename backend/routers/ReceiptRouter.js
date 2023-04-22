import express from "express";
import * as ReceiptController from "../controllers/ReceiptController.js";

const ReceiptRouter = express.Router();

//==================Get==================
ReceiptRouter.get(
  "/receipts/getReceiptsFilters",
  ReceiptController.getFiltersReceipt
);

ReceiptRouter.get(
  "/receipts/getReceiptsById/:_id",
  ReceiptController.getReceiptById
);

//==================Post==================
ReceiptRouter.post("/receipts/addReceipt", ReceiptController.addReceipt);

ReceiptRouter.post("/receipts/warehouseReceived", ReceiptController.warehouseReceived);

//==================Put==================
ReceiptRouter.put(
  "/receipts/updateReceipt/:_id",
  ReceiptController.updateReceipt
);

//==================Delete==================
ReceiptRouter.delete(
  "/receipts/deleteReceipt/:_id",
  ReceiptController.deleteReceipt
);

export default ReceiptRouter;
