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
        { y: 100 },
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
      <aside className="sm:w-[50%] md:ml-20 flex flex-row md:h-[200px] items-center gap-4">
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
            Ability to Deliver Quality Products
          </h2>
          <p>
            I am committed to producing high-quality results ensuring every
            project meets or exceeds expectations. My attention to detail and
            dedication ensures that the end product is reliable, polished, and
            ready for real-world use.
          </p>
        </div>
        <div>
          <h2 className="oswald-font text-[#ffffffb2] text-2xl mb-1">
            Expertise in Replicating Designs Accurately
          </h2>
          <p>
            I have a strong ability to turn designs into working applications.
            You can rely on me to replicate exactly what was planned, keeping
            the final product true to the original design.
          </p>
        </div>
        <div>
          <h2 className="oswald-font text-[#ffffffb2] text-2xl mb-1">
            Strong Communication Skills
          </h2>
          <p>
            I prioritize clear and effective communication throughout every
            stage of a project. This ensures that goals, updates, and challenges
            are addressed promptly, keeping everyone aligned and ensuring smooth
            collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
