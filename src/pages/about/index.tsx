import Education from "../../components/education";
import GeneralSkills from "../../components/generalSkills";
import type { User } from "../../types";
import AboutTop from "./components/AboutTop";

function About(user: User) {
  return (
    <div className="bg-[#FEFEFE]">
      <AboutTop {...user} />
      <GeneralSkills />
      <Education {...user} />
    </div>
  );
}

export default About;
