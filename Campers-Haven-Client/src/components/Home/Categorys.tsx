import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "../../Variants";
import { useGetCategorysQuery } from "../../redux/features/category/categorysApi";

const Categorys = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { data, isError, isLoading } = useGetCategorysQuery();

  const Category = (categoryData) => {
    console.log(categoryData);

    return (
      <>
        <h1>hi</h1>
      </>
    );
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className=" md:w-11/12 lg:w-4/5 mx-auto mt-16 z-0"
    >
      <div className="md:w-11/12 lg:w-4/5 mx-auto my-14">
        <motion.div
          variants={fadeIn("up", 0.2)}
          animate={isInView ? "show" : "hidden"}
          className="text-center"
        >
          <h2 className=" text-xl md:text-2xl lg:text-3xl masked-text font-serif">
            Top Picks for Your Next Trip
          </h2>
          <p className=" font-thin">
            Explore our best-selling gear, recommended by adventurers like you.
          </p>
        </motion.div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <motion.div
            variants={fadeIn("down", 0.6)}
            animate={isInView ? "show" : "hidden"}
          >
            <div>
              {data?.data.map((item: { _id: string }) => (
                <Category key={item._id} categoryData={item} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Categorys;
