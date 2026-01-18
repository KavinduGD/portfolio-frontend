import TechnologyCard from "../technologyCard";
import ContentDivider from "../../../../components/contentDivider";
import type { Technology } from "../../../../types";

const ICON_URL =
  "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png";
const ICON_URL1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s";

const ICON_URL2 =
  "https://p7.hiclipart.com/preview/31/119/666/github-logo-repository-computer-icons-github.jpg";

const ICON_URL3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s";

const ICON_URL4 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF57IURCrdAcTEf9Ga03Fx-kTxSrKJmVM0DQ&s";

const technologyList: Technology[] = [
  // ================= PROGRAMMING =================
  { technology: "Python", level: 90, icon: ICON_URL, type: "programming" },
  { technology: "JavaScript", level: 80, icon: ICON_URL1, type: "programming" },
  { technology: "Java", level: 70, icon: ICON_URL2, type: "programming" },
  { technology: "TypeScript", level: 80, icon: ICON_URL3, type: "programming" },

  // ================= WEB DEVELOPMENT =================
  { technology: "HTML", level: 90, icon: ICON_URL4, type: "web" },
  { technology: "CSS", level: 90, icon: ICON_URL1, type: "web" },
  { technology: "React", level: 90, icon: ICON_URL4, type: "web" },
  { technology: "Express", level: 80, icon: ICON_URL3, type: "web" },
  { technology: "Flask", level: 70, icon: ICON_URL, type: "web" },
  { technology: "WordPress", level: 70, icon: ICON_URL2, type: "web" },
  { technology: "OpenAPI", level: 80, icon: ICON_URL, type: "web" },

  // ================= DEVOPS =================
  { technology: "Docker", level: 80, icon: ICON_URL, type: "devops" },
  { technology: "Kubernetes", level: 70, icon: ICON_URL2, type: "devops" },
  { technology: "GitHub", level: 90, icon: ICON_URL, type: "devops" },
  { technology: "GitHub Actions", level: 80, icon: ICON_URL3, type: "devops" },
  { technology: "Jenkins", level: 70, icon: ICON_URL4, type: "devops" },
  { technology: "Ansible", level: 60, icon: ICON_URL, type: "devops" },
  { technology: "Terraform", level: 70, icon: ICON_URL, type: "devops" },
  { technology: "GitLab CI/CD", level: 70, icon: ICON_URL1, type: "devops" },
  {
    technology: "AWS CodePipeline",
    level: 60,
    icon: ICON_URL2,
    type: "devops",
  },

  // ================= AI / ML =================
  { technology: "Machine Learning", level: 70, icon: ICON_URL, type: "ai_ml" },
  { technology: "Deep Learning", level: 70, icon: ICON_URL, type: "ai_ml" },
  { technology: "AI Agents", level: 60, icon: ICON_URL, type: "ai_ml" },

  // ================= DESIGN / DIAGRAMMING =================
  { technology: "Figma", level: 70, icon: ICON_URL, type: "design" },
  { technology: "Lucidchart", level: 70, icon: ICON_URL, type: "design" },
  { technology: "Draw.io", level: 80, icon: ICON_URL, type: "design" },

  // ================= CLOUD =================
  { technology: "AWS", level: 80, icon: ICON_URL, type: "cloud" },
  { technology: "Azure", level: 60, icon: ICON_URL, type: "cloud" },

  // ================= DATABASE =================
  { technology: "MySQL", level: 8, icon: ICON_URL, type: "database" },
  { technology: "MongoDB", level: 8, icon: ICON_URL, type: "database" },

  // ================= LINUX =================
  {
    technology: "Linux Commands",
    level: 9,
    icon: ICON_URL,
    type: "linux",
  },
  { technology: "Bash Scripting", level: 8, icon: ICON_URL, type: "linux" },
];

function reOrganizeTechnologiesByType(
  technologyList: Technology[]
): { type: string; technologies: Technology[] }[] {
  //create  object which has type as key {"type":technology[],"type":technology[]}
  interface TechnologyListObject {
    [key: string]: Technology[];
  }

  const technologyListObject: TechnologyListObject = {};

  for (let i = 0; i < technologyList.length; i++) {
    const technology = technologyList[i];
    const type = technology.type;
    if (!technologyListObject[type]) {
      technologyListObject[type] = [];
    }
    technologyListObject[type].push(technology);
  }

  const technologyListArray: { type: string; technologies: Technology[] }[] =
    [];

  for (const key in technologyListObject) {
    technologyListArray.push({
      type: key,
      technologies: technologyListObject[key],
    });
  }

  technologyListArray.sort(
    (a, b) => b.technologies.length - a.technologies.length
  );

  return technologyListArray;
}

function Technology() {
  return (
    <ContentDivider title="Technologies" style="block">
      {reOrganizeTechnologiesByType(technologyList).map(
        (technologyListForaType) => {
          return (
            <div className="px-[20px] pt-[20px]">
              <span className="text-[15px] font-bold1 text-[#222] text-white bg-[#0494fa] px-[10px] py-[3px] rounded-md">
                {technologyListForaType.type}
              </span>
              <div className="gap-[20px] grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-[10px]">
                {technologyListForaType.technologies.map((technology) => {
                  return <TechnologyCard {...technology} />;
                })}
              </div>
            </div>
          );
        }
      )}
    </ContentDivider>
  );
}

export default Technology;
