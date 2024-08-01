import mongoose, { Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export const CategoryModel = mongoose.model("Category", categorySchema);
