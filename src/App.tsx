import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import Info from "./Page/Info";
import ProjectDescription from "./Page/ProjectDescription";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";


// TODO: add navbar to info page 
// TODO: create and code info page
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
        <Footer />
      </div>
    </>
  );
};

export default App;
