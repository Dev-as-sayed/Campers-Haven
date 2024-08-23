import { motion, useInView } from "framer-motion";
import hero_image from "./../../assets/Home/hero_section.jpeg";
import "./Hero_section.css";
import { useRef } from "react";
import { fadeIn } from "../../Variants";

const Hero_section: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className=" md:w-11/12 lg:w-4/5 mx-auto mt-16 z-0
    "
    >
      <div className="p-8 flex bg-primary-400 rounded-lg flex-col items-center lg:flex-row md:flex-row gap-2 lg:gap-16 md:gap-16 lg:container md:container w-full ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          animate={isInView ? "show" : "hidden"}
          className="w-full lg:w-1/2 md:w-1/2 text-center lg:text-start md:text-start"
        >
          <div>
            <div className="flex flex-col gap-4">
              <h2 className="masked-text font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[50px] md:leading-[60px] lg:leading-[60px] ">
                Explore the Wilderness with Confidence
              </h2>
              <p className="text-white font-thin text-base lg:text-lg md:text-lg leading-7">
                Get ready for your next adventure with top-quality camping gear.
                From durable tents to essential survival kits, our selection has
                everything you need for a successful trip. Explore our range and
                gear up to conquer the great outdoors.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.figure
          variants={fadeIn("down", 0.2)}
          animate={isInView ? "show" : "hidden"}
          className="w-1/2 items-center justify-center lg:flex md:flex "
        >
          <img src={hero_image} className=" octagon" alt="" />
        </motion.figure>
      </div>
    </motion.div>
  );
};

export default Hero_section;
