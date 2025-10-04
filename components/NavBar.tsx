"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/vercel.svg";
import { NavBarLinks } from "@/app/data/Navbar";
import Link from "next/link";
import { AnimatePresence, easeOut, motion } from "motion/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="shadow-navbar relative mx-auto flex max-w-4xl items-center justify-between border-b-4 border-neutral-800 p-4 md:mt-4 md:rounded-2xl md:border-4">
        <Image alt="logo" src={Logo} height={50} width={50} className="" />
        <div className="mr-10 hidden items-center gap-4 text-sm font-medium text-neutral-500 md:flex">
          {NavBarLinks.map((link, index) => {
            return (
              <Link
                className="hover:text-neutral-200"
                href={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep text-neutral-200"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ transformOrigin: "top right" }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="absolute inset-x-0 top-22 mx-auto max-w-[90%] rounded-md bg-neutral-800"
            >
              <div className="flex flex-col items-start gap-4 p-4 text-sm font-medium text-neutral-300 md:hidden">
                {NavBarLinks.map((link, index) => {
                  return (
                    <Link
                      className="hover:text-neutral-200"
                      href={link.href}
                      key={index}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
