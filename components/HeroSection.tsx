import React from "react";

const HeroSection = () => {
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
    </div>
  );
};

export default HeroSection;
