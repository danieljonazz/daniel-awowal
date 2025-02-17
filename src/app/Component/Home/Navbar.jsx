import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/avowal.png";
import burger from "../../../../public/icons/burger.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-auto");
    } else {
      document.body.classList.remove("overflow-auto");
    }

    return () => {
      document.body.classList.remove("overflow-auto");
    };
  }, [isOpen]);

  return (
    <nav className="flex justify-around items-center py-4 shadow-2xl text-white bg-black">
      <Image
        src={logo}
        alt="Avowal Logo"
        priority
        className="bg-black h-[15px] sm:h-[20px] lg:h-[27.62px] w-auto object-contain"
      />
      <div>
        <ul className="hidden lg:flex flex-row items-center gap-10">
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <GiHamburgerMenu
          className=" text-white w-4 h-4 lg:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div className="hidden lg:flex gap-4">
        <Link href="/login-page">
          <button className="rounded-full bg-white px-4 py-2 text-black">
            Login
          </button>
        </Link>
        <div className="h-[40px] w-[1] bg-white"></div>

        <Link href="/create-account">
          <button className="border border-white rounded-full px-4 py-2">
            Create free account
          </button>
        </Link>
      </div>
      {isOpen ? (
        <div className="w-full h-full fixed lg:hidden top-0 backdrop:filter backdrop-blur z-10">
          <div className="bg-black text-white py-6 px-6 gap-4 z-20 fixed w-full md:w-[300px] h-full items-center">
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="flex justify-end"
            >
              x
            </div>

            <div className="flex items-center flex-col">
              <div className="flex flex-col">
                <div role="button">
                  <Image
                    src={logo}
                    className="h-[25px] sm:h-[30px] mt-4 object-contain"
                    alt="Avowal Logo"
                  />
                </div>
              </div>
              <ul className="gap-y-12 flex flex-col items-center py-16">
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
              <button className="text-black bg-white rounded-full py-[6px] px-[6px] w-[150px] hover:scale-y-105 duration-300 hover:bg-slate-100 mt-7">
                Login
              </button>

              <div className="bg-white w-[150px] h-[2px] m-4"></div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
