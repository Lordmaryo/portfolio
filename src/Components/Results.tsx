import Card, { projectsDescriptionProps } from "./Card";

type Resultsprops = {
  results: projectsDescriptionProps[];
};

const Results = ({ results }: Resultsprops) => {
  return (
    <div className="py-10">
      <h1 className="mb-20 oswald-font text-7xl text-center text-[#ffffffe2]">
        Selected Works
      </h1>
      <div>
        {results?.map((result) => (
          <Card key={result.id} results={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
