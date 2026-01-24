import React from "react";
import { motion } from "motion/react";

const firstText = {
  rest: {
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
  hover: {
    y: "-100%",
  },
};

const secondText = {
  rest: {
    y: "100%",
    transition: {
      type: "spring",
      duration: 0.3,
      bounce: 0,
    },
  },
  hover: {
    y: 0,
    // transition: {
    //   type: "spring",
    //   duration: 0.3,
    //   bounce: 0,
    // },
  },
};

const TryProvenButton = () => {
  return (
    <div className="my-24">
      <motion.button
        whileHover={"hover"}
        className="group font-google cursor-pointer overflow-hidden rounded-4xl bg-[#131515] px-6 py-2.5 text-white shadow-[0px_5px_20px_rgba(0,0,0,0.70)] transition-transform duration-300 hover:scale-92"
      >
        <motion.div className="relative flex flex-col items-center justify-center overflow-hidden">
          <motion.span variants={firstText} className="">
            See how suggestions work
          </motion.span>
          <motion.span
            variants={secondText}
            className="absolute translate-y-full transition-transform duration-300 group-hover:translate-y-0"
          >
            See how suggestions work
          </motion.span>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default TryProvenButton;
