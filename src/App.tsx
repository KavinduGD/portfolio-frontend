import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProfileContainer from "./components/profileContainer";
import About from "./pages/about";

function App() {
  return (
    <div
      className="flex justify-center items-center  lg:h-screen bg-gradient-to-br
      font-play
      bg-cover bg-center bg-no-repeat
      md:flex lg:flex-row flex-col
      "
      style={{
        backgroundImage: "url('src/assets/background.jpg')",
      }}
    >
      <div className="flex items-center lg:flex-row flex-col lg:w-auto w-full lg:px-0 px-[20px] lg:py-0 py-[10px] xl:gap-[10px] lg:gap-[5px]  gap-[20px]">
        <Navbar />
        <ProfileContainer />
      </div>
      <div className="2xl:w-[1000px] xl:w-[800px] lg:w-[600px] w-full  h-[650px] overflow-scroll lg:px-0 px-[20px]">
        <div className=" bg-[#FEFEFE] w-full h-full">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<>sdsd</>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
