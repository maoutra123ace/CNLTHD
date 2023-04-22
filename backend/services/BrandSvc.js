import * as BrandRepo from "../repositories/BrandRepo.js";
import { BrandFiltersModel } from "../models/filters/BrandFiltersModel.js";
import * as Utils from "../utils/Utils.js";

const PAGE_SIZE = 10;

export const getFiltersBrand = async (filters) => {
  Utils.cleanObject(filters);

  const nearlyRight = ["Name"];
  const ignoreCases = ["Status"];
  const brandFilters = new BrandFiltersModel(filters);
  const query = {};
  let skipBrands = -1;

  Utils.addQueryFilters(
    query,
    nearlyRight,
    brandFilters,
    Utils.regexNearlyRight(),
    "iu"
  );
  Utils.addQueryFilters(
    query,
    ignoreCases,
    brandFilters,
    Utils.regexExactly(),
    "iu"
  );
  Utils.addQueryLeft(query, nearlyRight.concat(ignoreCases), brandFilters);

  if (filters.page) {
    filters.page = Number(filters.page) < 1 ? 1 : Number(filters.page);

    skipBrands = (filters.page - 1) * PAGE_SIZE;
  }

  return await BrandRepo.getFiltersBrand(
    query,
    skipBrands,
    PAGE_SIZE
  );
};

export const getBrandById = async (_id) => {
  return await BrandRepo.getBrandById(_id);
};

export const addBrand = async (Brand) => {
  return await BrandRepo.addBrand(Brand);
};

export const updateBrand = async (_id, Brand) => {
  return await BrandRepo.updateBrand(_id, Brand);
  //return getBrandById(_id);
};

export const deleteBrand = async (_id) => {
  await BrandRepo.deleteBrand(_id);
};
