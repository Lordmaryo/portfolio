import Contact from "../Components/Contact";
import About from "../Info-components/About";
import TechStacks from "../Info-components/TechStacks";

const Info = () => {
  return (
    <div className="w-full py-24 md:py-40 px-5 sm:px-20 md:px-40">
      <About />
      <TechStacks />
      <Contact />
    </div>
  );
};

export default Info;
