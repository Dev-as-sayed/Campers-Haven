import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const addProductOnDB = async (newProduct: TProduct) => {
  const result = await ProductModel.create(newProduct);
  return result;
};

const getProductFormDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  addProductOnDB,
  getProductFormDB,
};
