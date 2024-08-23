import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import Info from "./Page/Info";
import ProjectDescription from "./Page/ProjectDescription";
import Footer from "./Components/Footer";


// TODO: add navbar to info page 
const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/project" element={<ProjectDescription />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
