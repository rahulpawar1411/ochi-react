import { motion} from "framer-motion";
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
// import { WiDayCloudy } from 'react-icons/wi';


const LandingPage = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-white pt-[25vh] text-black'>
        <div className="textstr mx-[4vw]">

            {["We Create","eye-opening","presentations"].map((items,idk)=>{
                return <div  key={idk} className="masker ">
                    <div className='flex i gap-2'>
                        {idk === 1 && (
                            <motion.div 
                            initial={{width: 0}} 
                            animate={{width: "9vw"}}
                            transition={{ease: [0.5, 0, 0.75, 0],duration:1}}
                            
                            className='w-[10vw] h-[5.5vw] rounded-md overflow-hidden relative top-3 bg-red-800 '>
                            <img className="w-full h-full bg-cover"  src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                        </motion.div>)} 

                    <h1 className='text-8xl text-[#212121] tracking-tighter uppercase leading-[6.5vw] font-bold  font font-["FoundersGrotest Semibold"]'>
                    {items}</h1>
                    </div>
                
            </div> })}      
        </div>

        <div className='w-full border-t-[1px] border-[#C5C5C5] mt-20 flex justify-between pt-4 px-14'>
            {["For public and private companies","From the first pitch to IPO"].map((items,idk)=>{
                return <p key={idk} className=''>
                    {items}
                </p>
            })}

            <div className="start flex gap-2">
                <div className=" border-[1px] border-zinc-500 px-5  uppercase py-1 rounded-full font-light">
                Start The Project</div>
                <div className=" w-8  border-[1px] border-zinc-500  rounded-full  flex items-center justify-center">
                <GoArrowUpRight />
                </div>
            </div>
        </div>

    </div>
  );
}

export default LandingPage