import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TechStacks = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    const li = scrollRef.current?.querySelectorAll("li");

    if (li)
      gsap.fromTo(
        li,
        { y: 120 },
        {
          y: 0,
          duration: 0.3,
          stagger: 0.01,
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "bottom bottom",
            once: true,
            onEnter: () => ScrollTrigger.refresh(),
          },
          ease: "power1.inOut",
        }
      );
  }, []);
  return (
    <div className="h-screen pt-20 md:my-[300px] flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-x-20">
      <div className="flex flex-row gap-4 sm:h-[80px] md:h-[130px] sm:sticky top-[20%]">
        <div className="h-full bg-[#dcd2cd] w-[2px] sm:block hidden" />
        <div className="overflow-y-hidden max-w-[500px] oswald-font lg:text-6xl md:text-4xl sm:text-2xl">
          <span id="techStack-span-1">Current</span>{" "}
          <br className="sm:block hidden" />
          <span id="techStack-span-2" className="overflow-clip">
            Tech Stacks
          </span>
        </div>
      </div>
      <div className="sm:w-[50%] space-y-10">
        <div>
          <h2 className="oswald-font mb-4 sm:text-lg md:text-xl lg:text-2xl">
            frontend
          </h2>
          <ul ref={scrollRef} className="text-2xl lg:text-3xl space-y-4">
            <li className="border-b-[1px] border-[#dcd2cda8]">Html/css</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">React</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">Typescript</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">Javascript</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">Tailwind</li>
          </ul>
        </div>
        <div>
          <h2 className="oswald-font mb-4 sm:text-lg md:text-xl lg:text-2xl">
            backend
          </h2>
          <ul ref={scrollRef} className="text-2xl lg:text-3xl space-y-4">
            <li className="border-b-[1px] border-[#dcd2cda8]">Java</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">Spring Boot</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">Postgres SQL</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">mySQl</li>
            <li className="border-b-[1px] border-[#dcd2cda8]">Docker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
