import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(
        [
          "#about-div-1",
          "#about-div-2",
          "#about-span-1",
          "#about-span-2",
          "#about-div-3",
        ],
        {
          y: 100,
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
          stagger: 0.1,
        }
      ).to(
        [
          "#about-div-1",
          "#about-div-2",
          "#about-span-1",
          "#about-span-2",
          "#about-div-3",
        ],
        {
          y: 0,
          opacity: 1,
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div>
      <div className="overflow-hidden max-w-[800px] mb-10 md:mb-20 sm:text-lg md:text-xl lg:text-2xl">
        <h2 id="about-div-1" className="oswald-font mb-4">
          Info
        </h2>
        <p id="about-div-2" className="font-semibold oswald-light">
          I'm passionate about developing seamless and impressive web
          applications with secure web servers and great <b>User experience.</b>
        </p>
      </div>
      <div className="flex flex-row sm:gap-5 sm:justify-between">
        <div className="flex flex-row gap-4 sm:h-[80px] md:h-[130px] sticky top-[20%]">
          <div className="h-full bg-[#dcd2cd] w-[2px] hidden sm:block" />
          <div className="overflow-y-hidden max-w-[500px] oswald-font hidden lg:text-6xl md:text-4xl sm:text-2xl sm:block">
            <span id="about-span-1">About</span> <br />
            <span id="about-span-2" className="overflow-clip">
              me
            </span>
          </div>
        </div>
        <div id="about-div-3" className="max-w-[500px] space-y-10">
          <div>
            <h2 className="oswald-font sm:text-lg md:text-xl lg:text-2xl oswald-font mb-1">
              Reasons you should get hired
            </h2>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              labore quasi nihil saepe! Quis incidunt ipsum quaerat eos
              reprehenderit nihil.
            </p>
            <img src="/miles-morales.jpg" alt="photo of me" />
          </div>
          <div>
            <h2 className="oswald-font sm:text-lg md:text-xl lg:text-2xl oswald-font mb-1">
              Reasons you should get hired
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              labore quasi nihil saepe! Quis incidunt ipsum quaerat eos
              reprehenderit nihil.
            </p>
          </div>
          <div>
            <h2 className="oswald-font sm:text-lg md:text-xl lg:text-2xl oswald-font mb-1">
              Reasons you should get hired
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              labore quasi nihil saepe! Quis incidunt ipsum quaerat eos
              reprehenderit nihil.
            </p>
          </div>
          <div>
            <h2 className="oswald-font sm:text-lg md:text-xl lg:text-2xl oswald-font mb-1">
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
    </div>
  );
};

export default About;
