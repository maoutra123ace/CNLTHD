import express from "express";
import * as BrandController from "../controllers/BrandController.js";

const BrandRouter = express.Router();

//==================Get==================
BrandRouter.get("/brands/getBrandFilters", BrandController.getFiltersBrand);

BrandRouter.get("/brands/getBrandById/:_id", BrandController.getBrandById);

//==================Post==================
BrandRouter.post("/brands/addBrand", BrandController.addBrand);

//==================Put==================
BrandRouter.put("/brands/updateBrand/:_id", BrandController.updateBrand);

//==================Delete==================
BrandRouter.delete("/brands/deleteBrand/:_id", BrandController.deleteBrand);

export default BrandRouter;
