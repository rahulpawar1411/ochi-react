import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";

const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handlHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-16 py-10 border-b-[1px] border-[#212121] ">
        <h1 className="text-5xl font-[#212121] ">Featured projects</h1>
      </div>

      <div className="allinOne flex-col">


        
       <div className="point flex items-center  ">
       <h1 className="pointtext mx-20 -mb-8 mt-10 flex items-center text-[15px] font-[Neue Montreal] uppercase gap-2 "
        ><GoDotFill /> Cardboard Spaceship</h1>
         <h1 className="pointtext mx-[26%] -mb-8 mt-10 flex items-center text-[15px] font-[Neue Montreal] uppercase gap-2 "
        ><GoDotFill /> AH2 & Matt Horn</h1>
       </div>
      
      
      <div className="cards w-full flex gap-5 mt-10 px-16">

        <motion.div
          className="cardcan w-1/2  h-[80vh] relative"
          onHoverStart={() => handlHover(0)}
          onHoverEnd={() => handlHoverEnd(0)}
          // onMouseEnter={()=> setHovering(true)}
          // onMouseLeave={()=> setHovering(false)}
        >
          <div className="card w-full h-full  bg-green-500 overflow-hidden rounded-xl ">
            {/* Animated-centertext */}
            <h1 className=" absolute left-full flex overflow-hidden  z-10 text-[#CDEA68] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-8xl uppercase ">
              {"cardbord spaceship".split("").map((items, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  // animate={hovering ? {y:"0"} : {y:"100%"}}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  animate={cards[0]}
                  className=" inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          className="cardcan w-1/2  h-[80vh] relative"
          onHoverStart={() => handlHover(1)}
          onHoverEnd={() => handlHoverEnd(1)}
        >
          <div className="card w-full h-full  bg-green-500 overflow-hidden rounded-xl ">
            {/* Animated-centertext */}
            <h1 className=" absolute right-full z-10 flex text-[#CDEA68] top-[33%] translate-x-1/2  translate-y-1/2 font-bold text-8xl uppercase overflow-hidden">
              {"ah2 & matt horn".split("").map((items, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  // animate={hovering ? {y:"0"} : {y:"100%"}}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  animate={cards[1]}
                  className=" inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>

      <div className =" w-full h-[8vw] px-16 flex gap-2  ">
     <Button/>
     <Button/> 
     </div>

      {/* ........................................ */}


        
      <div className="point flex items-center  ">
       <h1 className="pointtext mx-20 -mb-8 mt-10 flex items-center text-[15px] font-[Neue Montreal] uppercase gap-2 "
        ><GoDotFill /> Fyde</h1>
         <h1 className="pointtext mx-[35%]  -mb-8 mt-10 flex items-center text-[15px] font-[Neue Montreal] uppercase gap-2 "
        ><GoDotFill /> Vise</h1>
       </div>
      
      
      <div className="cards w-full flex gap-5 mt-10 px-16">

        <motion.div
          className="cardcan w-1/2  h-[80vh] relative"
          onHoverStart={() => handlHover(2)}
          onHoverEnd={() => handlHoverEnd(2)}
          // onMouseEnter={()=> setHovering(true)}
          // onMouseLeave={()=> setHovering(false)}
        >
          <div className="card w-full h-full  bg-green-500 overflow-hidden rounded-xl ">
            {/* Animated-centertext */}
            <h1 className=" absolute left-full flex overflow-hidden  z-10 text-[#CDEA68] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-8xl uppercase ">
              {"fyde".split("").map((items, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  // animate={hovering ? {y:"0"} : {y:"100%"}}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  animate={cards[2]}
                  className=" inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          className="cardcan w-1/2  h-[80vh] relative"
          onHoverStart={() => handlHover(3)}
          onHoverEnd={() => handlHoverEnd(3)}
        >
          <div className="card w-full h-full  bg-green-500 overflow-hidden rounded-xl ">
            {/* Animated-centertext */}
            <h1 className=" absolute right-full z-10 flex text-[#CDEA68] top-[33%] translate-x-1/2  translate-y-1/2 font-bold text-8xl uppercase overflow-hidden">
              {"vise".split("").map((items, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  // animate={hovering ? {y:"0"} : {y:"100%"}}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  animate={cards[3]}
                  className=" inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>

      <div className=" w-full h-[8vw] px-16 flex gap-2 ">
     <Button/>
     <Button/> 
     </div>


{/* ------------------------------------------------------ */}

<div className="point flex items-center   ">
       <h1 className="pointtext mx-20 -mb-8 mt-10 flex items-center text-[15px] font-[Neue Montreal] uppercase gap-2 "
        ><GoDotFill /> Trawa</h1>
         <h1 className="pointtext mx-[35%] -mb-8 mt-10 flex items-center text-[15px] font-[Neue Montreal] uppercase gap-2 "
        ><GoDotFill /> Premium Blend</h1>
       </div>
      
      
      <div className="cards w-full flex gap-5 mt-10 px-16">

        <motion.div
          className="cardcan w-1/2  h-[80vh] relative"
          onHoverStart={() => handlHover(4)}
          onHoverEnd={() => handlHoverEnd(4)}
          // onMouseEnter={()=> setHovering(true)}
          // onMouseLeave={()=> setHovering(false)}
        >
          <div className="card w-full h-full  bg-green-500 overflow-hidden rounded-xl ">
            {/* Animated-centertext */}
            <h1 className=" absolute left-full flex overflow-hidden  z-10 text-[#CDEA68] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-8xl uppercase ">
              {"Trawa".split("").map((items, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  // animate={hovering ? {y:"0"} : {y:"100%"}}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  animate={cards[4]}
                  className=" inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          className="cardcan w-1/2  h-[80vh] relative"
          onHoverStart={() => handlHover(5)}
          onHoverEnd={() => handlHoverEnd(5)}
        >
          <div className="card w-full h-full  bg-green-500 overflow-hidden rounded-xl ">
            {/* Animated-centertext */}
            <h1 className=" absolute right-full z-10 flex text-[#CDEA68] top-[33%] translate-x-1/2  translate-y-1/2 font-bold text-8xl uppercase overflow-hidden">
              {"Premium Blend".split("").map((items, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  // animate={hovering ? {y:"0"} : {y:"100%"}}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  animate={cards[5]}
                  className=" inline-block"
                >
                  {items}
                </motion.span>
              ))}
            </h1>

            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>

     <div className="w-full h-[8vw] px-16 flex gap-2 ">
     <Button/>
     <Button/> 
     </div>

      </div>

      <div className="centerbtn w-full h-[10vw]  flex justify-center items-center ">
        <button className= "text-[1.3vw] border-black border-[1px] bg-black text-white uppercase rounded-full px-6 py-2 flex items-center justify-center gap-4">
          view all case studies <GoDotFill /> </button>
      </div>
  
    </div>
  );
};

export default Featured;
