import Image from "next/image";
import Link from "next/link";
import React from "react";
import favicon from "../../../public/favicon.ico";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image alt="logo" src={favicon} height={50} width={50} />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Your Favorite Vacation Destination Waits Here</h1>
    </header>
  );
};

export default Header;
