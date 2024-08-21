import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export interface projectsDescriptionProps {
  id: string;
  applicationName: string;
  imageUrl: string;
  techStacks: string[];
  projectType: string;
  link: string;
  color: string;
}

export type CardProps = {
  results: projectsDescriptionProps;
};

const Card = ({ results }: CardProps) => {
  return (
    <div style={{ backgroundColor: results.color }}>
      <Link
        to={results.link}
        className="flex flex-row justify-between items-center h-screen"
      >
        <div className="ml-10 flex flex-col gap-y-14 w-[500px]">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-2xl font-semibold">View project</p>
            <FaArrowRightLong />
          </div>
          <div>
            <div className="divide-x-2 divide-[#dcd2cd]">
              {results.techStacks
                .map((items) => <span className="px-2">{items}</span>)
                .slice(0, 3)}
            </div>
            <h1 className="oswald-font text-6xl">{results.applicationName}</h1>
          </div>
        </div>
        <div className="space-y-2">
          <span className="oswald-font text-8xl text-[#dcd2cd93]">
            {results.id}
          </span>
          <img
            src={results.imageUrl}
            className="w-[400px]"
            alt={results.applicationName}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
