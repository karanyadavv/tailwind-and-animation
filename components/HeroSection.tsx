"use client";
import { div } from "motion/react-client";
import React, { useState } from "react";
import { AnimatePresence, easeInOut, easeOut, motion } from "motion/react";

const HeroSection = () => {
  const [buttonCLicked, setButtonClicked] = useState(false);
  return (
    <div className="my-20 flex w-full flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text text-center text-4xl leading-tight font-bold tracking-tight text-transparent md:text-7xl">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-neutral-500 md:text-xl">
        Say goodbye to the <span className="text-primary"> outdated</span>{" "}
        financial tools. Every small business owner, regardless of the
        background, can now manage their{" "}
        <span className="text-primary"> business</span> like a pro. Simple.
        Intuitive. And never boring.
      </p>
      <div className="mt-5 flex w-full max-w-sm md:max-w-lg">
        <input
          type="text"
          className="focus:ring-primary mr-4 flex-1 rounded-xl border border-neutral-600 px-4 text-white transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="relative cursor-pointer rounded-xl border border-neutral-600 px-4 py-2 text-neutral-100">
          <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
          Join Waitlist
        </button>
      </div>
      <div className="group mt-6 flex items-center justify-center gap-1.5">
        <button className="inline-flex cursor-pointer rounded-xl px-4 py-2 transition-all duration-200 hover:bg-neutral-800 active:scale-97">
          <span className="bg-gradient-to-r from-neutral-50 to-neutral-600 bg-clip-text font-medium text-transparent">
            New: Product Intelligence
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right text-neutral-600 transition-all duration-250 group-hover:text-neutral-50"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
      <div className="mt-20 mb-20">
        <button
          className="flex cursor-pointer items-center justify-center gap-2 rounded-3xl border border-neutral-200/20 px-4 py-2 font-medium text-neutral-200 active:scale-97"
          onClick={() => setButtonClicked(!buttonCLicked)}
        >
          <AnimatePresence mode="wait">
            {buttonCLicked ? <CircleCheckSVG /> : <CopySVG />}
          </AnimatePresence>
          Copy page
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

const CircleCheckSVG = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, filter: "blur(2px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      exit={{ scale: 0.8, opacity: 0, filter: "blur(2px)" }}
      key={"circle"}
      transition={{
        duration: 0.1,
        ease: easeInOut,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#ffffff"
        className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check size-4"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
      </svg>
    </motion.div>
  );
};

const CopySVG = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, filter: "blur(2px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      exit={{ scale: 0.8, opacity: 0, filter: "blur(2px)" }}
      key={"copy"}
      transition={{
        duration: 0.1,
        ease: easeInOut,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-copy size-4"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
      </svg>
    </motion.div>
  );
};
