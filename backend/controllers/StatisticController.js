import * as StatisticSvc from "../services/StatisticSvc.js";

export const getStatisticByOverTime = async (req, res) => {
  try {
    const { DateStart, DateEnd } = req.params;

    const statisticOverTime = await StatisticSvc.getStatisticByOverTime(
      DateStart,
      DateEnd
    );

    return res.status(200).json(statisticOverTime);
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getStatisticByTrendingProduct = async (req, res) => {
  try {
    const trendingProducts = await StatisticSvc.getStatisticByTrendingProduct();

    return res.status(200).json(trendingProducts);
  } catch (error) {
    return res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};
