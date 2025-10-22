import React from "react";

import {
  SiAnthropic,
  SiGithubcopilot,
  SiGooglegemini,
  SiMeta,
  SiOpenai,
} from "react-icons/si";

const Icons = [
  {
    title: "Anthropic ",
    size: "size-8",
    circle: "circle-1",
    icon: <SiAnthropic className="h-4 w-4 dark:text-white" />,
  },
  {
    title: "Githubcopilot",
    size: "size-12",
    circle: "circle-2",
    icon: <SiGithubcopilot className="h-6 w-6 dark:text-white" />,
  },
  {
    title: "OpenAi",
    size: "size-16",
    circle: "circle-3",
    icon: <SiOpenai className="h-8 w-8 dark:text-white" />,
  },
  {
    title: "Meta",
    size: "size-12",
    circle: "circle-4",
    icon: <SiMeta className="h-6 w-6 dark:text-white" />,
  },
  {
    title: "Googlegemini",
    size: "size-8",
    circle: "circle-5",
    icon: <SiGooglegemini className="h-4 w-4 dark:text-white" />,
  },
];

const Card = () => {
  return (
    <div className="h-80 w-80 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 shadow-2xl dark:bg-neutral-200">
      <div className="animate-marquee flex h-40 items-center justify-center gap-4 mask-r-from-50% mask-l-from-50%">
        {Icons.map((item, index) => {
          return (
            <div
              key={item.title}
              className={`${item.size} flex size-10 items-center justify-center rounded-full bg-neutral-600 dark:bg-neutral-100`}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
      <div className="p-4">
        <h2 className="text-md font-bold text-neutral-500">Damn good card</h2>
        <p className="mt-2 text-sm text-neutral-400">
          A card that showcases a set of tools that you use to create your
          product.
        </p>
      </div>
    </div>
  );
};

export default Card;
