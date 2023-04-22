import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema(
  {
    ReceiptId: {
      type: Schema.Types.ObjectId,
    },
    ProductId: {
      type: Schema.Types.ObjectId,
    },
  },
  { _id: false }
);

export const ReceiptDetailsFiltersModel = mongoose.model(
  "ReceiptDetailsFiltersModel",
  schema
);
