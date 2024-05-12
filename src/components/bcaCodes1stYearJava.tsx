"use client";
import JavaCodes from "@/components/javacodes";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";


const LampDemo = () => {
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Java<br /><br /><br /><div className="text-3xl text-slate-300">"Java is a multiplatform, object-oriented programming language known for its write once,<br />run anywhere capability,enabling code to run on any device with a Java Virtual Machine (JVM). <br />It's widely used for developing applications ranging from mobile apps and <br />enterprise software to IoT devices and big data applications</div>
        </motion.h1>
      </LampContainer>

      <JavaCodes/>
          
      
    </>

  );
};

export default LampDemo;
