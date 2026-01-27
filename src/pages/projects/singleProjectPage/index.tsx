import ContentDivider from "../../../components/contentDivider";
import type { Project, Technology } from "../../../types";
import { useParams } from "react-router-dom";

function SingleProject({
  projects,
  technologyList,
}: {
  projects: Project[];
  technologyList: Technology[];
}) {
  const { projectID } = useParams<{ projectID: string }>();

  const project = projects.find((p) => p.projectID === projectID);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-[#FEFEFE] min-h-full">
      <ContentDivider title={project.projectName} style="block">
        <div className="px-[20px] pt-[20px]">
          <div className="flex gap-[10px]">
            {project.projectImageUrls.map((url) => {
              return (
                <img
                  src={url}
                  alt="project image"
                  className="w-1/2 object-cover"
                />
              );
            })}
          </div>
          {/* links */}
          <div className="flex gap-x-[30px] gap-y-[10px] mt-[20px] flex-wrap">
            {project.links.map((link) => {
              return (
                <a
                  href={link.link}
                  target="_blank"
                  className="text-[14px] bg-[#0494FA] text-[#fefefe] px-[6px] py-[1px] rounded-[6px] hover:text-blue-700"
                >
                  {link.linkName}
                </a>
              );
            })}
          </div>

          {/* created date */}
          <div className="flex gap-[10px] mt-[20px] items-start">
            <p className="text-[#999] text-[14px]">Created Date - </p>
            <p className="text-gray-500 text-[14px]">{project.startedDate}</p>
          </div>

          {/* description */}
          <p className="mt-[5px] leading-7 text-[#7a7a7a] text-[17px]">
            {project.projectDescription}
          </p>

          {/* technology */}
          <div className="flex gap-x-[30px] gap-y-[10px] mt-[30px] flex-wrap">
            {project.technologies.map((technologyId) => {
              const technology = technologyList.find(
                (tech) => tech.technologyID === technologyId,
              );
              if (!technology) return null;
              return (
                <img
                  src={technology.imageUrl}
                  alt={`technology image of ${technology.technology}`}
                  className="w-[50px]"
                />
              );
            })}
          </div>

          {/* architecture */}
          <div className="grid grid-cols-1  sm:grid-cols-2 mt-[30px] gap-x-[10px] gap-y-[10px]">
            {project.architectureImageUrls.map((url) => {
              return (
                <div>
                  <p className="text-[#444] font-bold">{url.diagramName}</p>
                  <img
                    src={url.link}
                    alt="architecture diagram cover"
                    className="object-cover1 rounded-lg sm:h-[300px]"
                  />
                </div>
              );
            })}
          </div>

          {/* architecture description */}
          <p className="mt-[20px] leading-7 text-[#7a7a7a] text-[17px]">
            {project.architectureDescription}
          </p>

          {/* tags */}
          <div className="flex gap-x-[30px] mt-[10px] flex-wrap gap-y-[10px]">
            {project.tags.map((tag) => {
              return (
                <p className="text-[#0494FA] border-[1px] border-[#0494FA] px-[4px] text-[13px] bg-[#e7f6ff]">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </ContentDivider>
    </div>
  );
}

export default SingleProject;
