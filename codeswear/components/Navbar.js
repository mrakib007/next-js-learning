import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {AiFillCloseCircle, AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = () => {
  const toggleCart = () =>{

  }
  const ref = useRef();
  return (
    <div className="flex md:flex-row md:justify-start flex-col justify-center items-center py-2 shadow-md">
      <div className="logo mx-5">
        <Link href={'/'}><Image width={200} height={40} src={"/logo.png"} /></Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={'/tshirts'}><li>TShirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5 top-4">
      <AiOutlineShoppingCart className="text-xl md:text-2xl"/>
      </div>

      <div ref={ref} className="sidebar absolute top-0 right-0 bg-pink-100 p-10">
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"><AiFillCloseCircle/></span>
        <ol>
          <li>
            <span>T-Shirt - Wear The Code</span></li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
