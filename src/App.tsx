import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-gradient-to-br from-[#4fa7a0] via-[#6cc08b] to-[#7fd18c]
   "
    >
      <Navbar />
      <div className="w-5xl bg-red-400 h-[600px]">
        <Routes>
          <Route path="/" element={<>ass</>} />
          <Route path="/about" element={<>sdsd</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
