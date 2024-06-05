'use client';
import React, { useState } from "react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Editor from '@monaco-editor/react';
import "monaco-editor/min/vs/editor/editor.main.css";

export default function App() {
  const [code, setCode] = useState("");

  const handleCodeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCode(event.target.value);
  };
  const handleRun = () => {

    console.log(code);
  };

  return (
    <>
      <div className="flex justify-center items-start mt-8 space-x-4">
        <Button color="primary" variant="bordered" onClick={handleRun} size="lg">
          Run Code
        </Button>
        <Button color="secondary" variant="bordered" onClick={handleRun} size="lg">
          Ask Ai to Help
        </Button>
        <Button color="warning" variant="bordered" onClick={handleRun} size="lg">
          Tell Ai to Fix Code
        </Button>
      </div>
      <div className="p-10"></div>
      <div className="flex justify-center items-start mt-8 space-x-4">
        
        <div style={{ border: '1px solid #ccc', borderRadius: '10px', width: '700px', height: '550px', position: 'relative' }}>
          <Editor
            value={`
// Code Here With the power of AI always ready to Help :)

#include <stdio.h>
              
int main() {
  printf("Welcome, To AI powered Symantical Compiler");
  return 0;
}
`}
            language="c"
            theme="vs-dark"
            options={{
              selectOnLineNumbers: true,
              minimap: {
                enabled: false,
              },
              theme: 'vs-dark',
            }}
            loading={<div>Loading Ai TO Compiler...</div>}
          />
        </div>
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

