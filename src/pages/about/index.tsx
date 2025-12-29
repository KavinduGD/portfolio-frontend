import ContentDivider from "../../components/contentDivider";
import type { User } from "../../App";
import skillImage from "./skillImage.png";
interface skill {
  skill: string;
  description: string;
  imageUrl: string;
}

const skills: skill[] = [
  {
    skill: "Web development",
    description:
      "Building resEnd-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project. technologies.",
    imageUrl:
      "https://www.svgrepo.com/show/427621/confidence-confident-dignity.svg",
  },
  {
    skill: "UI/UX Design",
    description:
      "Designing End-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project.ncing user experience.",
    imageUrl:
      "https://www.svgrepo.com/show/427621/confidence-confident-dignity.svg",
  },
  {
    skill: "Project Management",
    description:
      "PlannEnd-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project.efficiently and effectively.",
    imageUrl:
      "https://www.svgrepo.com/show/427621/confidence-confident-dignity.svg",
  },
  {
    skill: "Data Analysis",
    description:
      "Analyzing dataEnd-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project.support decision-making.",
    imageUrl:
      "https://www.svgrepo.com/show/427621/confidence-confident-dignity.svg",
  },

  {
    skill: "Digital Marketing",
    description:
      "Promoting products or End-to-end organization, ui/ux design, optimization, and maintenance of your mobile app project.digital channels to reach a wider audience.",
    imageUrl:
      "https://www.svgrepo.com/show/427621/confidence-confident-dignity.svg",
  },
];
function About(user: User) {
  return (
    <div className="bg-[#FEFEFE]">
      <ContentDivider title="About">
        <div className="pt-[20px] px-[20px] text-[17px] text-[#444444]">
          <p>{user.about || "loding..."}</p>
        </div>
        <div className="pt-[20px] px-[20px] even:border-l border-gray-300 flex flex-col gap-[10px]">
          <div className="flex justify-between items-center">
            <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
              Age
            </p>
            <p className="text-[17px] text-[#444444]">{user.age} Years</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
              Mobile
            </p>
            <p className="text-[17px] text-[#444444]">{user.phone}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
              Address
            </p>
            <p className="text-[17px] text-[#444444]">
              {user.address.split(",").slice(3).join(", ")}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#fefefe] text-[14px] bg-[#0494fa] px-[10px] py-[2px] rounded-[2px] border-0">
              Languages
            </p>
            <p className="text-[17px] text-[#444444]">
              {user.Languages.join(", ")}
            </p>
          </div>
        </div>
      </ContentDivider>
      <ContentDivider title="Skills">
        {skills.map((skill) => {
          return (
            <div className="pt-[20px] px-[20px] pb-[20px] border-gray-200 odd:border-r-[1px] border-b-[1px] ">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-100 flex items-center justify-center">
                <img src={skillImage} className="w-[50px]" alt="skill image" />
              </div>
              <p className="text-[17px] text-[#222] font-bold mt-[10px]">
                {skill.skill}
              </p>
              <p className="text-[17px] text-[#323232] mt-[10px]">
                {skill.description}
              </p>
            </div>
          );
        })}
      </ContentDivider>
    </div>
  );
}

export default About;
