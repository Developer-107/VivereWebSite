import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";



export default function Scroller() {
        const [goIndex, setGoIndex] = useState("");
    
      
      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
           const totalScrollable = document.body.scrollHeight - window.innerHeight;
            const screenCount = scrollY / totalScrollable; // value between 0 and 1

            if (screenCount < 0.01) {
              setGoIndex("0");
            } else if (screenCount > 0.1244 && screenCount < 0.325) {
              setGoIndex("1");
            } else if (screenCount > 0.425 && screenCount < 0.45) {
              setGoIndex("2");
            } else if (screenCount > 0.503 && screenCount < 0.53) {
              setGoIndex("3");
            } else if (screenCount > 0.59 && screenCount < 0.62) {
              setGoIndex("4");
            } else if (screenCount > 0.674 && screenCount < 0.713) {
              setGoIndex("5");
            } else if (screenCount > 0.854 && screenCount < 0.8641) {
              setGoIndex("6");
            } else {
              setGoIndex("");
            }
          };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div className="scroll-to-menu fixed bottom-0 right-0 z-30 p-5 md:p-14">
      <div
        onClick={() => document.getElementById("OurStory")?.scrollIntoView({ behavior: "smooth" })}
        className={`${goIndex === "0" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"} flex md:items-center items-end md:pr-0 pr-5.5 scroll-button mb-8 md:mb-14 right-0 bottom-0 absolute transition duration-700 flex flex-col gap-raise`}
        index="0"
      >
        <div className="flex items-center h-[140px] pt-[112px] md:pt-0 text-white text rotate-270 mb-3 md:text-[14px] text-[10px] transition-transform duration-500">
          <span className={`transition-transform duration-500 inline-block font-bold w-[140px] `}>
            Scroll to Discover
          </span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px]`}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#ffffff"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
      onClick={() => document.getElementById("OurExpertiseId")?.scrollIntoView({ behavior: "smooth" })}
        className={`${goIndex === "1" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"} scroll-button flex md:items-center items-end md:pr-0 pr-5.5 mb-8 md:mb-14  right-0 bottom-0 absolute transition duration-700 flex flex-col  gap-raise`}
        index="1"
      >
        <div className={` flex items-center h-[140px] pt-[112px] md:pt-0 text-muted text text-[#c9c9c9] rotate-270 mb-3 md:text-[14px] text-[10px] transition-transform duration-500`}>
          <span className={`flex  transition-transform duration-500 inline-block font-bold w-[140px]`}>
            Our expertise
          </span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px] `}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#c9c9c9"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
      onClick={() => document.getElementById("ExperimentalDesignId")?.scrollIntoView({ behavior: "smooth" })}
        className={`${goIndex === "2" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"} scroll-button flex md:items-center items-end md:pr-0 pr-5.5 mb-8 md:mb-14  right-0 bottom-0 absolute transition duration-700 flex flex-col  gap-raise justify-center items-center`}
        index="2"
      >
        <div className="flex items-center h-[140px] pt-[112px] md:pt-0  rotate-270 mb-3 transition-transform duration-500">
          <span className={`flex transition-transform duration-500 inline-block font-bold w-[140px] text-[#c9c9c9] md:text-[14px] text-[10px]`}>
            Experiential Design
          </span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px]`}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#c9c9c9"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
      onClick={() => document.getElementById("ContentCreationId")?.scrollIntoView({ behavior: "smooth" })}
        className={`${goIndex === "3" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"} scroll-button flex md:items-center items-end md:pr-0 pr-5.5 mb-8 md:mb-14  right-0 bottom-0 absolute transition duration-700 flex flex-col  gap-raise`}
        index="3"
      >
        <div className="flex items-center h-[140px] pt-[112px] md:pt-0  text-muted text rotate-270 mb-3 md:text-[14px] text-[10px] transition-transform duration-500">
          <span className={`h-[22px] transition-transform duration-500 inline-block font-bold w-[140px] text-[#c9c9c9]`}>
            Content Creation
          </span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px]`}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#c9c9c9"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
      onClick={() => document.getElementById("ClientsId")?.scrollIntoView({ behavior: "smooth" })}
        className={`${goIndex === "4" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"} scroll-button flex md:items-center items-end md:pr-0 pr-5.5 mb-8 md:mb-14  right-0 bottom-0 absolute transition duration-700 flex flex-col  gap-raise`}
        index="4"
      >
        <div className="flex items-center h-[140px] pt-[112px] md:pt-0  text-muted text rotate-270 mb-3 md:text-[14px] text-[10px] transition-transform duration-500">
          <span className={` transition-transform duration-500 inline-block font-bold w-[140px] text-[#c9c9c9]`}>
            The Clients
          </span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px]`}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#c9c9c9"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
      onClick={() => document.getElementById("ContactId")?.scrollIntoView({ behavior: "smooth" })}
        className={`${goIndex === "5" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"}scroll-button flex md:items-center items-end md:pr-0 pr-5.5 cursor-pointer mb-8 md:mb-14  right-0 bottom-0 absolute transition duration-700 flex flex-col  gap-raise`}
        index="5"
      >
        <div className="flex items-center h-[140px] pt-[112px] md:pt-0  text-white text rotate-270 mb-3 md:text-[14px] text-[10px] transition-transform duration-500">
          <span className={`w-[140px] transition-transform duration-500 inline-block font-bold w-[140px] text-[#c9c9c9]`}>
            Contact
          </span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px]`}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#c9c9c9"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div
      onClick={() => document.getElementById("ContactInfoId")?.scrollIntoView({ behavior: "smooth" })}
        className={` ${goIndex === "6" ? "translate-y-0 opacity-100" : "translate-y-700 opacity-0"} scroll-button flex md:items-center items-end md:pr-0 pr-5.5 mb-8 md:mb-14  right-0 bottom-0 absolute transition duration-700 flex flex-col  gap-raise`}
        index="6"
      >
        <div className="flex items-center h-[140px] pt-[112px] md:pt-0  text-white text rotate-270 mb-3 md:text-[14px] text-[10px] transition-transform duration-500">
          <span className={`w-[140px] transition-transform duration-500 inline-block font-bold`}></span>
        </div>
        <svg
          width="12"
          height="54"
          viewBox="0 0 12 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`mx-1.5 transition-transform duration-500 md:w-[140px] w-[14px]`}
        >
          <path
            d="M6 1L6 53 M1 48L6 53L11 48"
            stroke="#e3869c"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
}
