'use client';

import React, { useRef, useState } from "react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Editor from '@monaco-editor/react';
import "monaco-editor/min/vs/editor/editor.main.css";
import LanguageSelector from "@/components/LanguageSelector";


const CODE_SNIPPETS = {
  'c': `#include <stdio.h>\n\n int main(){\n printf("Welcome to AICompile")\n}`,
  'javascript': `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  'typescript': `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  'python': `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  'java': `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  'csharp': 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  'php':  "<?php\n\n$name = 'Alex';\necho $name;\n",
} as {
  [key: string]: string;
};

export default function App() {
    const [value, setvalue] = useState("")
    const editorRef = useRef();
    const [language, setLanguage] = useState("c");

    const onSelect = (language:'c'| 'javascript' | 'typescript' | 'python' | 'java' | 'csharp' | 'php') => {
      setLanguage(language);
      setvalue(CODE_SNIPPETS[language]);
    };

    return (
      <>
        <div className="flex justify-center items-start mt-8 space-x-4">
          <div className="border-1 border-white rounded-lg p-2 w-1/3">
          <LanguageSelector language={language} onSelect={onSelect} /></div>
          <Button color="primary" variant="bordered" size="lg">
            Run Code
          </Button>
          <Button color="secondary" variant="bordered" size="lg">
            Ask Ai to Help
          </Button>
          <Button color="warning" variant="bordered" size="lg">
            Tell Ai to Fix Code
          </Button>
        </div>
        <div className="p-10"></div>
        <div className="flex justify-center items-start mt-8 space-x-4">
          <div style={{ border: '1px solid #ccc', borderRadius: '10px', width: '700px', height: '550px', position: 'relative' }}>
            <Editor
              value={value ?? ''}
              onChange={(value) => setvalue(value ?? '')}
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
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

