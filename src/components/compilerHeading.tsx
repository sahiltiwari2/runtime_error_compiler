"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="text"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4 border-4 border-black text-4xl font-bold"
      >
        Compile Here !!
      </HoverBorderGradient>
    </div>
  );
}

