import Link from "next/link";
import React from "react";
import Product from "@/models/Product";
import mongoose from "mongoose";

const TShirts = ({products}) => {
  console.log(products)
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link href={"/product/wear-the-code"}>
                <img
                  alt="ecommerce"
                  className="w-full m-auto md:mx-0 h-[60vh] md:h-[50vh] block relative rounded overflow-hidden"
                  src="https://m.media-amazon.com/images/I/71HFM5GXXjL._AC_UY550_.jpg"
                />

                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    T-Shirt
                  </h3>
                  <h2 className="text-white title-font text-lg font-medium">
                    Wear The Code
                  </h2>
                  <p className="mt-1">৳599</p>
                  <p className="mt-1">S,M,L,XL,XXL</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
    }
  let products = await Product.find();
  return {
    props: {products:JSON.parse(JSON.stringify(products))}
  };
}

export default TShirts;
