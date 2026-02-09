import { useState } from "react";
import { useParams } from "react-router-dom";

import ContentDivider from "../../../components/contentDivider";
import type { Project, Technology } from "../../../types";

function SingleProject({
  projects,
  technologyList,
}: {
  projects: Project[];
  technologyList: Technology[];
}) {
  // Get projectID from URL
  const { projectID } = useParams<{ projectID: string }>();

  // Find the project by ID
  const project = projects.find((p) => p.projectID === projectID);

  // State for fullscreen image preview
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-[#FEFEFE] min-h-full">
      <ContentDivider title={project.projectName} style="block">
        <div className="px-[20px] pt-[20px]">
          {/* project images */}
          <div className="flex gap-[10px]">
            {project.projectImageUrls.map((url) => {
              return (
                <img
                  key={url}
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
                  key={link.link}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* technologies */}
          <div className="flex gap-x-[30px] gap-y-[10px] mt-[30px] flex-wrap">
            {project.technologies.map((technologyId) => {
              const technology = technologyList.find(
                (tech) => tech.technologyID === technologyId,
              );

              if (!technology) return null;

              return (
                <img
                  key={technology.technologyID}
                  src={technology.imageUrl}
                  alt={`technology image of ${technology.technology}`}
                  className="w-[50px]"
                />
              );
            })}
          </div>

          {/* architecture images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-[30px] gap-x-[10px] gap-y-[10px]">
            {project.architectureImageUrls.map((url) => {
              return (
                <div key={url.link}>
                  <p className="text-[#444] font-bold">{url.diagramName}</p>

                  <img
                    src={url.link}
                    alt="architecture diagram cover"
                    className="rounded-lg cursor-pointer hover:opacity-90"
                    onClick={() => setPreviewImage(url.link)}
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
                <p
                  key={tag}
                  className="text-[#0494FA] border-[1px] border-[#0494FA] px-[4px] text-[13px] bg-[#e7f6ff]"
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </ContentDivider>

      {/* FULLSCREEN IMAGE PREVIEW */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="architecture preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default SingleProject;
