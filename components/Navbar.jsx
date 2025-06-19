"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isBlur, setIsBlur] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBlur(!isBlur);
  };

  return (
    <>
      <header className="realtive">
        <div
          className={`sticky top-0 p-4 flex flex-row items-center justify-between ${
            isBlur ? "blur-sm" : ""
          }`}
        >
          <div className="font-extrabold">
            <h1>Torres Dev</h1>
          </div>

          <div className="hidden lg:flex lg:justify-center lg:flex-grow font-light">
            <Link className="mx-4 hover:underline" href="">
              Home
            </Link>
            <Link className="mx-4 hover:underline" href="">
              Resume
            </Link>
            <Link className="mx-4 hover:underline" href="">
              Portfolio
            </Link>
            <Link className="mx-4 hover:underline" href="">
              Contact
            </Link>
          </div>

          <div className="lg:hidden relative">
            <button className="cursor-pointer" onClick={toggleMenu}>
              <img src="Menu.svg" alt="Abrir menú" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="bg-[#323232] absolute top-2 right-4 mt-2 p-4 w-48 text-center rounded-xl border-2 z-10">
            <button
              className="cursor-pointer absolute top-1 right-3 text-2xl"
              onClick={toggleMenu}
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-4 ">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <Link className="hover:underline" href="">
                Resume
              </Link>
              <Link className="hover:underline" href="">
                Portfolio
              </Link>
              <Link className="hover:underline" href="">
                Contact
              </Link>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
