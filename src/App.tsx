import Hero from "./Page/Hero";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Page/About";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
