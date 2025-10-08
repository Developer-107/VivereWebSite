import { useState, useEffect } from "react"; 

export default function Welcome(){
  const [progress, setProgress] = useState(0);
  
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const trigger = 100;   // start fading
      const end = 500;       // all gone
      let p = (scrollY - trigger) / (end - trigger);
      p = Math.min(Math.max(p, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  return(
   
      <div className="relative flex w-screen h-screen justify-center lg:items-center overflow-hidden mainPageFirstDiv">
          {/* 🎥 Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/Ironing.mp4" // ⬅️ place your video inside public/videos/
        autoPlay
        muted
        
        playsInline
      />
       
          <div className="relative flex flex-col w-[70%] text-white justify-center lg:items-end items-center text-white tale-fade mb-0 lg:mt-0 mt-[140px]">
          <div className="flex-1 sm:w-[28%] w-[35%] leading-17">
            <h1 className="flex flex-row w-full items-center justify-center xl:text-[70px] md:text-[59px] sm:text-[50px] text-[40px] font-[500] gap-0 h-[59px]">
              <span style={{ opacity: Math.max(1 - progress * 110) }}> W</span>
              <span style={{ opacity: Math.max(1 - progress * 105, 0)}}> e</span>
              <span style={{ opacity: Math.max(1 - progress * 100, 0)}}> l</span>
              <span style={{ opacity: Math.max(1 - progress * 95, 0)}}> c</span>
              <span style={{ opacity: Math.max(1 - progress * 90, 0)}}> o</span>
              <span style={{ opacity: Math.max(1 - progress * 85, 0)}}> m</span>
              <span style={{ opacity: Math.max(1 - progress * 80, 0)}}> e</span>
              <span className="mx-2"> </span>
              <span style={{ opacity: Math.max(1 - progress * 75, 0)}}> t</span>
              <span style={{ opacity: Math.max(1 - progress * 70, 0)}}> o</span>
            </h1>
            <h1 className="flex flex-row w-full items-center justify-center xl:text-[70px] md:text-[59px] sm:text-[50px] text-[40px] font-[500] gap-0">
              <span style={{ opacity: Math.max(1 - progress * 35, 0)}}> V</span>
              <span style={{ opacity: Math.max(1 - progress * 30, 0)}}> i</span>
              <span style={{ opacity: Math.max(1 - progress * 25, 0)}}> v</span>
              <span style={{ opacity: Math.max(1 - progress * 20, 0)}}> e</span>
              <span style={{ opacity: Math.max(1 - progress * 15, 0)}}> r</span>
              <span style={{ opacity: Math.max(1 - progress * 10, 0)}}> e</span>
            </h1>
            <p className="flex flex-col items-center justify-center xl:text-[17px] md:text-[14px] sm:text-[10px] text-[8px]">
              <span style={{ opacity: Math.max(1 - progress * 4, 0)}} className="leading-10">Where Brands Breathe,</span>{" "}
              <span style={{ opacity: Math.max(1 - progress * 3, 0)}} className="leading-0"> and Ideas Live Forever</span>
            </p>
          </div>
        </div>
      </div>)}