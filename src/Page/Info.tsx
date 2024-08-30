import Contact from "../Components/Contact";
import About from "../Info-components/About";
import TechStacks from "../Info-components/TechStacks";

const Info = () => {
  return (
    <div className="w-full py-24 md:py-40 px-5 sm:px-20 md:px-20 lg:px-40">

      {/* background blur effect */}
      <div className="w-[400px] h-[400px] absolute -top-20 -left-10 rounded-full bg-[#dcd2cd20] blur-3xl"></div>
      <About />
      <TechStacks />
      <Contact />
    </div>
  );
};

export default Info;
