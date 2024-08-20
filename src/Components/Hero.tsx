import gsap from "gsap";
import { useEffect } from "react";
import { IoIosMail } from "react-icons/io";
import SplitType from "split-type";

const Hero = () => {
  useEffect(() => {
    // #345b48 dark Green
    const split1 = new SplitType("#target-1", {
      types: "chars",
      charClass: "char1",
    });

    const split2 = new SplitType("#target-2", {
      types: "chars",
      charClass: "char2",
    });

    const split3 = new SplitType("#target-3", {
      // for and design interface
      types: "chars",
      charClass: "char3",
    });

    gsap.to(".char1", {
      y: 0,
      duration: 0.1,
      delay: 0.3,
      stagger: 0.01,
    });

    gsap.to(".char2", {
      y: 0,
      duration: 0.3,
      delay: 0.5,
      stagger: 0.001,
    });
    gsap.to("#target-4", {
      opacity: 1,
      y: "+=40",
      duration: 0.3,
      stagger: 0.1,
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <div className="bg-[#000] pt-40 sm:pt-28 px-5">
        <div className="text-right">
          <h1
            className="oswald-font text-2xl py-5 uppercase md:text-3xl lg:text-5xl font-bold"
            id="target-1"
          >
            I craft web apps, build secure severs,
          </h1>
          <div className="flex flex-row justify-between items-center">
            <p
              className="text-sm font-bold w-[400px] text-left ml-5 items-center p-5"
              id="target-2"
            >
              with 2 years experience in web development, i've built projects
              that solve problems in the digital world.{<br />} Welcome to my
              world
            </p>
            <p
              className="oswald-font uppercase bg-[#dcd2cd] sm:py-4 sm:px-5 text-[#000] inline-block text-lg sm:text-2xl md:text-3xl lg:text-5xl font-semibold"
              id="target-3"
            >
              and design interface
            </p>
          </div>
          <div className="overflow-hidden">
            <p
              className="quicksand-font text-lg sm:text-2xl md:text-4xl lg:text-2xl"
              id="target-4"
            >
              FullStack Engineer
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center mb-10 md:mt-[7rem]">
          <div className="invisible sm:visible">神は最も偉大だ</div>
          <button className="flex font-bold flex-nowrap transition-all hover:rounded-lg flex-row items-center gap-4 bg-[#dcd2cd] text-[#000] py-2 px-10">
            <IoIosMail size={20} />
            <span>Send a message</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
