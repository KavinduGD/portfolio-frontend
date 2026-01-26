import type { User } from "../../types";
import ContentDivider from "../contentDivider";

function Education(user: User) {
  return (
    <ContentDivider title="Education">
      {user.education.map((education) => {
        return (
          <div className="px-[20px] py-[20px] border-gray-100 odd:border-r-[1px] border-b-[1px]">
            <span className="border-[1px] border-gray-200 px-[6px] py-[3px] rounded-md text-[13px] text-[#9a9a9a]">
              {education.startYear} - {education.endYear}
            </span>
            <p className="text-[17px] text-[#323232] font-bold mt-[10px]">
              {education.institution}
            </p>
            <span className="text-[14px] text-[#999]">
              {education.location}
            </span>
            <p className="text-[17px] text-[#444444] mt-[10px]">
              {education.degree}
            </p>
            <span className="font-bold">{education.results}</span>
          </div>
        );
      })}
    </ContentDivider>
  );
}

export default Education;
