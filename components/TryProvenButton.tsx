import React from "react";
import { motion } from "motion/react";

const buttonVariant = {
  rest: {},
  hover: { scale: 0.92 },
};

const firstText = {
  rest: {
    y: 0,
  },
  hover: {
    y: "-100%",
  },
};

const secondText = {
  rest: {
    y: "100%",
  },
  hover: {
    y: 0,
  },
};

const TryProvenButton = () => {
  return (
    <div className="my-24">
      <motion.button
        initial="false"
        whileHover={"hover"}
        variants={buttonVariant}
        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        className="group font-google cursor-pointer overflow-hidden rounded-4xl bg-[#131515] px-6 py-2.5 text-white shadow-[0px_5px_20px_rgba(0,0,0,0.70)]"
      >
        <div className="relative flex flex-col items-center justify-center overflow-hidden">
          <motion.span variants={firstText} className="">
            See how suggestions work
          </motion.span>
          <motion.span
            variants={secondText}
            className="absolute translate-y-full transition-transform duration-300 group-hover:translate-y-0"
          >
            See how suggestions work
          </motion.span>
        </div>
      </motion.button>
    </div>
  );
};

export default TryProvenButton;
