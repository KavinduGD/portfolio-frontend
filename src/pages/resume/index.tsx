import Education from "../../components/education";
import type { User } from "../../App";
import GeneralSkills from "../../components/generalSkills";
import Technology from "./components/technology";

function Resume(user: User) {
  return (
    <div className="bg-[#FEFEFE]">
      <Education {...user} />
      <GeneralSkills />
      <Technology />
    </div>
  );
}

export default Resume;
