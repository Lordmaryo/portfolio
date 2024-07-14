import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import Hero from "./Page/Hero";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Page/About";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        duration: 0.5,
      })
        .from(["#title-1, #title-2", "#title-3"], {
          y: "+=400",
          opacity: 0,
          duration: 1,
          stagger: 0.3,
        })
        .to(["#title-1, #title-2", "#title-3"], {
          y: "-=400",
          opacity: 1,
          delay: 0.5,
          stagger: 0.3,
        })
        .to("#intro-slider", {
          yPercent: "-200",
          duration: 0.8,
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
          className="flex bg-black absolute flex-col font-bold w-full overflow-hidden h-screen"
          id="intro-slider"
        >
          <div className="space-y-5 anton-sc-regular text-[#dcd2cd] text-[10rem] text-center tracking-wider">
            <div className="overflow-hidden">
              <h1 id="title-1">Hey I'm</h1>
            </div>
            <div className="overflow-hidden">
              <h1 id="title-2" className="text-[#5f5d5d]">Ebube Emmanuel</h1>
            </div>
          </div>
          <div className="absolute top-[85%] right-12 overflow-hidden">
            <h2
              className="text-5xl text-right text-[#dcd2cd] font-light"
              id="title-3"
            >
              Fullstack Developer
            </h2>
          </div>
        </div>
      </div>

      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
