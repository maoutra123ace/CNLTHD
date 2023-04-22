import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {
    ReceiptId: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    ProductId: {
      type: Schema.Types.ObjectId,
      require: true,
    },
    UnitPrice: {
      type: Number,
      require: true,
    },
    Quantity: {
      type: Number,
      require: true,
    },
    Total: {
      type: Number,
      require: true,
    },
  },
  {
    collection: "receiptDetails",
  }
);

export const ReceiptDetailsModel = mongoose.model("receiptDetails", schema);
