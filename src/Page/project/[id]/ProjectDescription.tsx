import { useParams } from "react-router-dom";
import ProjectItems from "../../../data/projectItems.json";
import { projectsDescriptionProps } from "../../../Home-components/Card";

const ProjectDescription = () => {
  const { id } = useParams<{ id: string }>();
  const project = ProjectItems.find(
    (project) => project.id === id
  ) as projectsDescriptionProps;

  return (
    <div className="p-20">
      <h1 className="text-6xl">{project.id}</h1>
    </div>
  );
};

export default ProjectDescription;
