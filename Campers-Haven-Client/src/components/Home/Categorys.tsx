import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../../Variants";
import { useGetCategorysQuery } from "../../redux/features/category/categorysApi";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const Categorys = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { data, isLoading } = useGetCategorysQuery(undefined);

  const Category = ({ categoryData }) => {
    // console.log(categoryData);
    const { _id, name, description, image } = categoryData;

    return (
      <Link to={`/${_id}`}>
        <div className="w-64 h-56 overflow-hidden bg-primary-50 p-4 rounded-md shadow-lg shadow-primary-300 hover:border-2 hover:border-primary-400">
          <figure>
            <img
              src={image}
              alt={`${name} image`}
              className="w-24 h-24 rounded-sm border-2 border-primary-200 shadow-xl"
            />
          </figure>
          <div className="mt-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-primary-700 ">{description} </p>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className=" md:w-11/12 lg:w-4/5 mx-auto my-20 z-0"
    >
      <div className="md:w-11/12 lg:w-4/5 mx-auto my-14">
        <motion.div
          variants={fadeIn("up", 0.2)}
          animate={isInView ? "show" : "hidden"}
          className="text-center my-8"
        >
          <h2 className=" text-xl md:text-2xl lg:text-3xl masked-text font-serif">
            Top Picks for Your Next Trip
          </h2>
          <p className=" font-thin">
            Explore our best-selling gear, recommended by adventurers like you.
          </p>
        </motion.div>
        {isLoading ? (
          <div className="w-fit mx-auto h-28 text-center">
            <Loader />
          </div>
        ) : (
          <motion.div
            variants={fadeIn("down", 0.4)}
            animate={isInView ? "show" : "hidden"}
          >
            <div className="w-fit mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data?.data.map((item: { _id: string }) => (
                <Category categoryData={item} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Categorys;
