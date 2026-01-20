import React from "react";

const Checkbox = () => {
  return (
    <div className="my-20 flex flex-col items-center gap-1">
      <button className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#ffd915] to-[#ffb915] px-4 py-2 shadow-[0px_0px_1px_1px_rgba(255,255,255,0.08)_inset,0px_1px_1.5px_0px_rgba(0,0,0,0.32),0px_0px_0px_0.5px_#ffb915] duration-160 ease-[cubic-bezier(0.25,_0.46,_0.45,_0.96)] active:scale-97">
        {/* <label className="flex cursor-pointer items-center gap-2"> */}{" "}
        {/* <input
            type="checkbox"
            className="peer hidden size-3.5 accent-yellow-900"
          /> */}
        <div className="relative size-3 overflow-hidden">
          <div className="absolute inset-0 size-3 rounded-xs bg-yellow-900 transition-[clip-path] duration-200 ease-out [clip-path:inset(100%_0_0_0)] group-active:duration-1200 group-active:ease-linear group-active:[clip-path:inset(0_0_0_0)]"></div>
          <div className="absolute inset-0 size-3 rounded-xs border-1 border-yellow-900"></div>
        </div>
        <span className="shadow[0px_1px_1.5px_rgba(255,255,255,0.16);] font-semibold text-yellow-900">
          {" "}
          Log your task
        </span>
        {/* </label> */}
      </button>
      {/* <span className="text-[6px] text-neutral-500">hold to log</span> */}
    </div>
  );
};

export default Checkbox;
