import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WhyHireMe = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const spans = scrollRef.current?.querySelectorAll("#span");

    // TODO: fix project link
    // TODO: fix responsiveness (done for info, left with home and project)
    // TODO: create project descriptions page

    if (spans)
      gsap.fromTo(
        spans,
        { y: 120 },
        {
          y: 0,
          duration: 0.5,
          stagger: 0.1,
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
    <div className="my-10 flex flex-row lg:justify-center flex-wrap px-5 md:flex-nowrap items-center w-full">
      <aside className="sm:w-[50%] flex flex-row md:h-[200px] items-center gap-4">
        <div className="h-full bg-[#dcd2cd] w-[2px] hidden sm:block"></div>
        <div
          ref={scrollRef}
          className="space-x-2 mb-4 md:space-x-0 md:flex flex-col gap-2 text-2xl lg:text-6xl md:text-4xl sm:text-2xl oswald-font"
        >
          <span id="span">Why hire</span>
          <span className="overflow-clip" id="span">
            Me?
          </span>
        </div>
      </aside>
      <div className="sm:w-[50%] space-y-10">
        <div>
          <h2 className="oswald-font text-[#ffffffb2] text-2xl mb-1">
            Reasons you should get hired
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            labore quasi nihil saepe! Quis incidunt ipsum quaerat eos
            reprehenderit nihil.
          </p>
        </div>
        <div>
          <h2 className="oswald-font text-[#ffffffb2] text-2xl mb-1">
            Reasons you should get hired
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            labore quasi nihil saepe! Quis incidunt ipsum quaerat eos
            reprehenderit nihil.
          </p>
        </div>
        <div>
          <h2 className="oswald-font text-[#ffffffb2] text-2xl mb-1">
            Reasons you should get hired
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            labore quasi nihil saepe! Quis incidunt ipsum quaerat eos
            reprehenderit nihil.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
