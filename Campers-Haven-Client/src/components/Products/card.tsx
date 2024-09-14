import { Carousel } from "antd";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Cards: React.FC = (products) => {
  const { _id, name, images, price, offers_price } = products.Products;

  return (
    <>
      {products ? (
        <div className="overflow-hidden rounded bg-transparent text-slate-500 w-60 ">
          <Carousel>
            {images.map((img: string) => (
              <figure>
                <img
                  src={img}
                  alt="card image"
                  className="aspect-video w-full h-60"
                />
              </figure>
            ))}
          </Carousel>
          <div className=" flex justify-between w-full">
            <div className="w-4/5">
              <header className="">
                <h3 className="text-xl font-medium text-slate-700">{name}</h3>
                {offers_price ? (
                  <p className=" text-slate-400">
                    {offers_price} TK
                    {
                      <>
                        {" "}
                        <span className="line-through text-red-400">
                          {price} TK
                        </span>
                      </>
                    }
                  </p>
                ) : (
                  <p className=" text-slate-400">{offers_price} TK</p>
                )}
              </header>
            </div>
            <div className="w-fit text-right">
              <button className="text-primary-500 text-xl">+</button>
              <br />
              <Link to={`/product/${_id}`}>
                <button className="underline hover:text-emerald-400">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <p>Loading</p>
        </div>
      )}
    </>
  );
};

export default Cards;
