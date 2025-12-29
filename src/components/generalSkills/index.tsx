import ContentDivider from "../contentDivider";
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

function GeneralSkills() {
  return (
    <ContentDivider title="Skills">
      {skills.map((skill) => {
        return (
          <div className="pt-[20px] px-[20px] pb-[20px] border-gray-100 odd:border-r-[1px] border-b-[1px] ">
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
  );
}

export default GeneralSkills;
