import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        duration: 1.3,
      })
        .from(["#title-1, #title-2", "#title-3"], {
          y: "+=200",
          opacity: 0,
          stagger: 0.3,
        })
        .to(["#title-1, #title-2", "#title-3"], {
          y: "-=200",
          opacity: 1,
          delay: 0.5,
          stagger: 0.3,
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
    <div className="relative" ref={comp}>
      <div
        className="flex bg-black absolute flex-col font-bold w-full overflow-hidden px-12 h-screen"
        id="intro-slider"
      >
        <div className="space-y-5 anton-sc-regular text-green-500 text-[10rem] text-center tracking-wider">
          <div className="overflow-hidden">
            <h1 id="title-1">Hey I'm</h1>
          </div>
          <div className="overflow-hidden">
            <h1 id="title-2">Emmanuel Ebube</h1>
          </div>
        </div>
        <div className="absolute top-[85%] right-12 overflow-hidden">
          <h2 className="text-5xl text-right text-[#dcd2cd]" id="title-3">
            Fullstack Developer
          </h2>
        </div>
      </div>
      <div className="text-5xl font-bold text-center">Welcome.</div>
    </div>
  );
};
 
export default App;
