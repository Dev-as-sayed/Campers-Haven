import { TCategory } from "./category.interface";
import { CategoryModel } from "./category.mode";

const getCategoryFromDB = async () => {
  const result = await CategoryModel.find();
  return result;
};

const addCategoryOnDB = async (newCategory: TCategory) => {
  const result = await CategoryModel.create(newCategory);
  return result;
};

const updateCategoryOnDB = async (
  id: string,
  updateInfo: Partial<TCategory>
) => {
  const result = await CategoryModel.findByIdAndUpdate(id, updateInfo, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const CategoryServices = {
  getCategoryFromDB,
  addCategoryOnDB,
  updateCategoryOnDB,
};
