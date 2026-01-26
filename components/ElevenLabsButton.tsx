"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

const ElevenLabsButton = () => {
  const [hovered, setHovered] = useState(false);
  const [textRef, textBounds] = useMeasure();
  const [buttonRef, buttonBounds] = useMeasure();
  return (
    <div className="my-28">
      {/* {buttonBounds.width / 10}
      {textBounds.width} */}
      <motion.button
        ref={buttonRef}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ width: 48 }}
        animate={{ width: hovered ? 160 : 48 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex cursor-pointer items-center gap-2 rounded-[68px] bg-white px-2 py-2"
      >
        <div className="flex-shrink-0">
          <WaveFormSVG />
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.div
              ref={textRef}
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden whitespace-nowrap"
            >
              <p className="text-md font-bold tracking-normal">TRY A CALL</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ElevenLabsButton;

const WaveFormSVG = () => {
  return (
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
      className="lucide lucide-audio-lines-icon lucide-audio-lines size-8 rounded-4xl bg-black p-[8px] text-white"
    >
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </svg>
  );
};
