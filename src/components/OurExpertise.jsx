import { useState,useEffect } from "react";


export default function OurExpertise() {

  const [progressOurExpertise, setProgressOurExpertise] = useState(0);
    
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const trigger = 7.1 * window.innerHeight;   // start appearing
      const end = trigger + 20 * window.innerHeight;   // all shown
      let p = (scrollY - trigger) / (end - trigger);
      p = Math.min(Math.max(p, 0), 1);
      setProgressOurExpertise(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div class=" px-5 services pt-[10vh] lg:pt-[17vh]">
      <div id="OurExpertiseId" class=" py-14">
        <div class="container grid grid-cols-12 tight-mobile items-end lg:items-start flex">
          <div class="col-span-12">
            <div class="flex items-center mb-6">
              <div class="xl:text-[20px] lg:text-[17.8px] md:text-[15.1px] text-[14px] leading-tight"> 01</div>
              <div class="w-4 md:w-6 h-px mx-1 md:mx-1.5 bg-dark"></div>
              <h2 class="xl:text-[20px] lg:text-[17.8px] md:text-[15.1px] text-[14px] mb-0 font-sans">Brand Communication</h2>
            </div>
            <ul class="pl-9 md:pl-14 xl:leading-14 lg:leading-12 md:leading-10 leading-8 ">
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Identity and Positioning</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Brand and Innovation Strategy</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Brand Messaging</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Guidelines and Systems</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Visual Language and Art Direction</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="ExperimentalDesignId" class="py-40">
        <div class="container grid grid-cols-12 tight-mobile items-end lg:items-start flex">
          <div class="col-span-12 lg:col-span-8 xl:col-span-7">
            <div class="flex items-center mb-6">
              <div class="xl:text-[20px] lg:text-[17.8px] md:text-[15.1px] text-[14px] leading-tight">
                {" "}
                02
              </div>
              <div class="w-4 md:w-6 h-px mx-1 md:mx-1.5 bg-dark"></div>
              <h2 class="xl:text-[20px] lg:text-[17.8px] md:text-[15.1px] text-[14px] mb-0 font-sans">
                Experiential Design
              </h2>
            </div>
            <ul class="pl-9 md:pl-14 xl:leading-14 lg:leading-12 md:leading-10 leading-8 ">
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Spatial Design</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">eCommerce and Websites</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Digital Product and Services</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Prototyping and Optimization</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="ContentCreationId" class="py-20">
        <div class="container grid grid-cols-12 tight-mobile items-end lg:items-start flex ">
          <div class="col-span-12 lg:col-span-8 xl:col-span-7">
            <div class="flex items-center mb-6">
              <div class="xl:text-[20px] lg:text-[17.8px] md:text-[15.1px] text-[14px] leading-tight">
                {" "}
                03
              </div>
              <div class="w-4 md:w-6 h-px mx-1 md:mx-1.5 bg-dark"></div>
              <h2 class="xl:text-[20px] lg:text-[17.8px] md:text-[15.1px] text-[14px] mb-0 font-sans">
                Content Creation
              </h2>
            </div>
            <ul class="pl-9 md:pl-14 xl:leading-14 lg:leading-12 md:leading-10 leading-8 ">
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Content Strategy</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Photography</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Video Production</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">3D and Motion Graphics</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">Copywriting</h3>
              </li>
              <li class="">
                <h3 class="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[25px]">NFT Design and Development</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="ClientsId" class="px-20 pt-25">
        <div className="grid grid-cols-5 items-center justify-center ">
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Coty</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Suit Supply</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">O'neill</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Nike</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Asics</h2>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center ">
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">North Sails</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Rituals</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">G-Star Raw</h2>
          </div>
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Heesen</h2>
          </div>
        </div>
        <div className="grid grid-cols-5 items-center justify-center ">
          <div class="flex my-7  p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Nestle</h2>
          </div>
          <div class="flex my-7 p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Wise</h2>
          </div>
          <div class="flex my-7 p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Siemens</h2>
          </div>
          <div class="flex my-7 p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">WAMP</h2>
          </div>
          <div class="flex my-7 p-5 justify-center">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              height="40px"
              width="40px"
              alt="Nike"
            />{" "}
            <h2 class="sr-only">Unknown</h2>
          </div>
        </div>
        <div class="container grid grid-cols-12 pt-80">
          <div class="col-span-12 md:col-span-10 xl:col-span-6 md:col-start-2 xl:col-start-4 text-center">
            <h1 class="mb-16 xl:text-[59px] lg:text-[50px] md:text-[40px] text-[30px]">
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 260, 0)}}>T</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 250, 0)}}>a</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 240, 0)}}>k</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 230, 0)}}>e</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 220, 0)}}> </span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 210, 0)}}>m</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 200, 0)}}>e</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 190, 0)}}> </span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 180, 0)}}>t</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 170, 0)}}>o</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 160, 0)}}> </span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 150, 0)}}>V</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 140, 0)}}>i</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 130, 0)}}>v</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 120, 0)}}>e</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 110, 0)}}>r</span>
              <span style={{ opacity: Math.max(1 - progressOurExpertise * 100, 0)}}>e</span>
              
              
              
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
