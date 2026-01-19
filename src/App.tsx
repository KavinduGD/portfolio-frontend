import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProfileContainer from "./components/profileContainer";
import About from "./pages/about";
import Resume from "./pages/resume";
import backgroundImage from "./assets/background.jpg";
import type { ICert, Project, User } from "./types";
import AllProjectsCardsPage from "./pages/projects/allProjectsPage";
import SingleProject from "./pages/projects/singleProjectPage";
import AllCertificatePage from "./pages/cert/allCertficatesPage";
import SingleCertificatePage from "./pages/cert/singleCertificatePage";

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

const p: Project[] = [
  {
    projectID: "p-01",
    projectName: "Travel Management System",
    projectDescription:
      "Learning is a lifelong process that shapes how people think, adapt, and grow. From childhood curiosity to professional mastery, learning builds skills, confidence, and understanding. It encourages critical thinking, creativity, and empathy by exposing individuals to new ideas and perspectives. In a rapidly changing world, continuous learning helps people remain relevant and resilient. Technology expands access to knowledge, but true learning also requires reflection and practice. When individuals commit to learning, societies benefit through innovation, cooperation, and progress. Ultimately, learning is not only about information, but about developing wisdom to make better choices and meaningful contributions for future generations worldwide.Learning is a lifelong process that shapes how people think, adapt, and grow. From childhood curiosity to professional mastery, learning builds es benefit through innovation, cooperation, and progress. Ultimately, learning is not only about information, but about developing wisdom to make better choices and meaningful contributions for future generations worldwide.",
    startedDate: "2022-01-15",
    technologies: [
      {
        technology: "Python",
        level: 90,
        icon: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
        type: "programming",
      },
      {
        technology: "Node.js",
        level: 4,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "backend",
      },
      {
        technology: "MongoDB",
        level: 3,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "database",
      },
      {
        technology: "Python",
        level: 90,
        icon: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
        type: "programming",
      },
      {
        technology: "Node.js",
        level: 4,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "backend",
      },
      {
        technology: "MongoDB",
        level: 3,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "database",
      },
      {
        technology: "Python",
        level: 90,
        icon: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
        type: "programming",
      },
      {
        technology: "Node.js",
        level: 4,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "backend",
      },
      {
        technology: "MongoDB",
        level: 3,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "database",
      },
      {
        technology: "Python",
        level: 90,
        icon: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
        type: "programming",
      },
      {
        technology: "Node.js",
        level: 4,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "backend",
      },
      {
        technology: "MongoDB",
        level: 3,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "database",
      },
      {
        technology: "Python",
        level: 90,
        icon: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
        type: "programming",
      },
      {
        technology: "Node.js",
        level: 4,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "backend",
      },
      {
        technology: "MongoDB",
        level: 3,
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIctrde40EK25GAg9Jxfh4xdwfbjo380nNQQ&s",
        type: "database",
      },
    ],
    projectImageUrls: [
      "https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszyGxUGWO6BPnbwsWQT9fGYMYaYGVKadjCg&s",
    ],
    links: [
      {
        linkName: "GitHub",
        link: "https://github.com/username/travel-management-system",
      },
      {
        linkName: "YouTube",
        link: "https://www.youtube.com/watch?v=examplevideo",
      },
      {
        linkName: "LiveDemo1",
        link: "https://travel-management.example.com",
      },
      {
        linkName: "LiveDemo2",
        link: "https://travel-management.example.com",
      },
      {
        linkName: "API Documentation",
        link: "https://travel-management.example.com/api-docs",
      },
      {
        linkName: "Figma Presentation",
        link: "https://example.com/presentation",
      },
    ],
    architectureImageUrls: [
      {
        diagramName: "System Architecture",
        link: "https://media.geeksforgeeks.org/wp-content/uploads/20250228171646291248/Conceptual-Architecture-Diagram.webp",
      },
      {
        diagramName: "Database Schema",
        link: "https://images.ctfassets.net/w6r2i5d8q73s/1OISrdRhlcYgUcbHRiGGDc/f96e3d7236a88d176455428161d8cb20/aws-architecture-header.png?fm=webp&q=75",
      },
      {
        diagramName: "System Architecture",
        link: "https://media.geeksforgeeks.org/wp-content/uploads/20250228171646291248/Conceptual-Architecture-Diagram.webp",
      },
      {
        diagramName: "Database Schema",
        link: "https://images.ctfassets.net/w6r2i5d8q73s/1OISrdRhlcYgUcbHRiGGDc/f96e3d7236a88d176455428161d8cb20/aws-architecture-header.png?fm=webp&q=75",
      },
    ],
    architectureDescription:
      "The system follows a microservices architecture, with separate services for user management, booking, and payment processing.A comprehensive web application designed to streamline travel planning and management for users and administratorsA comprehensive web application designed to streamline travel planning and management for users and administratorsA comprehensive web application designed to streamline travel planning and management for uLearning is a lifelong process that shapes how people think, adapt, and grow. From childhood curiosity to professional mastery, learning builds skills, confidence, and understanding. It encourages critical thinking, creativity, and empathy by exposing individuals to new ideas and perspectives. In a rapidly changing world, continuous learning helps people remain relevant and resilient. Technology expands access to knowledge, but true learning also requires reflection and practice. When individuals commit to learning, societies benefit through innovation, cooperation, and progress. Ultimately, learning is not only about information, but about developing wisdom to make better choices and meaningful contributions for future generations worldwide.",
    tags: [
      "web",
      "travel",
      "management",
      "react",
      "nodejs",
      "web",
      "travel",
      "management",
      "react",
      "nodejs",
      "web",
      "travel",
      "management",
      "react",
      "nodejs",
      "web",
      "travel",
      "management",
      "react",
      "nodejs",
    ],
    score: 85,
  },
];

const certificates: ICert[] = [
  {
    certificateID: "cert-01",
    name: "Web Development Bootcamp",
    issuer: "Udemy",
    issueDate: "2023-06-15",
    credentialsId: "UDM-123456 UDM-123456UDM-123456UDM-123456UDM-123456",
    ImageUrl:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQFTHSQEntmyxQ/articleshare-shrink_800/articleshare-shrink_800/0/1711957866377?e=2147483647&v=beta&t=4AvjzR2kVSFH_855dudqwyCH_Y0FOLwzHVjXuL15HBM",
    tags: ["web", "html", "css", "javascript"],
    certificateLink:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQFTHSQEntmyxQ/articleshare-shrink_800/articleshare-shrink_800/0/1711957866377?e=2147483647&v=beta&t=4AvjzR2kVSFH_855dudqwyCH_Y0FOLwzHVjXuL15HBM",
  },
  {
    certificateID: "cert-02",
    name: "React Fundamentals",
    issuer: "Certifier",
    issueDate: "2023-09-10",
    credentialsId: "CERT-987654 UDM-123456UDM-123456UDM-123456UDM-123456",
    ImageUrl:
      "https://res.cloudinary.com/certifier/image/upload/v1753911314/image8_7e995ca255.webp",
    tags: ["react", "frontend", "ui"],
    certificateLink:
      "https://res.cloudinary.com/certifier/image/upload/v1753911314/image8_7e995ca255.webp",
  },
  {
    certificateID: "cert-03",
    name: "UI/UX Design Basics",
    issuer: "Pinterest Academy",
    issueDate: "2022-11-05",
    credentialsId: "UIUX-456789 UDM-123456UDM-123456UDM-123456UDM-123456",
    ImageUrl:
      "https://i.pinimg.com/736x/81/19/83/811983fde219f9c0724bc7f5fede1d68.jpg",
    tags: ["design", "ui", "ux"],
    certificateLink:
      "https://i.pinimg.com/736x/81/19/83/811983fde219f9c0724bc7f5fede1d68.jpg",
  },
  {
    certificateID: "cert-04",
    name: "Ethical Hacking Bootcamp",
    issuer: "Udemy",
    issueDate: "2024-02-20",
    credentialsId: "UDEMY-HACK-001 UDM-123456UDM-123456UDM-123456UDM-123456",
    ImageUrl:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQEXZ4032gIKog/articleshare-shrink_800/articleshare-shrink_800/0/1711076689293?e=2147483647&v=beta&t=Z-okXwxnkxMQ0c6K6AjKQEcm3dNwx_IHYYQ-SoGNRbc",
    tags: ["security", "hacking", "cybersecurity"],
    certificateLink:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQEXZ4032gIKog/articleshare-shrink_800/articleshare-shrink_800/0/1711076689293?e=2147483647&v=beta&t=Z-okXwxnkxMQ0c6K6AjKQEcm3dNwx_IHYYQ-SoGNRbc",
  },
];

const projects = Array(4).fill(p[0]) as Project[];

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
            <Route
              path="/projects"
              element={<AllProjectsCardsPage projects={projects} />}
            />
            <Route
              path="/projects/:projectID"
              element={<SingleProject projects={projects} />}
            />
            <Route
              path="/certificates"
              element={<AllCertificatePage certificates={certificates} />}
            />
            <Route
              path="/certificates/:certificateID"
              element={<SingleCertificatePage certificates={certificates} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
