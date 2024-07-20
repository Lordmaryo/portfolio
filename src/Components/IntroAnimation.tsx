import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const IntroAnimation = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        duration: 0.5,
      })
        .from("#desc", {
          y: "+=400",
          opacity: 0,
          duration: 1,
          // stagger: 0.1,
        })
        .from(["#title-1, #title-2"], {
          y: "+=400",
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
        })
        .to(["#title-1, #title-2"], {
          y: "-=400",
          opacity: 1,
          delay: 0.5,
          duration: .5,
          stagger: 0.3,
        })
        .to("#desc", {
          y: "-400",
          opacity: 0,
        })
        .to("#intro-slider", {
          yPercent: "-200",
          duration: 0.5,
          opacity: 0.5,
        });
    }, comp);

    return () => {
      gsapContext.revert();
    };
  }, []);

  return (
    <>
      <div className="relative" ref={comp}>
        <div
          className="flex flex-col gap-5 pt-10 px-5 absolute bg-black font-bold w-full overflow-hidden h-screen"
          id="intro-slider"
        >
          <div className="flex flex-row justify-between items-center overflow-hidden">
            <h4 className="text-lg text-[#dcd2cd] font-bold" id="desc">
              Ebube
            </h4>
            <h3 className="text-lg text-[#dcd2cd] font-bold" id="desc">
              Emmanuel
            </h3>
          </div>
          <div className="space-y-5 anton-sc-regular text-[#dcd2cd] text-[7rem] text-center tracking-wider">
            <div className="overflow-hidden">
              <h1 id="title-1">Hey I'm</h1>
            </div>
            <div className="overflow-hidden">
              <h1 id="title-2" className="text-[#5f5d5d]">
                Emma TOKYO
              </h1>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center overflow-hidden">
            <h3 className="text-lg text-[#dcd2cd] font-bold" id="desc">
              Software Engineer
            </h3>
            <h3 className="text-lg text-[#dcd2cd] font-bold" id="desc">
              Fullstack Developer
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroAnimation;
