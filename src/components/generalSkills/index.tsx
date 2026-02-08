import type { Skill } from "../../types";
import ContentDivider from "../contentDivider";

function GeneralSkills({ skills }: { skills: Skill[] }) {
  return (
    <ContentDivider title="Skills">
      {skills.map((skill) => {
        return (
          <div
            className="pt-[20px] px-[20px] pb-[20px] border-gray-100 odd:border-r-[1px] border-b-[1px]"
            key={skill.skillID}
          >
            <div className="bg-gray-100/10 px-[20px] py-[10px] rounded-lg shadow-2xs border-[1px] border-gray-100 flex flex-col items-center sm:items-start">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-100 flex items-center justify-center">
                <img
                  src={skill.imageUrl}
                  className="w-full h-full object-contain p-[8px]"
                  alt="skill image"
                />
              </div>
              <p className="text-[17px] text-[#222] font-bold mt-[10px]">
                {skill.skill}
              </p>
              <p className="text-[17px] text-[#444444] mt-[10px] text-center sm:text-left">
                {skill.description}
              </p>
            </div>
          </div>
        );
      })}
    </ContentDivider>
  );
}

export default GeneralSkills;
