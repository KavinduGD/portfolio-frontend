import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProfileContainer from "./components/profileContainer";
import About from "./pages/about";
import Resume from "./pages/resume";
import backgroundImage from "./assets/background.jpg";
import Projects from "./pages/projects";
import type { User } from "./types";

const user: User = {
  fullName: "John Doe",
  shortName: "John",
  about:
    "Hey, there 👋 I'm Benjamin, a Software developer and Data scientist with over 8+ years of experience, specialising in Java and React. Also I proficient at using tools and programming languages such as Python or SQL to manipulate and analyze data.",
  age: 30,
  address: "49/133 N, Thiththalapitigoda,yakkala , Gamapaha,  Sri Lanka",
  Languages: ["English", "Sinhala"],
  email: "kavidudharmasiri90@gmail.com",
  linkedIn: "https://www.linkedin.com/in/kavindu-dharmasiri-90/",
  github: "https://github.com/kavindu-dharmasiri",
  phone: "+94 76 123 4567",
  jobTitle: "Software Engineer",
  education: [
    {
      institution: "Sri Lanka Institute of Information Technology",
      location: "Malabe, Sri Lanka",
      degree: "BSc in Software Engineering",
      startDate: "2015",
      endDate: "2019",
      results: "3.3 Gpa",
    },
    {
      institution: "Ananda College",
      location: "Colombo, Sri Lanka",
      degree: "Ordinary Level (O/L)",
      startDate: "2015",
      endDate: "2019",
      results: "9 A's",
    },
    {
      institution: "Ananda College",
      location: "Colombo, Sri Lanka",
      degree: "Advanced Level (A/L)",
      startDate: "2015",
      endDate: "2019",
      results: "2 C's 1 S",
    },
  ],
};

function App() {
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
            <Route path="/" element={<About {...user} />} />
            <Route path="/resume" element={<Resume {...user} />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
