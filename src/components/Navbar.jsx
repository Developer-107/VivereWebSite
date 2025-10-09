import { useState, useEffect } from "react";
import "../assets/css/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
           const totalScrollable = document.body.scrollHeight - window.innerHeight;
            const screenCount = scrollY / totalScrollable; // value between 0 and 1


       if (screenCount > 0.1070 && screenCount < 0.35) {
      setActiveIndex("story");
    } else if (screenCount > 0.494 && screenCount < 0.5) {
      setActiveIndex("expertise1");
    } else if (screenCount > 0.5555 && screenCount < 0.579) {
      setActiveIndex("expertise2");
    } else if (screenCount > 0.6268 && screenCount < 0.65) {
      setActiveIndex("expertise3");
    } else if (screenCount > 0.7154 && screenCount < 0.75) {
      setActiveIndex("brandsWorkedFor");
    } else if (screenCount > 0.87655 && screenCount < 0.98) {
      setActiveIndex("letsConnect");
    } else {
      setActiveIndex("");
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight; // 100vh in pixels

      if (scrollPosition > triggerPoint) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header fixed flex items-center w-full py-6 md:py-10 z-50 px-5 md:px-14 pointer-events-none">
        <div className="scroll-label w-1/3 relative">
          <div className="absolute w-full top-1/2 -translate-y-1/2 h-5 hidden md:block">
            <div className="tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px] active delay-150">
              <div className="label"></div>
            </div>
            <div
              className={`${
                !isOpen && activeIndex === "story"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px]`}
            >
              <div className="label">An everlasting story</div>
            </div>
            <div
              className={`${
                !isOpen && activeIndex === "expertise1"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px]`}
            >
              <div className="label">Our expertise</div>
              <div className="border-b rounded-full h-0.5 w-10 xl:w-28 mx-2.5"></div>
              <div className="child"> 01</div>
            </div>
            <div
              className={`${
                !isOpen && activeIndex === "expertise2"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px]`}
            >
              <div className="label">Our expertise</div>
              <div className="border-b rounded-full h-0.5 w-10 xl:w-28 mx-2.5"></div>
              <div className="child"> 02</div>
            </div>
            <div
              className={`${
                !isOpen && activeIndex === "expertise3"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px]`}
            >
              <div className="label">Our expertise</div>
              <div className="border-b rounded-full h-0.5 w-10 xl:w-28 mx-2.5"></div>
              <div className="child"> 03</div>
            </div>
            <div
              className={`${
                !isOpen && activeIndex === "brandsWorkedFor"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px]`}
            >
              <div className="label">Brands we worked for</div>
            </div>

            <div
              className={`${
                !isOpen && activeIndex === "letsConnect"
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } tag transition duration-700 absolute flex items-center leading-none text-base xl:text-[20px]`}
            >
              <div className="label">Let’s connect</div>
            </div>
          </div>
        </div>
        <div className=" svg-box md:w-[55px] md:h-[50px] w-[40px] h-[35px]  mx-auto table transtion-opacity duration-700">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
             
              viewBox="0 0 16 16"
            >
              <g
                fill="none"
                stroke={isOpen ? "black" : `${scrolled ? "black" : "white"}`}
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m1.5 1.5l4 .5L10 14.5H6z" />
                <path d="M8 8.95L10.5 2l4-.5l-4.5 13" />
              </g>
            </svg>
            
          </div>
        </div>
        <div className="toggle-wrap w-1/3">
          <div
            className="toggle fairy-cursor-overlay pointer-events-auto py-4 pl-4 float-right cursor-pointer"
            onClick={handleIsOpen}
          >
            <div
              className={`top transition duration-700 w-7 md:w-9 h-0.5 rounded-full  ${
                isOpen
                  ? "-rotate-45 translate-y-[4.7px] bg-black"
                  : `${scrolled ? "bg-black" : "bg-white"}`
              }`}
            ></div>
            <div
              className={`bottom transition duration-700 w-7 md:w-9 h-0.5 rounded-full  ${
                isOpen
                  ? "rotate-45 -translate-y-[4.7px] bg-black"
                  : `${scrolled ? "bg-black" : "bg-white"}`
              } mt-2`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`fixed flex flex-col px-14 inset-0 w-screen z-40 justify-center items-center mainPageYellowishDiv  ${
          isOpen ? "open" : ""
        } `}
      >
        <div className="grid grid-cols-12 mb-[80px]">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[17px] mb-0">Menu</p>
            <ul className="playFair mt-4 xl:mt-[4vh] xl:text-[5rem] md:text-[3rem] text-[2rem]">
              <li onClick={() => {document.getElementById("OurStory")?.scrollIntoView({ behavior: "smooth" }), handleIsOpen()}} className="cursor-pointer">The Story</li>
              <li onClick={() => {document.getElementById("OurExpertiseId")?.scrollIntoView({ behavior: "smooth" }), handleIsOpen()}} className="cursor-pointer">Our Expertise</li>
              <li onClick={() => {document.getElementById("ContactInfoId")?.scrollIntoView({ behavior: "smooth" }), handleIsOpen()}} className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5 xl:mt-0">
            <p className="text-[17px] mb-0 block mt-10 md:mt-0">Ask Vivere</p>
            <p className="playFair xl:text-[37px] md:text-[28px] text-[20px] pb-4 md:py-[7vh] py-[3vh] mb-0">
              Let’s create stories and designs that never grow old.
            </p>
            <a
              href="mailto:peterpan@neverland.agency"
              className="askAnything askAnythingUnderline md:!text-[19px] !text-[17px]"
            >
              Ask anything
            </a>
          </div>
        </div>
      </div>
      <div
        class={`fixed bottom-0 w-[100%] px-14 col-span-12 flex items-end xl:mb-14 mb-10  z-40 navbarFooter ${
          isOpen ? "open" : ""
        } `}
      >
        <div class="grid grid-cols-12 w-full items-center">
          <div class="col-span-6 hidden xl:block">
            <p class="mb-0 text-sm text-center md:text-left">
              Vivere – Where Brands Breathe{" "}
              <a
                href="/terms-conditions"
                class="text-sm md:pl-3 fairy-cursor-color-burn hidden"
              >
                Narratives that matter
              </a>
            </p>
          </div>
          <div class="col-span-12 md:col-span-6">
            <div class="flex items-center justify-between xl:justify-center xl:float-right">
              <a
                class="fairy-cursor-color-dodge"
                href="https://www.linkedin.com/company/neverlandagency"
                target="_blank"
              >
                <div class="w-5 sm:w-6 svg-box">
                  <div class="svg-container">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.1667 0H0.833333C0.333333 0 0 0.333333 0 0.833333V19.1667C0 19.6667 0.333333 20 0.833333 20H19.1667C19.6667 20 20 19.6667 20 19.1667V0.833333C20 0.333333 19.6667 0 19.1667 0ZM5.91667 17.0833H3V7.5H6V17.0833H5.91667ZM4.41667 6.16667C3.5 6.16667 2.66667 5.41667 2.66667 4.41667C2.66667 3.5 3.41667 2.66667 4.41667 2.66667C5.33333 2.66667 6.16667 3.41667 6.16667 4.41667C6.16667 5.41667 5.41667 6.16667 4.41667 6.16667ZM17.0833 17.0833H14.0833V12.4167C14.0833 11.3333 14.0833 9.91667 12.5833 9.91667C11 9.91667 10.8333 11.0833 10.8333 12.3333V17.0833H7.83333V7.5H10.6667V8.83333C11.0833 8.08333 12 7.33333 13.5 7.33333C16.5 7.33333 17.0833 9.33333 17.0833 11.9167V17.0833Z"
                        fill="#e3869c"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                class="md:ml-5 fairy-cursor-color-dodge"
                href="https://dribbble.com/neverlandamsterdam"
                target="_blank"
              >
                <div class="w-5 sm:w-6 svg-box">
                  <div class="svg-container">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20ZM18.4167 11.3333C18.0833 11.25 15.75 10.5 13.0833 11C14.1667 14.0833 14.6667 16.5833 14.75 17.0833C16.6667 15.8333 18.0833 13.75 18.4167 11.3333ZM13.3333 17.9167C13.1667 17.1667 12.75 14.5833 11.5 11.4167C11.5 11.4167 11.5 11.4167 11.4167 11.4167C6.58333 13.0833 4.83333 16.4167 4.75 16.75C6.16667 17.9167 8 18.5833 10 18.5833C11.1667 18.5833 12.3333 18.3333 13.3333 17.9167ZM3.66667 15.75C3.83333 15.4167 6.16667 11.5 10.5833 10.0833C10.6667 10.0833 10.8333 10 10.9167 10C10.6667 9.5 10.5 9 10.25 8.58333C6 9.83333 1.83333 9.83333 1.5 9.83333C1.5 9.91667 1.5 10 1.5 10.0833C1.5 12.1667 2.25 14.25 3.66667 15.75ZM1.66667 8.25C2.08333 8.25 5.58333 8.25 9.58333 7.25C8.16667 4.75 6.66667 2.58333 6.41667 2.33333C4 3.41667 2.16667 5.58333 1.66667 8.25ZM8 1.75C8.25 2.08333 9.75 4.16667 11.1667 6.75C14.1667 5.58333 15.5 3.91667 15.6667 3.66667C14.1667 2.25 12.1667 1.5 10 1.5C9.33333 1.5 8.66667 1.58333 8 1.75ZM16.5833 4.58333C16.4167 4.83333 15 6.66667 11.8333 7.91667C12 8.33333 12.25 8.75 12.4167 9.16667C12.5 9.33333 12.5 9.5 12.5833 9.58333C15.4167 9.25 18.25 9.83333 18.5 9.83333C18.5 7.91667 17.8333 6.08333 16.5833 4.58333Z"
                        fill="#e3869c"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                class="md:ml-5 fairy-cursor-color-dodge"
                href="https://www.instagram.com/neverlandtheagency/"
                target="_blank"
              >
                <div class="w-5 sm:w-6 svg-box">
                  <div class="svg-container">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1.80182C12.67 1.80182 12.9864 1.81182 14.0409 1.86C14.6749 1.86739 15.3029 1.98394 15.8973 2.20455C16.3318 2.36464 16.7248 2.62033 17.0473 2.95273C17.3797 3.27517 17.6354 3.66819 17.7955 4.10273C18.0161 4.69714 18.1326 5.32511 18.14 5.95909C18.1882 7.01364 18.1982 7.33 18.1982 10C18.1982 12.67 18.1882 12.9864 18.14 14.0409C18.1326 14.6749 18.0161 15.3029 17.7955 15.8973C17.629 16.3286 17.3742 16.7203 17.0472 17.0472C16.7203 17.3742 16.3286 17.629 15.8973 17.7955C15.3029 18.0161 14.6749 18.1326 14.0409 18.14C12.9864 18.1882 12.67 18.1982 10 18.1982C7.33 18.1982 7.01364 18.1882 5.95909 18.14C5.32511 18.1326 4.69714 18.0161 4.10273 17.7955C3.66819 17.6354 3.27517 17.3797 2.95273 17.0473C2.62033 16.7248 2.36464 16.3318 2.20455 15.8973C1.98394 15.3029 1.86739 14.6749 1.86 14.0409C1.81182 12.9864 1.80182 12.67 1.80182 10C1.80182 7.33 1.81182 7.01364 1.86 5.95909C1.86739 5.32511 1.98394 4.69714 2.20455 4.10273C2.36464 3.66819 2.62033 3.27517 2.95273 2.95273C3.27517 2.62033 3.66819 2.36464 4.10273 2.20455C4.69714 1.98394 5.32511 1.86739 5.95909 1.86C7.01364 1.81182 7.33 1.80182 10 1.80182ZM10 0C7.28455 0 6.94364 0.0118182 5.87727 0.06C5.0478 0.0771419 4.22718 0.234197 3.45 0.524545C2.78504 0.781974 2.18127 1.17562 1.67746 1.68022C1.17365 2.18481 0.780942 2.78919 0.524545 3.45455C0.234197 4.23173 0.0771419 5.05235 0.06 5.88182C0.0118182 6.94364 0 7.28455 0 10C0 12.7155 0.0118182 13.0564 0.06 14.1227C0.0771419 14.9522 0.234197 15.7728 0.524545 16.55C0.781974 17.215 1.17562 17.8187 1.68022 18.3225C2.18481 18.8263 2.78919 19.2191 3.45455 19.4755C4.23173 19.7658 5.05235 19.9229 5.88182 19.94C6.94364 19.9882 7.28455 20 10 20C12.7155 20 13.0564 19.9882 14.1227 19.94C14.9522 19.9229 15.7728 19.7658 16.55 19.4755C17.215 19.218 17.8187 18.8244 18.3225 18.3198C18.8263 17.8152 19.2191 17.2108 19.4755 16.5455C19.7658 15.7683 19.9229 14.9477 19.94 14.1182C19.9882 13.0564 20 12.7155 20 10C20 7.28455 19.9882 6.94364 19.94 5.87727C19.9229 5.0478 19.7658 4.22718 19.4755 3.45C19.218 2.78504 18.8244 2.18127 18.3198 1.67746C17.8152 1.17365 17.2108 0.780942 16.5455 0.524545C15.7683 0.234197 14.9477 0.0771419 14.1182 0.06C13.0564 0.0118182 12.7155 0 10 0Z M15.3406 5.86179C16.0034 5.86179 16.5406 5.32453 16.5406 4.66179C16.5406 3.99905 16.0034 3.46179 15.3406 3.46179C14.6779 3.46179 14.1406 3.99905 14.1406 4.66179C14.1406 5.32453 14.6779 5.86179 15.3406 5.86179Z M10.0026 4.8645C8.98695 4.8645 7.99406 5.16569 7.14954 5.72998C6.30502 6.29427 5.64679 7.09632 5.2581 8.0347C4.86941 8.97308 4.76771 10.0057 4.96587 11.0018C5.16402 11.998 5.65312 12.9131 6.37133 13.6313C7.08954 14.3495 8.00459 14.8386 9.00077 15.0367C9.99695 15.2349 11.0295 15.1332 11.9679 14.7445C12.9063 14.3558 13.7083 13.6976 14.2726 12.8531C14.8369 12.0085 15.1381 11.0157 15.1381 9.99996C15.1381 8.63795 14.597 7.33173 13.634 6.36864C12.6709 5.40556 11.3647 4.8645 10.0026 4.8645ZM10.0026 13.3336C9.34331 13.3336 8.69879 13.1381 8.15057 12.7718C7.60236 12.4055 7.17508 11.8848 6.92277 11.2757C6.67045 10.6665 6.60443 9.99626 6.73306 9.3496C6.86169 8.70293 7.17919 8.10894 7.64541 7.64272C8.11162 7.1765 8.70562 6.859 9.35228 6.73038C9.99895 6.60175 10.6692 6.66776 11.2784 6.92008C11.8875 7.17239 12.4082 7.59967 12.7745 8.14789C13.1408 8.6961 13.3363 9.34063 13.3363 9.99996C13.3363 10.8841 12.9851 11.732 12.3599 12.3572C11.7347 12.9824 10.8868 13.3336 10.0026 13.3336Z"
                        fill="#e3869c"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                class="md:ml-5 md:pr-5  md:border-r border-bubble-gum fairy-cursor-color-dodge"
                href="https://www.behance.net/neverlandagency"
                target="_blank"
              >
                <div class="md:w-7 sm:w-8 svg-box">
                  <div class="svg-container">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.92145 11.259C9.92145 11.259 12.0133 11.1036 12.0133 8.65043C12.0133 6.19719 10.3018 5 8.13383 5H4.14332H4.02609H1V18.7096H4.02609H4.14332H8.13382C8.13382 18.7096 12.4888 18.8469 12.4888 14.6631C12.4888 14.6631 12.6789 11.259 9.92145 11.259ZM4.14332 7.43658H7.62034H8.13383C8.13383 7.43658 9.10368 7.43658 9.10368 8.86288C9.10368 10.2892 8.53316 10.496 7.8866 10.496H4.14332V7.43658ZM7.9499 16.2731H4.14332V12.6093H8.13382C8.13382 12.6093 9.57912 12.5903 9.57912 14.4919C9.57912 16.0775 8.52198 16.2571 7.9499 16.2731Z M18.3032 8.48804C13.0312 8.48804 13.0359 13.7554 13.0359 13.7554C13.0359 13.7554 12.6741 18.9961 18.3034 18.9961C18.3034 18.9961 22.9945 19.2641 22.9945 15.3504H20.5819C20.5819 15.3504 20.6623 16.8246 18.3838 16.8246C18.3838 16.8246 15.9711 16.9859 15.9711 14.4391H23.0749C23.0749 14.4391 23.8521 8.48804 18.3032 8.48804ZM20.4477 12.6093H15.9442C15.9442 12.6093 16.2391 10.496 18.3569 10.496C20.4746 10.496 20.4477 12.6093 20.4477 12.6093Z M21.2687 5.55249H15.7422V7.39465H21.2687V5.55249Z"
                        fill="#e3869c"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
              <a
                class="md:ml-5 fairy-cursor-color-dodge"
                href="https://humnn.design/"
                target="_blank"
              >
                <div class="w-11 sm:w-12 svg-box">
                  <div class="svg-container">
                    <svg
                      width="44"
                      height="14"
                      viewBox="0 0 44 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5599 14.0001H8.62588V8.29617H2.93397V14.0001H0V0.00354004H2.93397V5.7075H8.62588V0.00354004H11.5599V14.0001Z M36.7325 1.77821C37.3862 1.77821 38.0335 1.91328 38.6375 2.1757C39.2414 2.43812 39.7902 2.82275 40.2524 3.30764C40.7147 3.79253 41.0813 4.36817 41.3315 5.00171C41.5817 5.63525 41.7104 6.31427 41.7104 7C41.7104 7.68574 41.5817 8.36476 41.3315 8.99829C41.0813 9.63183 40.7147 10.2075 40.2524 10.6924C39.7902 11.1773 39.2414 11.5619 38.6375 11.8243C38.0335 12.0867 37.3862 12.2218 36.7325 12.2218H20.2044C18.8842 12.2218 17.618 11.6716 16.6845 10.6924C15.7509 9.71309 15.2264 8.38491 15.2264 7C15.2264 5.6151 15.7509 4.28691 16.6845 3.30764C17.618 2.32836 18.8842 1.77821 20.2044 1.77821H36.7325V1.77821ZM36.7325 0H20.2044C18.4346 0 16.7372 0.737497 15.4858 2.05025C14.2343 3.36301 13.5313 5.14349 13.5313 7V7C13.5308 7.91938 13.7031 8.82984 14.0383 9.67932C14.3735 10.5288 14.8651 11.3007 15.4848 11.9508C16.1046 12.6009 16.8404 13.1165 17.6502 13.4681C18.46 13.8197 19.328 14.0005 20.2044 14H36.7325C37.6088 14 38.4765 13.8189 39.2862 13.4672C40.0958 13.1154 40.8314 12.5998 41.4511 11.9497C42.0708 11.2997 42.5623 10.5281 42.8977 9.67879C43.233 8.82951 43.4056 7.91926 43.4056 7V7C43.4048 5.14376 42.7014 3.36381 41.4501 2.05125C40.1989 0.738695 38.502 0.000906145 36.7325 0V0Z"
                        fill="#e3869c"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`menuSpacer ${isOpen ? "open" : ""}`}></div>
    </>
  );
}
