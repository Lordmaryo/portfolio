import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Info from "./Page/Info";
import ProjectDescription from "./Page/ProjectDescription";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/project" element={<ProjectDescription />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
