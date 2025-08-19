import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.12"
      className="w-full pb-14 -mt-3 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl font-[Neue Montreal]"
    >
      <h1 className="text-[3.8vw] p-16 leading-[3.8vw] ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="w-full h-[60vh] border-t-[1px] font-[Neue Montreal] border-[#99AD53] pt-5 px-16 flex">
        <div className="left w-[50%]">
          <h1 className="text-[1.2vw] mb-[2vw]">What you can expect:</h1>
        </div>
        <div className="right w-[50%]  flex">
          <div className="w-1/2 h-full  px-2">
            <p className="mb-5 font-[Neue Montreal]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-[30%] h-1/2   flex flex-col  leading-5 mb-5">
              <h1 className="mb-5"> S:</h1>
              <a href="#">Instragram</a>
              <a href="#">facebook</a>
              <a href="#">Lindin</a>
              <a href="#">Whatsapp</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[1px] border-[#99AD53] pt-5 px-16 flex">
        <div className="left w-[50%]">
          <h1 className="text-5xl mb-[2vw]">Our Approach:</h1>
          <button className="bg-[#212121] hover:bg-zinc-800 hover:text-white ease-in duration-150 text-white p-4 px-8 rounded-full uppercase">
            Read More
          </button>
        </div>
        <div className="right w-[50%]  rounded-xl overflow-hidden mb-10">
          <img
            className="w-[100%] h-[100%] "
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
