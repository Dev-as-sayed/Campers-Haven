/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/product/productApi";
import { Carousel } from "antd";

const ProductDerails = () => {
  const { _id } = useParams();
  const getProductData = useGetSingleProductQuery(_id);
  const { data, isLoading } = getProductData;
  let product = {};
  if (data) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    product = data.data;
  }
  console.log(product);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    name,
    description,
    images,
    offered,
    offers_price,
    price,
    ratings,
    status,
  } = product;

  // ==============================================

  // const contentStyle: React.CSSProperties = {
  //   margin: 0,
  //   // width: "300px",
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  return (
    <section className="h-screen ">
      {isLoading ? (
        <div>Loading------------------</div>
      ) : (
        <div className="h-fit">
          <h2 className="text-center">{name}</h2>
          <div className="flex w-10/12 mx-auto gap-12">
            <div className="">
              <>
                <Carousel
                  className="w-96 h-96"
                  arrows
                  dotPosition="bottom"
                  infinite={true}
                >
                  {images.map((image: string | undefined) => (
                    <div className=" w-96 h-96 bg-gray-400">
                      <img src={image} className="w-full h-full" alt="" />
                    </div>
                  ))}
                </Carousel>
              </>

              {/* <Carousel
                className="w-96 h-96"
                arrows
                dotPosition="bottom"
                infinite={true}
              >
                <div className=" w-96 h-96 bg-gray-400">
                  <h3>1</h3>
                </div>
                <div className=" w-96 h-96 bg-gray-400">
                  <h3>2</h3>
                </div>
              </Carousel> */}
            </div>
            <div>
              <p>
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
              </p>
              <p></p>
              <p></p>
              <button></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDerails;
