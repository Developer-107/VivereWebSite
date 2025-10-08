import { Link } from "react-router-dom";
import "../assets/css/navbar.css"



export default function CreateAtVivere() {
  return (
    <div id="ContactId" class="flex flex-col grid grid-cols-12 items-center px-[56px] mainPageMainYellowishDiv !h-[100vh]">
      <div class="flex flex-col col-span-12 xl:col-span-7 gap-4 pt-10 md:pt-0">
        <p class="md:text-[16px] text-[14px]">Create at Vivere</p>
        <p class="playFair xl:text-[4.3rem] lg:text-[3.5rem] md:text-[2.8rem] text-[1.7rem]  mb-0 xl:leading-14 lg:leading-12 md:leading-10 leading-8">
          We firmly believe in integrated experiences based on everlasting
          stories and designs that never grow old.
        </p>
        <div className="block xl:hidden pt-5">
        <Link
          href="mailto:peterpan@neverland.agency"
          class="xl:float-right askAnything askAnythingUnderline xl:mt-70 mt-0 xl:!text-[19px] lg:!text-[17px] md:!text-[15.1px] !text-[14px]"
        >
          Let’s fly today
        </Link>
        </div>
      </div>
      <div class="col-span-12 xl:col-span-5 xl:pb-0 hidden xl:block">
        <Link
          href="mailto:peterpan@neverland.agency"
          class="xl:float-right askAnything askAnythingUnderline xl:mt-70 mt-0  xl:!text-[19px] lg:!text-[17px] md:!text-[15.1px] !text-[14px]"
        >
          Let’s fly today
        </Link>
      </div>
      <div className="col-span-12 xl:hidden block flex flex-col gap-4 md:pb-0 pb-10">
         <p className="md:text-[16px] text-[14px] block xl:hidden">Ask Vivere</p>
          <p className=" playFair xl:text-[4.3rem] lg:text-[3.5rem] md:text-[2.8rem] text-[1.7rem] xl:leading-14 lg:leading-12 md:leading-10 leading-8 pd:mb-0 xl:py-[7vh] ">
            Let’s create stories and designs that never grow old.
          </p>
          <div className="pt-5">
          <a
            href="mailto:peterpan@neverland.agency"
            className="askAnything askAnythingUnderline xl:mt-70 mt-0  xl:!text-[19px] lg:!text-[17px] md:!text-[15.1px] !text-[14px]"
          >
            Ask anything
          </a>
          </div>
          </div>
          
         
      
    </div>
  );
}
