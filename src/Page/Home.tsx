import Hero from "../Components/Hero";
import Results from "../Components/Projects";
import WhyHireMe from "../Components/WhyHireMe";
import ProjectItems from "../data/projectItems.json";

const Home = () => {
  return (
    <div>
      <Hero />
      <Results projects={ProjectItems} />
      <WhyHireMe />
    </div>
  );
};

export default Home;
