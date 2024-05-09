import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-start mt-8 space-x-4">
        <Textarea
          label="Code Here"
          variant="bordered"
          placeholder="Enter your Code"
          disableAnimation
          disableAutosize
          classNames={{
            base: "max-w-lg",
            input: "resize-y min-h-[500px]",
          }}
        />
        <Textarea
          label="Output"
          variant="bordered"
          placeholder="Output will appear here"
          disableAnimation
          disableAutosize
          readOnly
          classNames={{
            base: "max-w-lg",
            input: "resize-y min-h-[500px]",
          }}
        />
      </div>
      <div className="flex flex-col items-center mt-8 space-x-4 w-full">
        <Textarea
          label="Terminal"
          variant="bordered"
          placeholder=""
          disableAnimation
          disableAutosize
          classNames={{
            base: "w-full max-w-5xl",
            input: "resize-y min-h-[300px]",
          }}
        />
      </div>

    </>
  );
}
