import Link from "next/link";
import React from "react";
import Product from "@/models/Product";
import mongoose from "mongoose";

const TShirts = ({ products }) => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5">
                  <Link passHref={true} href={`/product/${products[item].slug}`}>
                    <img
                      alt="ecommerce"
                      // className="w-full m-auto md:mx-0 h-[60vh] md:h-[50vh] block relative rounded overflow-hidden"
                      className="m-auto h-[30vh] md:h-[36vh] block"
                      src={products[item].img}
                    />

                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        T-Shirt
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">৳{products[item].price}</p>
                      <p className="mt-1">S,M,L,XL,XXL</p>
                    </div>
                  </Link>
                </div>
              );
            })}
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
  let products = await Product.find({category:'tshirt'});
  let tShirts = {};
    for(let item of products){
        if(item.title in tShirts){
           if(!tShirts[item.title].color.includes(item.color) && 
           item.availableQty > 0){
            tShirts[item.title].color.push(item.color);
           }
           if(!tShirts[item.title].size.includes(item.size) && 
           item.availableQty > 0){
            tShirts[item.title].size.push(item.size);
           }
        }else{
            tShirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQty > 0){
                tShirts[item.title].color = [item.color];
                tShirts[item.title].size = [item.size];
            }
        }
    }
  return {
    props: { products: JSON.parse(JSON.stringify(tShirts)) },
  };
}

export default TShirts;
