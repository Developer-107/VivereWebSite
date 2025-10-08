import { useState, useEffect } from "react";
import ShapeOval from "../assets/images/ShapeOval.png"

export default function AboutUs() {
      const [progressAboutUs, setProgressAboutUs] = useState(0);
    
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const trigger = 0.4 * window.innerHeight;   // start appearing
      const end = trigger + 2.5 * window.innerHeight;   // all shown
      let p = (scrollY - trigger) / (end - trigger);
      p = Math.min(Math.max(p, 0), 1);
      setProgressAboutUs(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




    return (
        <div id="OurStory" className="relative flex w-screen justify-center mainPageMainYellowishDiv !h-[100%]">
        <div className="flex flex-col items-center text-center xl:px-35 lg:px-30 md:px-25 px-14 ">
          <div className="flex py-50 items-center justify-center"><h1 className="xl:text-[5rem] lg:text-[4rem] md:text-[3rem] text-[2rem] text-center ">
            The Everlasting Advertising Agency{" "}
          </h1></div>
          <img 
            src={ShapeOval}
            alt="overlay" 
            className={`absolute xl:left-50 lg:left-30 md:left-17 sm:left-10 left-10 top-70 z-20 xl:w-259 xl:h-259 lg:w-220 lg:h-220 md:w-170 md:h-170 sm:w-140 sm:h-140 w-77 h-77 transition-transform`}
             style={{
    transform: `translate3d(0px, -${progressAboutUs * 100}%, 0px)`,
    transition: "transform 0.2s ease-out"
  }}
          />

          <div class="tale">
            <p class="mt-10 md:mt-20 xl:text-[22.5px] lg:text-[20px] md:text-[17px] text-[15.4px] mb-6 md:mb-12 leading-4">
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5 * 10, 0), 1)}}>
                All{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 9, 0), 1)}}>
                great{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 8, 0), 1)}}>
                things{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 7, 0), 1)}}>
                start{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 6, 0), 1)}}>
                with{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 5, 0), 1)}}>
                a{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 4, 0), 1)}}>
                story{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 3, 0), 1)}}>
                that{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 2, 0), 1)}}>
                lasts{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.25) * 3.5  * 1, 0), 1)}}>
                forever{" "}
              </span>
            </p>
            <p class="playFair xl:text-[4.3rem] lg:text-[3.5rem] md:text-[2.8rem] text-[1.7rem] mb-0 
                      xl:leading-17 lg:leading-14 md:leading-12 leading-9">
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                Vivere{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                was{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                founded{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                in{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                2030.{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                The{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.30) * 25, 0), 1)}}>
                name{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                stems{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                from{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                a{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                play{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                that’s{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                over{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                a{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.31) * 25, 0), 1)}}>
                hundred{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                years{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                old.{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                It{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                tells{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                the{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                tale{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                of{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                a{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                boy{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.35) * 25, 0), 1)}}>
                who{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                doesn’t{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                want{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                to{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                grow{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                up{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                –{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25, 0), 1)}}>
                and{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.37) * 25 , 0), 1)}}>
                never{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) *  25, 0), 1)}}>
                does.{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) *  25, 0), 1)}}>
                It’s{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) *  25, 0), 1)}}>
                a{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) *  25, 0), 1)}}>
                story{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) *  25, 0), 1)}}>
                in{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) * 25, 0), 1)}}>
                which{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) * 25, 0), 1)}}>
                dreams{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.42) * 25, 0), 1)}}>
                meet{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) * 25, 0), 1)}}>
                reality.{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) *  25, 0), 1)}}>
                And{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) * 25, 0), 1)}}>
                a{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) * 25, 0), 1)}}>
                reminder{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) * 25, 0), 1)}}>
                that{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) * 25, 0), 1)}}>
                your{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.43) * 25, 0), 1)}}>
                story{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1) }}>
                can{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                be{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                everlasting.{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                As{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                long{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                as{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                you{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.44) * 25, 0), 1)}}>
                want{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.45) * 25, 0), 1)}}>
                it{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.45) * 25, 0), 1) }}>
                to.{" "}
              </span>
            </p>     </div>{" "}
          <br />
          <div class="tale">       
            <p class="mt-10 md:mt-70 xl:text-[22.5px] lg:text-[20px] md:text-[17px] text-[15.4px] mb-6 md:mb-12 leading-4">
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.70) * 4.5 * 7, 0), 1)}}>
                A{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.70) * 4.5 * 6, 0), 1) }}>
                team{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.70) * 4.5 * 5, 0), 1)}}>
                that{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.70) * 4.5 * 4, 0), 1)}}>
                never{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.70) * 4.5 * 3, 0), 1) }}>
                gets{" "}
              </span>
              <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.70) * 4.5 * 1, 0), 1) }}>
                lost{" "}
              </span>
            </p>
            <p class="playFair xl:text-[4.3rem] lg:text-[3.5rem] md:text-[2.8rem] text-[1.7rem] mb-0 
                      xl:leading-17 lg:leading-14 md:leading-12 leading-9 pb-70">
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  We{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  are{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  a{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  fast-growing{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  crew{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  of{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.72) * 25, 0), 1) }}>
                  creatives,{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.74) * 25, 0), 1) }}>
                  designers,{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.74) * 25, 0), 1) }}>
                  strategists,{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.74) * 25, 0), 1) }}>
                  producers,{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.74) * 25, 0), 1) }}>
                  copywriters,{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.74) * 25, 0), 1) }}>
                  and{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.74) * 25, 0), 1) }}>
                  developers.{" "}
                </span>

                <br/>
                <br/>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  Together{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  we{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  seek{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  to{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  craft{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  the{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  stories{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.80) * 25, 0), 1) }}>
                  of{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.84) * 25, 0), 1) }}>
                  the{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.84) * 25, 0), 1) }}>
                  projects{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.84) * 25, 0), 1) }}>
                  we{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.84) * 25, 0), 1) }}>
                  work{" "}
                </span>
                <span class="opacity-0" style={{ opacity: Math.min(Math.max((progressAboutUs - 0.84) * 25, 0), 1) }}>
                  on.{" "}
                </span>
            </p>
          </div>{" "}
        </div>
      </div>
    );
}