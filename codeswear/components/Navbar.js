import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <Image width={200} height={40} src={"/logo.png"} />
      </div>
      <div className="nav">
        <ul className="flex items-center">
          <li>TShirts</li>
          <li>Hoodies</li>
          <li>Stickers</li>
          <li>Mugs</li>
        </ul>
      </div>
      <div className="cart">
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
