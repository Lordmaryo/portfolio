import { Link } from "react-router-dom";

export interface projectsDescriptionProps {
  id: string;
  applicationName: string;
  imageUrl: string;
  techStacks: string[];
  projectType: string;
  link: string;
}

export type CardProps = {
  results: projectsDescriptionProps;
};

const Card = ({ results }: CardProps) => {
  return (
    <Link to={results.link}>
      <div className="w-full h-[500px]">
        <span>{results.id}</span>
        <img src={results.imageUrl} alt={results.applicationName} />
      </div>
    </Link>
  );
};

export default Card;
