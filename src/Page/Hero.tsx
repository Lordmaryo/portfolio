import { IoIosMail } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-[#345b48] h-[100vh] pt-32 sm:pt-28 px-5">
      <div className="text-right space-y-5">
        <h1 className="text-2xl uppercase md:text-3xl lg:text-5xl font-bold">
          I craft web apps, build secure severs,
        </h1>
        <p className="hidden md:block text-sm font-bold w-[300px] text-left ml-5 items-center">
          with 2+ years experience in web development, i've built projects that
          solve problems in the digital world. Welcome to my world
        </p>
        <p className="bg-[#dcd2cd] pr-0 mr-0 sm:py-4 sm:px-5 text-[#345b48] inline-block text-lg sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
          and design interface
        </p>
        <p className="text-lg sm:text-2xl md:mt-28 md:text-4xl lg:text-2xl">
          FullStack Engineer
        </p>
      </div>

      <div className="flex flex-row justify-between gap-5 items-center mt-[5rem] md:mt-[9rem]">
        <div className="invisible sm:visible">©2024Emmanuel.Developer</div>
        <button className="flex flex-nowrap flex-row items-center gap-4 bg-[#dcd2cd] text-[#345b48] py-2 px-10 mx-auto">
          <IoIosMail size={20} />
          <span>Send a message</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
