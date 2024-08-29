import React from "react";
import { useProductsQuery } from "../../redux/features/product/productApi";
import Cards from "../Products/card";
import "./Hero_section.css";
import Loader from "../Loader/Loader";
const Best_product: React.FC = () => {
  const { data, isError, isLoading } = useProductsQuery({ offered: "offerd" });

  return (
    <div className="md:w-11/12 lg:w-4/5 mx-auto my-14">
      <div className="text-center">
        <h2 className=" text-xl md:text-2xl lg:text-3xl masked-text font-serif">
          Top Picks for Your Next Trip
        </h2>
        <p className=" font-thin">
          Explore our best-selling gear, recommended by adventurers like you.
        </p>
      </div>
      <div className="my-14">
        {isError ? (
          <div className="w-full h-28 text-center">
            <p className="justify-center mt-10">Internal Server Error...</p>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <div className="w-fit mx-auto h-28 text-center">
                <Loader />
              </div>
            ) : (
              <div className="w-fit mx-auto grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.data.map((item: { _id: string }) => (
                  <Cards key={item._id} Products={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Best_product;
