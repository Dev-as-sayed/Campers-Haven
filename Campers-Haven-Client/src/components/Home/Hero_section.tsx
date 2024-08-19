import hero_image from "./../../assets/Home/hero_section.jpeg";

const Hero_section = () => {
  return (
    <section className="h-screen bg-bgColor-20">
      <div>
        <h1 className="text-textColor-10 text-3xl">
          Explore the Wilderness with Confidence
        </h1>
        <p>
          Get ready for your next adventure with top-quality camping gear. From
          durable tents to essential survival kits, our selection has everything
          you need for a successful trip. Explore our range and gear up to
          conquer the great outdoors.
        </p>
      </div>
      <img src={hero_image} alt="" />
    </section>
  );
};

export default Hero_section;
