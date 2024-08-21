import React from "react";
import { useProductsQuery } from "../../redux/features/product/productApi";

const Best_product: React.FC = () => {
  const porduct = useProductsQuery();
  console.log(porduct);

  return (
    <div>
      <h1>Product section is active</h1>
    </div>
  );
};

export default Best_product;
