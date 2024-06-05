import React from 'react'
import 'react-syntax-highlighter/dist/cjs/styles/hljs';
import 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';
import 'react-syntax-highlighter/dist/cjs/styles/hljs/monokai';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '@/components/circleanimation.css';
import { PinContainer } from "@/components/ui/3d-pin";
import Image from 'next/image';

const page = () => {
  const codeString = `#include <stdio.h>

  int main() {
    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int transpose[3][3];
  
    // Transpose the matrix
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            transpose[j][i] = matrix[i][j];
        }
    }
  
    // Print the transposed matrix
    printf("Original matrix:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
  
    printf("\\nTransposed matrix:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", transpose[i][j]);
        }
        printf("\\n");
    }
  
    return 0;
  }`;
  const customStyle = {
    backgroundColor: 'rgb(100, 0, 255, 0.1)',
    padding: '10px',
    fontSize: '18px',
  };
  return (
    <>

      <div className=" max-w-screen-xl mx-auto flex justify-between items-start pt-8">
        <div className=" border-3 border-white  rounded-lg pl-3 p-3 w-2/3  pt-6">
          <div className="w-2/3  pt-6">

            <h1 className="text-4xl font-bold text-purple-400 sm:text-5xl lg:text-6xl ">
              Practical-1
            </h1>
          </div>

          <div className=" max-w-screen-xl mx-auto flex justify-between items-start ">
            <div className="w-2/3  pt-6">
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl mt-4 ">
                TRANSPOSE OF MATRIX USING ARRAY
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto flex justify-between items-start pt-8">
        <div className="w-2/3 pr-4">
          <SyntaxHighlighter language="c" style={a11yDark} customStyle={customStyle}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div className="w-1/3 pl-4">
        <PinContainer
      title="Open and Learn"
      href="https://www.youtube.com/watch?v=A2bP3PyfqDQ"
    >
      <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[30rem]">
        <h3 className="max-w-xs !pb-4 !m-0 font-bold  text-xl text-slate-100">
          YouTube Video
        </h3>
        <div className="text-lg !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">
            Learn how to make a programe for transpose of matrix using arrays.
          </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-6">
          <Image
            src="/c1pic.png"
            alt="YT vid"
            width={300}
            height={200}
          />
        </div>
      </div>
    </PinContainer>
        </div>
      </div>

    </>
  )
}

export default page
