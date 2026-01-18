import ContentDivider from "../../../../components/contentDivider";
import type { Project } from "../../../../types";

type ChildProps = {
  setProjectID: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
};

function AllProjectsCardsPage({ setProjectID, projects }: ChildProps) {
  return (
    <ContentDivider title="Projects">
      {projects.map((project) => {
        return (
          <div
            className="px-[20px] py-[20px] border-gray-100 odd:border-r-[1px] border-b-[1px]"
            key={project.projectID}
          >
            <div
              className="group bg-gray-100/10 px-[20px] py-[10px] rounded-lg shadow-2xs border-[1px] border-gray-100 overflow-hidden cursor-pointe"
              onClick={() => {
                setProjectID(project.projectID);
              }}
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.projectImageUrls[0]}
                  alt=""
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <p className="text-[17px] font-bold">{project.projectName}</p>
            </div>
          </div>
        );
      })}
    </ContentDivider>
  );
}

export default AllProjectsCardsPage;
