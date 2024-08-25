import Contact from "../Components/Contact";
import Hero from "../Home-components/Hero";
import Results from "../Home-components/Projects";
import WhyHireMe from "../Home-components/WhyHireMe";
import ProjectItems from "../data/projectItems.json";

const Home = () => {
  return (
    <div className="w-full py-24">
      <Hero />
      <Results projects={ProjectItems} />
      <WhyHireMe />
      <Contact />
    </div>
  );
};

export default Home;
