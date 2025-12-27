import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProfileContainer from "./components/profileContainer";

function App() {
  return (
    <div
      className="flex justify-center items-center  h-screen bg-gradient-to-br from-[#08033b] via-[#1d0a88] to-[#807fd1] font-play
   "
    >
      <Navbar />
      <ProfileContainer />
      <div className="w-5xl bg-[#FEFEFE] h-[650px]">
        <Routes>
          <Route path="/" element={<>ass</>} />
          <Route path="/about" element={<>sdsd</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
