import { ObjectId } from "mongoose";
import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const addProductOnDB = async (newProduct: TProduct) => {
  const result = await ProductModel.create(newProduct);
  return result;
};

const getProductFormDB = async (quarys: any) => {
  let queryTearm = {};
  const { offered, category } = quarys;

  if (offered) {
    queryTearm = { offered };
  }
  if (category) {
    queryTearm = {
      ...queryTearm,
      category: { $elemMatch: { name: category } },
    };
  }

  console.log(queryTearm);

  const query = {
    $and: [{ offered: { $eq: offered } }, { "category.name": category }],
  };

  // const query = {
  //   $and: [
  //     { offered:offered  },
  //     { "category.name":  category  },
  //   ],
  // };

  const result = await ProductModel.find().populate("category");
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  console.log(id);

  const result = await ProductModel.findById(id).populate("category");
  return result;
};
export const ProductServices = {
  addProductOnDB,
  getProductFormDB,
  getSingleProductFromDB,
};
