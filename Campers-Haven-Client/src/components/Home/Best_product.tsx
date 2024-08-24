import React from "react";
import {
  useGetSingleProductQuery,
  useProductsQuery,
} from "../../redux/features/product/productApi";
// import Cards from "../Products/card";
import "./Hero_section.css";
import { useGetCategorysQuery } from "../../redux/features/category/categorysApi";
const Best_product: React.FC = () => {
  // const { data, isError, isLoading } = useProductsQuery({ offered: "offerd" });

  const { data, isError, isLoading } = useGetSingleProductQuery(
    "66c2072700a5e286979b1506"
  );

  // const { data, isError, isLoading } = useGetCategorysQuery(undefined);

  console.log(data);

  return (
    <div className="md:w-11/12 lg:w-4/5 mx-auto mt-14">
      <div className="text-center">
        <h2 className=" text-xl md:text-2xl lg:text-3xl masked-text font-serif">
          Top Picks for Your Next Trip
        </h2>
        <p className=" font-thin">
          Explore our best-selling gear, recommended by adventurers like you.
        </p>
      </div>
      <div>
        {isError ? (
          <div className="w-full h-28 text-center">
            <p className="justify-center mt-10">Internal Server Error...</p>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <div className="w-full h-28 text-center">
                <p className="justify-center mt-10">Loading...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* <Cards Products={data} /> */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Best_product;
