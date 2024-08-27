import Home from "./Page/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Info from "./Page/Info";
import ProjectDescription from "./Page/project/[id]/ProjectDescription";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const App = () => {
  const location = useLocation();
  const isProjectDescription = location.pathname.startsWith("/project");

  return (
    <>
      <div>
        {!isProjectDescription && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/project/:id" element={<ProjectDescription />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
