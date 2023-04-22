import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    DateStart: {
      type: String,
    },
    DateEnd: {
      type: String,
    },
  },
  { _id: false }
);

export const ReceiptFiltersModel = mongoose.model(
  "ReceiptFiltersModel",
  schema
);
