import React from "react";

const Checkbox = () => {
  return (
    <div className="">
      <button className="my-20 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#ffd915] to-[#ffb915] px-4 py-2 shadow-[0px_0px_1px_1px_rgba(255,255,255,0.08)_inset,0px_1px_1.5px_0px_rgba(0,0,0,0.32),0px_0px_0px_0.5px_#ffb915] duration-150 active:scale-97">
        {" "}
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            className="peer hidden size-3.5 accent-yellow-900"
          />
          <div className="size-3 rounded-xs border-1 border-yellow-700 transition duration-400 peer-checked:border-0 peer-checked:bg-yellow-900"></div>
          <span className="shadow[0px_1px_1.5px_rgba(255,255,255,0.16);] font-arimo font-semibold text-yellow-900">
            {" "}
            Log your task
          </span>
        </label>
      </button>
    </div>
  );
};

export default Checkbox;
