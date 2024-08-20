import Hero from "../Components/Hero";
import Results from "../Components/Results";
import ProjectItems from "../data/projectItems.json";

const Home = () => {
  return (
    <div>
      <Hero />
      <Results results={ProjectItems} />
    </div>
  );
};

export default Home;
