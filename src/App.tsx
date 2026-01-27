import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProfileContainer from "./components/profileContainer";
import About from "./pages/about";
import Resume from "./pages/resume";
import backgroundImage from "./assets/background.jpg";
import type { ICert, Project, Skill, Technology, User } from "./types";
import AllProjectsCardsPage from "./pages/projects/allProjectsPage";
import SingleProject from "./pages/projects/singleProjectPage";
import AllCertificatePage from "./pages/cert/allCertficatesPage";
import SingleCertificatePage from "./pages/cert/singleCertificatePage";
import ContactPage from "./pages/contact";
import { useEffect, useState } from "react";
import frontendAxios from "./baseUrl";
import Loading from "./components/loading";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [technologyList, setTechnologyList] = useState<Technology[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<ICert[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await frontendAxios.get<User>("/api/user");
        setUser(userResponse.data);
        const skillsResponse = await frontendAxios.get<Skill[]>("/api/skill");
        setSkills(skillsResponse.data);
        const technologyResponse =
          await frontendAxios.get<Technology[]>("/api/technology");
        setTechnologyList(technologyResponse.data);
        const projectsResponse =
          await frontendAxios.get<Project[]>("/api/project");
        setProjects(projectsResponse.data);
        const certificatesResponse =
          await frontendAxios.get<ICert[]>("/api/certificate");
        setCertificates(certificatesResponse.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  console.log("skills", skills);

  if (!user || skills.length === 0) {
    return <Loading />;
  }
  return (
    <div
      className="flex justify-center items-center  lg:h-screen bg-gradient-to-br
      font-play
      bg-cover bg-center bg-no-repeat
      md:flex lg:flex-row flex-col
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex items-center lg:flex-row flex-col lg:w-auto w-full lg:px-0 px-[20px] lg:py-0 py-[10px] xl:gap-[10px] lg:gap-[5px]  gap-[20px]">
        <Navbar />
        <ProfileContainer />
      </div>
      <div className="2xl:w-[1000px] xl:w-[800px] lg:w-[600px] w-full  lg:h-[650px] lg:overflow-y-scroll lg:px-0 px-[20px]">
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<About user={user} skills={skills} />} />
            <Route
              path="/resume"
              element={
                <Resume
                  user={user}
                  skills={skills}
                  technologyList={technologyList}
                />
              }
            />
            <Route
              path="/projects"
              element={<AllProjectsCardsPage projects={projects} />}
            />
            <Route
              path="/projects/:projectID"
              element={
                <SingleProject
                  projects={projects}
                  technologyList={technologyList}
                />
              }
            />
            <Route
              path="/certificates"
              element={<AllCertificatePage certificates={certificates} />}
            />
            <Route
              path="/certificates/:certificateID"
              element={<SingleCertificatePage certificates={certificates} />}
            />
            <Route path="/contact" element={<ContactPage user={user} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
