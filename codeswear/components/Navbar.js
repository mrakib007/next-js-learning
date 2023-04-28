import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ logout,user,cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [dropdown,setDropdown] = useState(false);
  
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex md:flex-row md:justify-start flex-col justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mr-auto md:mx-5">
        <Link href={"/"}>
          <Image width={200} height={40} src={"/logo.png"} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li className="hover:text-pink-500">TShirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-pink-500">Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:text-pink-500">Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:text-pink-500">Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center cart cursor-pointer absolute right-0 mx-5 top-4">
     
      <a onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
      {dropdown &&  <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-8 bg-pink-300 top-6 py-4 rounded-md px-5 w-32">
        <ul>
        <Link href={'/myAccount'}><li className="py-1 hover:text-pink-700 font-bold text-sm">My Account</li> </Link> 
        <Link href={'orders'}> <li className="py-1 hover:text-pink-700 font-bold text-sm">Orders</li></Link> 
        <li onClick={logout} className="py-1 hover:text-pink-700 font-bold text-sm">Logout</li>
        </ul>
      </div>}

      {user.value && <MdAccountCircle  className="text-xl md:text-2xl mx-2" />}
      </a>
        {!user.value && <Link href={"/login"}>
          <button className="bg-pink-400 px-2 mx-2 py-1 rounded-md text-sm text-white">Login</button>
        </Link>}
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-2xl"
        />
      </div>

    

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-pink-100 px-8 py-10 transform
         transition-transform ${
           Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
         }`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">Your cart is empty.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-2/3 flex font-semibold justify-center items-center text-lg">
                    <AiFillMinusCircle
                      onClick={() =>
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="cursor-pointer text-pink-500"
                    />
                    <span className="mx-2 text-sm">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() =>
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        )
                      }
                      className="cursor-pointer text-pink-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="total font-bold my-2">Subtotal: ৳{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button
              className="flex mr-2 text-white bg-pink-500 border-0
         py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
            >
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-pink-500 border-0
          py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
