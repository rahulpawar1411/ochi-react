import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotated] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // mouse ki location

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      //   mouse ki location ka aadha (50% means 1000 ka 500)

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotated(angle - 180);
    });
  });

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className='w-full h-screen relative bg-center bg-cover  bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]' >

        <div className="w-[32vw]  absolute flex justify-between items-center  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-white">
            <div className="w-2/3 h-2/3 rounded-full  relative  bg-black">
              {/* the main rotated eyes  */}
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line  w-[100%] h-8 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-8 h-8  rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-white">
            <div className="w-2/3 h-2/3 rounded-full relative bg-black">
              {/* the main rotated eyes  */}
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-[100%] h-8 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-8 h-8  rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
