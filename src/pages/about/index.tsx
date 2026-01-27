import Education from "../../components/education";
import GeneralSkills from "../../components/generalSkills";
import type { Skill, User } from "../../types";
import AboutTop from "./components/AboutTop";

function About({ user, skills }: { user: User; skills: Skill[] }) {
  return (
    <div className="bg-[#FEFEFE]">
      <AboutTop {...user} />
      <GeneralSkills skills={skills} />
      <Education {...user} />
    </div>
  );
}

export default About;
