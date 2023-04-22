import express from "express";
import * as StatisticController from "../controllers/StatisticController.js";

const StatisticRouter = express.Router();

//==================Get==================
StatisticRouter.get(
  "/statistics/getStatisticByOverTime/:DateStart/:DateEnd",
  StatisticController.getStatisticByOverTime
);

StatisticRouter.get(
  "/statistics/getStatisticByTrendingProduct",
  StatisticController.getStatisticByTrendingProduct
);

export default StatisticRouter;
