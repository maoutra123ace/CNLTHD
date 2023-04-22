import * as BrandSvc from "../services/BrandSvc.js";

export const getFiltersBrand = async (req, res) => {
  try {
    const brands = await BrandSvc.getFiltersBrand(req.query);

    return res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const getBrandById = async (req, res) => {
  try {
    const brand = await BrandSvc.getBrandById(req.params);
    return res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const addBrand = async (req, res) => {
  try {
    const brand = req.body;
    const newBrand = await BrandSvc.addBrand(brand);

    return res.status(200).json(newBrand);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const updateBrand = async (req, res) => {
  try {
    const { _id } = req.params;
    const brand = req.body;

    await BrandSvc.updateBrand(_id, brand);

    const brandUpdate = await BrandSvc.getBrandById(_id);

    return res.status(200).json(brandUpdate);
  } catch (error) {
    res.status(500).json({
      Message: "Fail",
      Error: error,
    });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    const { _id } = req.params;

    await BrandSvc.deleteBrand(_id);

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
