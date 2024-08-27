import { Link, useParams } from "react-router-dom";
import ProjectItems from "../../../data/projectItems.json";
import { projectsDescriptionProps } from "../../../Home-components/Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const ProjectDescription = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectItems.find(
    (project) => project.id === id
  ) as projectsDescriptionProps;

  return (
    <div className="pt-20 px-5 sm:px-10 md:px-20 w-full relative">
      <div
        style={{
          background: project.color,
          opacity: 0.5,
        }}
        className="w-[350px] md:w-[700px] lg:w-[1000px] h-[400px] md:h-[700px] lg:h-[1000px] absolute top-1/3 md:top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      ></div>
      <div>
        <div className="flex flex-row justify-between sticky top-0 z-30 py-4">
          <Link
            to={"/"}
            className="flex items-center hover:text-shadow-glow font-bold"
          >
            <FaArrowLeftLong className="mr-2" />
            <span>Back</span>
          </Link>
          <Link
            to={""}
            className="flex items-center hover:text-shadow-glow font-bold"
          >
            <span>Next</span>
            <FaArrowRightLong className="ml-2" />
          </Link>
        </div>
        <div className="max-w-[800px] mx-auto relative mt-20 mb-10">
          <h1 className="sigmar-one-regular text-center absolute -top-10 md:-top-[4.5rem] left-1/2 transform -translate-x-1/2 uppercase text-xl md:text-3xl lg:text-5xl z-10 bg-opacity-50">
            {project.applicationName}
          </h1>
          <img
            className="w-[700px] mx-auto z-20 relative opacity-90"
            src={project.imageUrl}
            alt={project.applicationName}
          />
        </div>
        <div className="flex flex-row justify-between relative">
          <aside className="hidden lg:block w-40 fixed top-[40%]">
            <h2 className="lg:text-xl md:text-lg font-bold mb-4 opacity-50">
              Contents
            </h2>
            <div className="flex flex-col gap-2 font-semibold text-sm">
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                Overview
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                layouts
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                Development
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                Interactions
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                complexities
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                Security
              </a>
              <a
                href="#"
                className="opacity-50 hover:opacity-100 hover:text-shadow-glow transition-all"
              >
                learnings
              </a>
            </div>
          </aside>
          <div className="w-[900px] lg:mx-auto">
            <div className="sm:max-w-[700px] mx-auto flex-wrap sm:flex-nowrap w-full flex items-center justify-center gap-5">
              <button className="flex items-center justify-center font-bold border md:w-[50%] w-[100%] py-2 hover:bg-[#dcd2cd] hover:text-black transition-all duration-300">
                <span className="mr-2">View project</span>
                <FaArrowRightLong />
              </button>
              <button className="flex items-center justify-center font-bold border md:w-[50%] w-[100%] py-2 text-black bg-[#dcd2cd] hover:bg-[#dcd2cdb2] transition-all duration-300">
                <span className="mr-2">Source code</span>
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
