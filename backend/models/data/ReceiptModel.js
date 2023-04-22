import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {
    Date: {
      type: String,
      require: true,
    },
    Total: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "receipts",
  }
);

export const ReceiptModel = mongoose.model("receipts", schema);
