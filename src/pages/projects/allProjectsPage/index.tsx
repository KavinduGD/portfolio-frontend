import ContentDivider from "../../../components/contentDivider";
import type { Project } from "../../../types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type ChildProps = {
  projects: Project[];
};

function AllProjectsCardsPage({ projects }: ChildProps) {
  const navigate = useNavigate();
  // sort projects by score in descending order
  projects.sort((a, b) => b.score - a.score);
  return (
    <div className=" bg-[#FEFEFE] dark:bg-slate-800 min-h-full">
      <ContentDivider title="Projects">
        {projects.map((project) => {
          return (
            <div
              className="xl:px-[20px] xl:py-[20px] px-[5px] py-[5px] border-gray-100 odd:border-r-[1px] border-b-[1px] "
              key={project.projectID}
            >
                <div
                  className="group bg-gray-100/10 dark:bg-slate-700/50 px-[20px] py-[10px] rounded-lg shadow-2xs border-[1px] border-gray-100 dark:border-gray-600 overflow-hidden cursor-pointe"
                onClick={() => {
                  navigate(`/projects/${project.projectID}`);
                }}
              >
                <div className="overflow-hidden rounded-md]">
                  <img
                    src={project.projectImageUrls[0]}
                    alt=""
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-110 h-[300px] w-full object-cover "
                  />
                </div>

                <div className="flex justify-between mt-[10px]">
                  <p className="text-[17px] text-gray-700 dark:text-gray-200 font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.projectName}
                  </p>
                  <FaArrowUpRightFromSquare className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
              </div>
            </div>
          );
        })}
      </ContentDivider>
    </div>
  );
}

export default AllProjectsCardsPage;
