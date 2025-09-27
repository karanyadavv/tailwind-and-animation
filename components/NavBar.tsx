import Image from "next/image";
import React from "react";
import Logo from "../public/vercel.svg";

const NavBar = () => {
  return (
    <div className="shadow-navbar mx-auto mt-4 flex max-w-xl items-center justify-between rounded-2xl border border-neutral-200 p-4">
      <Image alt="logo" src={Logo} height={50} width={50} className="" />
    </div>
  );
};

export default NavBar;
