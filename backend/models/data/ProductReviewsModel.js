import mongoose, { Schema, SchemaType } from "mongoose";

const schema = new mongoose.Schema(
  {},
  {
    collection: "productReviews",
  }
);

export const ProductReviewModel = mongoose.model("productReviews", schema);
