"use client";
import Link from "next/link";
import { useState } from "react";
import PopupForm from "../PopupForm";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <header className="flex bg-orange-light w-full items-center justify-between px-5 py-3 sticky top-0 z-50">
      {/* Popup Modal */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-12 items-center">
            <Link href={"#"} className="font-bold text-black text-2xl">
              HEADSHOT
            </Link>
            <nav
              className={`fixed z-40 lg:relative max-lg:shadow-lg right-0 top-0 bottom-0 transition-all duration-300 w-[320px] lg:w-auto bg-white lg:bg-transparent ${
                isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
              }`}
            >
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="lg:hidden block absolute right-4 top-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="feather feather-x"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
              </button>
            </nav>
          </div>
          <ul className="lg:flex hidden gap-6 items-center">
            <li>
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="font-medium text-white inline-block px-6 py-3 rounded-xl bg-primary hover:bg-opacity-85 transition-all"
              >
                Create your headshots now
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 w-full h-full bg-black/60 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </header>
  );
}
