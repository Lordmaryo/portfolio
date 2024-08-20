import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Page/About";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
