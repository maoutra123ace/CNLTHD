import { BrandModel } from "../models/data/BrandModel.js";

export const getFiltersBrand = async (query, skipBrands, PAGE_SIZE) => {
  if (skipBrands >= 0) {
    return await BrandModel.find(query).skip(skipBrands).limit(PAGE_SIZE);
  }

  return await BrandModel.find(query);
};

export const getBrandById = async (_id) => {
  return await BrandModel.findById(_id);
};

export const addBrand = async (Brand) => {
  return await BrandModel.create(Brand);
};

export const updateBrand = async (_id, Brand) => {
  return await BrandModel.findByIdAndUpdate(_id, Brand);
};

export const deleteBrand = async (_id) => {
  await BrandModel.findByIdAndDelete(_id);
};
