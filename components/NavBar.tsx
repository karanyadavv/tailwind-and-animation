import Image from "next/image";
import React from "react";
import Logo from "../public/vercel.svg";
import { NavBarLinks } from "@/app/data/Navbar";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="shadow-navbar mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-2xl border border-neutral-500 p-4">
      <Image alt="logo" src={Logo} height={50} width={50} className="" />
      <div className="mr-10 flex items-center gap-4 text-sm text-neutral-500">
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
    </div>
  );
};

export default NavBar;
