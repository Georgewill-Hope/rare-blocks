"use client";

import { navbarData } from "@/_data";
import Link from "next/link";
import Btn from "./Btn";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="w-full max-w-7xl mx-auto lg:px-5">
      {/* desktop navbar starts here */}
      <div className="hidden lg:flex items-center gap-10 justify-between py-4">
        <div className="flex items-center justify-center gap-1">
          <Link
            href="/"
            className="text-gray-900 font-medium text-base tracking-widest border-yellow-800"
          >
            <p className="text-5xl font-black font-kolker_brush text-center">
              G.Hope
            </p>
          </Link>
        </div>
        <ul className="hidden lg:flex items-center gap-5 mr-auto">
          {navbarData.map((item) => (
            <li key={item.id} className="tracking-wide capitalize">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link href="/register">
            <Btn name="Sign Up" styles="bg-transparent text-black underline" />
          </Link>
          <Link href="/login">
            <Btn
              name="Log In"
              styles="bg-gray-900 text-white rounded-lg font-semibold"
            />
          </Link>
        </div>
      </div>
      {/* desktop navbar ends here */}

      {/* mobile navbar starts here */}
      <div className="w-full lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="h-[12vh] shadow px-5 flex justify-between items-center w-full bg-white ">
          <div>
            <Link
              href="/"
              className="text-gray-900 font-medium text-lg tracking-widest border-b-2 border-yellow-800"
            >
              <p className="text-5xl font-black font-kolker_brush text-center">
                G.Hope
              </p>
            </Link>
          </div>
          <div onClick={() => setShowNavbar(!showNavbar)}>
            <AiOutlineMenu size={27} />
          </div>
        </div>
        <div
          className={`${
            showNavbar ? "w-full" : "-ms-[400px] w-[400px]"
          } backdrop-blur-md h-[88vh] py-10 duration-700 bg-black/70 text-white transition-all`}
        >
          <ul className={`flex flex-col items-center gap-5 `}>
            {navbarData.map((item) => (
              <li key={item.id} className="tracking-wider capitalize text-lg">
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex mt-14 gap-3 items-center justify-center">
            <Link href="/register">
              <Btn
                name="Sign Up"
                styles="bg-black text-white uppercase rounded-md underline"
              />
            </Link>
            <Link href="/login">
              <Btn
                name="Log In"
                styles="bg-white text-black uppercase rounded-md font-semibold"
              />
            </Link>
          </div>
          <div className=" mt-32">
            <p className="text-5xl font-black font-kolker_brush text-center">
              G.Hope
            </p>
          </div>
        </div>
      </div>
      {/* mobile navbar ends here */}
    </nav>
  );
};

export default Navbar;
