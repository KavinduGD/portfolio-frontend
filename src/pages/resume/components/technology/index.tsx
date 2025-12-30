import React from "react";
import TechnologyCard from "../technologyCard";
import ContentDivider from "../../../../components/contentDivider";

/* 
technology
level
icon
type
*/

/* 
programming
    python
    javascript
    java
    Typescript

Web development
    HTML
    CSS
    React
    Express
    Flask
    Wordpress
    api Documentation (Openapi)

Devops
    docker 
    kubernetes 
    Github
    Github actions
    Jenkins
    Ansible
    Terraform
    Gitlab CI Cd
    AWS codepipeline

AI/ML
    Machine learning
    Deep learning
    AI agents

Designing/ Diagramming
    Figma
    Lucid chart
    Draw.io
    
Cloud 
    AWS
    Azure

Database 
    Mqsql
    Mongodb

 Linux
    linux commands
    bash scripting
*/

interface Technology {
  technology: string;
  level: number;
  icon: string;
  type: string;
}
const ICON_URL =
  "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png";

const technologyList: Technology[] = [
  // ================= PROGRAMMING =================
  { technology: "Python", level: 90, icon: ICON_URL, type: "programming" },
  { technology: "JavaScript", level: 80, icon: ICON_URL, type: "programming" },
  { technology: "Java", level: 70, icon: ICON_URL, type: "programming" },
  { technology: "TypeScript", level: 80, icon: ICON_URL, type: "programming" },

  // ================= WEB DEVELOPMENT =================
  { technology: "HTML", level: 90, icon: ICON_URL, type: "web" },
  { technology: "CSS", level: 90, icon: ICON_URL, type: "web" },
  { technology: "React", level: 90, icon: ICON_URL, type: "web" },
  { technology: "Express", level: 80, icon: ICON_URL, type: "web" },
  { technology: "Flask", level: 70, icon: ICON_URL, type: "web" },
  { technology: "WordPress", level: 70, icon: ICON_URL, type: "web" },
  { technology: "OpenAPI", level: 80, icon: ICON_URL, type: "web" },

  // ================= DEVOPS =================
  { technology: "Docker", level: 80, icon: ICON_URL, type: "devops" },
  { technology: "Kubernetes", level: 70, icon: ICON_URL, type: "devops" },
  { technology: "GitHub", level: 90, icon: ICON_URL, type: "devops" },
  { technology: "GitHub Actions", level: 80, icon: ICON_URL, type: "devops" },
  { technology: "Jenkins", level: 70, icon: ICON_URL, type: "devops" },
  { technology: "Ansible", level: 60, icon: ICON_URL, type: "devops" },
  { technology: "Terraform", level: 70, icon: ICON_URL, type: "devops" },
  { technology: "GitLab CI/CD", level: 70, icon: ICON_URL, type: "devops" },
  { technology: "AWS CodePipeline", level: 60, icon: ICON_URL, type: "devops" },

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
  { technology: "Linux Commands", level: 9, icon: ICON_URL, type: "linux" },
  { technology: "Bash Scripting", level: 8, icon: ICON_URL, type: "linux" },
];

function reOrganizeTechnologiesByType(technologyList: Technology[]) {
  const reOrganizedTechnologyObject: {
    [type: string]: Technology[];
  } = {};

  for (let i = 0; i < technologyList.length; i++) {
    const tech = technologyList[i];
    if (!reOrganizedTechnologyObject[tech.type]) {
      reOrganizedTechnologyObject[tech.type] = [];
    }
    reOrganizedTechnologyObject[tech.type].push(tech);
  }

  // create a array from the object representing highest to lowest number of technology
  const reOrganizedTechnologyArray: {
    type: string;
    technologies: Technology[];
  }[] = [];

  for (const type in reOrganizedTechnologyObject) {
    reOrganizedTechnologyArray.push({
      type,
      technologies: reOrganizedTechnologyObject[type],
    });
  }

  reOrganizedTechnologyArray.sort(
    (a, b) => b.technologies.length - a.technologies.length
  );

  return reOrganizedTechnologyArray;
}

console.log(reOrganizeTechnologiesByType(technologyList));

function Technology() {
  return (
    <ContentDivider title="Technologies" style="block">
      {reOrganizeTechnologiesByType(technologyList).map(
        (technologyListOfaType) => {
          return (
            <div className="px-[20px] pt-[20px]">
              <p>{technologyListOfaType.type}</p>
              <div className="flex flex-wrap gap-[40px] pt-[20px] ">
                {technologyListOfaType.technologies.map((technology) => {
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
