import React from "react";
import Logo from "../../assets/skypelogo1.png";
import Skype from "../../assets/skype2.png";
import { MdSearch } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";
import { PiListFill } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";

const MenuNav = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Men's",
    link: "/#",
  },
  {
    id: 3,
    name: "Women's",
    link: "/#",
  },
  {
    id: 4,
    name: "Kid's",
    link: "/#",
  },
  {
    id: 4,
    name: "Home & Leaving",
    link: "/#",
  },
  {
    id: 4,
    name: "Beauty",
    link: "/#",
  },
  {
    id: 4,
    name: "Trendings Products",
    link: "/#",
  },
];


const DroLinks = [
  {
    id: 1,
    name: "Makeup",
    link: "/#",
  },
  {
    id: 2,
    name: "Haircare",
    link: "/#",
  },
  {
    id: 3,
    name: "Baby Care",
    link: "/#",
  },
  {
    id: 4,
    name: "Men's Grooming",
    link: "/#",
  },
];

const DropdLinks = [
  {
    id: 1,
    name: "Lamps & Lights",
    link: "/#",
  },
  {
    id: 2,
    name: "Home Décor",
    link: "/#",
  },
  {
    id: 3,
    name: "Kitchen & Table",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Deal of the day",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup, handleSignIn }) => {
  return (
    <div className="shadow-md fixed z-40 w-[100%] bg-gray-900 text-white">
      {/* Upper Navbar */}
      <div className="bg-[#1C0C5B] ">
        <div className="px-[30px] py-[10px] flex justify-between items-center">
          <div className="flex sm:gap-2 gap-1 items-center">
            <div className="group relative block sm:hidden z-10">
            <a href="#" className="flex items-center cursor-pointer hover:scale-[1.1] transition-transform duration-200">
              <PiListFill className="bg-gradient-to-r from-gray-800 to-gray-600 text-white text-4xl rounded-[5px] sm:hidden block" />
            </a>
            <ul className="absolute hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black shadow-lg font-bold">
              {MenuNav.map((data) => (
                <li
                  key={data.id}
                  className="hover:bg-blue-500 hover:text-white rounded-md"
                >
                  <a href={data.link} className="inline-block px-2 py-1 w-full">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            </div>
            <a href="#">
              <img
                src={Logo}
                alt="Logo"
                className="w-10 uppercase hidden sm:block"
              />
            </a>
            <a>
              <img src={Skype} alt="Skype" className="w-[140px] h-[50px]" />
            </a>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-[2px] border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-gray-800"
              />
              <MdSearch className="text-gray-500 group-hover:text-primary absolute top-2 right-3 size-5" />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-gray-800 to-gray-600 transition-all duration-300 text-white rounded-full py-1 px-4 flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Cart
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <a onClick={() => handleSignIn()}
              href="#"
              className="text-4xl bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:scale-[1.1] transition-transform duration-200"
            >
              <HiMiniUserCircle />
            </a>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      
      <div className=" py-2">
        <div className="flex justify-center gap-5 items-center font-bold">
          <a
            href="#"
            className="hover:scale-[1.1] transition-transform duration-200 hidden sm:block"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:scale-[1.1] transition-transform duration-200 hidden sm:block"
          >
            Mens
          </a>
          <a
            href="#"
            className="hover:scale-[1.1] transition-transform duration-200 hidden sm:block"
          >
            Womens
          </a>
          <a
            href="#"
            className="hover:scale-[1.1] transition-transform duration-200 hidden sm:block"
          >
            Kids
          </a>
          <div className="group relative hidden sm:block">
            <a
              href="#"
              className="flex items-center cursor-pointer hover:scale-[1.1] transition-transform duration-200"
            >
              Home & Leaving
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 text-large" />
              </span>
            </a>
            <ul className="absolute hidden group-hover:block w-[160px] rounded-md bg-white p-2 text-black shadow-lg">
              {DropdLinks.map((data) => (
                <li
                  key={data.id}
                  className="hover:bg-gray-600 hover:text-white rounded-md"
                >
                  <a href={data.link} className="inline-block px-2 py-1 w-full">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative hidden sm:block">
            <a
              href="#"
              className="flex items-center cursor-pointer hover:scale-[1.1] transition-transform duration-200"
            >
              Beauty
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 text-large" />
              </span>
            </a>
            <ul className="absolute hidden group-hover:block w-[160px] rounded-md bg-white p-2 text-black shadow-lg">
              {DroLinks.map((data) => (
                <li
                  key={data.id}
                  className="hover:bg-gray-600 hover:text-white rounded-md"
                >
                  <a href={data.link} className="inline-block px-2 py-1 w-full">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative hidden sm:block">
            <a
              href="#"
              className="flex items-center cursor-pointer hover:scale-[1.1] transition-transform duration-200"
            >
              Trendings Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 text-large" />
              </span>
            </a>
            <ul className="absolute hidden group-hover:block w-[160px] rounded-md bg-white p-2 text-black shadow-lg">
              {DropdownLinks.map((data) => (
                <li
                  key={data.id}
                  className="hover:bg-gray-600 hover:text-white rounded-md"
                >
                  <a href={data.link} className="inline-block px-2 py-1 w-full">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="group relative block sm:hidden">
              <input
                type="text"
                placeholder="search"
                className="w-[300px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-[2px] border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-gray-800"
              />
              <MdSearch className="text-gray-500 group-hover:text-primary absolute top-2 right-3 size-5" />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
