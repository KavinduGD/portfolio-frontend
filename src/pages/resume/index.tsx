import Education from "../../components/education";
import GeneralSkills from "../../components/generalSkills";
import type { Skill, Technology, User } from "../../types";
import Technologies from "./components/technology";

function Resume({
  user,
  skills,
  technologyList,
}: {
  user: User;
  skills: Skill[];
  technologyList: Technology[];
}) {
  return (
    <div className="bg-[#FEFEFE]">
      <Education {...user} />
      <GeneralSkills skills={skills} />
      <Technologies technologyList={technologyList} />
    </div>
  );
}

export default Resume;
