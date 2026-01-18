import ContentDivider from "../../../../components/contentDivider";
import type { Project } from "../../../../types";
import TechnologyCard from "../../../resume/components/technologyCard";

function SingleProject({ project }: { project: Project }) {
  return (
    <ContentDivider title={project.projectName} style="block">
      <div className="px-[20px] pt-[20px]">
        <div className="flex gap-[10px]">
          {project.projectImageUrls.map((url) => {
            return (
              <img
                src={url}
                alt="project image"
                className="w-1/2 object-cover rounded-lg"
              />
            );
          })}
        </div>
        {/* links */}
        <div className="flex gap-[30px]">
          {project.links.map((link) => {
            return (
              <a href={link.link} target="_blank">
                {link.linkName}
              </a>
            );
          })}
        </div>
        {/* created date */}
        <div className="flex gap-[20px]">
          <p>Created Date - </p>
          <p>{project.startedDate}</p>
        </div>
        {/* technology */}
        <div className="flex gap-[30px]">
          {project.technologies.map((technology) => {
            return <img src={technology.icon} className="w-[50px]" />;
          })}
        </div>
        {/* tags */}
        <div className="flex gap-[20px]">
          {project.tags.map((tag) => {
            return <p>{tag}</p>;
          })}
        </div>
        {/* description */}
        <p>Description</p>
        <p>{project.projectDescription}</p>

        {/* architecture */}
        <p>Project Architecture</p>
        <div className="grid grid-cols-1  sm:grid-cols-2">
          {project.architectureImageUrls.map((url) => {
            return (
              <div>
                <p>{url.diagramName}</p>
                <img
                  src={url.link}
                  alt="architecture diagram cover"
                  className="object-cover1 rounded-lg h-[300px]"
                />
              </div>
            );
          })}
        </div>

        {/* architecture description */}
        <p>Description</p>
        <p>{project.architectureDescription}</p>
      </div>
    </ContentDivider>
  );
}

export default SingleProject;
