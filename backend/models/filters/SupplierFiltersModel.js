import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Address: {
      type: String,
    },
  },
  { _id: false }
);

export const SupplierFiltersModel = mongoose.model(
  "SupplierFiltersModel",
  schema
);
