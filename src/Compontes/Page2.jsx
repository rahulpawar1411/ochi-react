import { motion } from "framer-motion";
import React from "react";

function Page2() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full bg-[#004D43] rounded-tl-3xl   rounded-tr-3xl border-white"
    >
      <div className="flex  text-white text-[20vw] px-5 py-5 overflow-hidden  whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className=" uppercase  font-bold pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className=" uppercase font-bold pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Page2;
