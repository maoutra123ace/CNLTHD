import express from "express";
import * as SupplierController from "../controllers/SupplierController.js";

const SupplierRouter = express.Router();

//==================Get==================
SupplierRouter.get(
  "/suppliers/getSupplierFilters",
  SupplierController.getFiltersSupplier
);

SupplierRouter.get(
  "/suppliers/getSupplierById/:_id",
  SupplierController.getSupplierById
);

//==================Post==================
SupplierRouter.post("/suppliers/addSupplier", SupplierController.addSupplier);

//==================Put==================
SupplierRouter.put(
  "/suppliers/updateSupplier/:_id",
  SupplierController.updateSupplier
);

//==================Delete==================
SupplierRouter.delete(
  "/suppliers/deleteSupplier/:_id",
  SupplierController.deleteSupplier
);

export default SupplierRouter;
