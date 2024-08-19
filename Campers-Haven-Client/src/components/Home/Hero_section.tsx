import hero_image from "./../../assets/Home/hero_section.jpeg";
import "./Hero_section.css";

const Hero_section = () => {
  return (
    <section className="sm:flex md:flex lg:flex h-screen bg-bgColor-20 justify-center">
      <div className="h-fit my-auto max-w-md">
        <h1 className="text-textColor-10 text-3xl">
          Explore the Wilderness with Confidence
        </h1>
        <p className="text-textColor-10">
          Get ready for your next adventure with top-quality camping gear. From
          durable tents to essential survival kits, our selection has everything
          you need for a successful trip. Explore our range and gear up to
          conquer the great outdoors.
        </p>
      </div>
      <div className="h-fit my-auto">
        <img src={hero_image} alt="" className="octagon" />
      </div>
    </section>
  );
};

export default Hero_section;
