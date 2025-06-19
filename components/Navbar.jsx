"use client";
import { useState } from "react";

export default function Navbar() {
  const [isBlur, setIsBlur] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBlur(!isBlur);
  };

  return (
    <>
      <div
        className={`sticky top-0 p-4 flex flex-row justify-items-stretch ${
          isBlur ? "blur-sm" : ""
        }`}
      >
        <div className=" grow">
          <h1>Torres Dev</h1>
        </div>
        <div className="">
          <button className=" cursor-pointer" onClick={toggleMenu}>
            <img src="Menu.svg" alt="" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="bg-[#323232] relative justify-self-end self-start m-4 p-4 h-fit w-[40%] text-center rounded-xl border-2 md:w-[40%]">
          <button
            className="cursor-pointer justify-self-end absolute top-0 right-3 text-xl"
            onClick={toggleMenu}
          >
            x
          </button>
          <ul>
            <li>Home</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </>
  );
}
