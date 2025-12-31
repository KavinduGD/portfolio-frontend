import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

function ProfileContainer() {
  return (
    <div className="2xl:w-[420px] xl:w-[350px] lg:w-[280px] w-full h-[700px]  bg-[#faf9f9]  overflow-hidden rounded-[4px] flex flex-col items-center ">
      <div
        className="w-full h-[450px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('src/assets/profile-pic.png')",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      />

      <div className="mt-[30px] text-center">
        <h2 className="xl:text-[26px] lg:text-[18px] sm:text-[30px] text-[24px] font-bold">
          Kavindu Gihan Dharmasiri
        </h2>
        <p className="text-blue-600 text-[18px]">Software Engineer</p>
      </div>
      <div className="flex text-[24px] mt-[20px] text-[#323232] gap-[10px]">
        <a
          href="https://github.com/your-username"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/your-username"
          className="hover:text-black transition"
        >
          <IoLogoLinkedin className="text-[27px]" />
        </a>
        <a
          href="https://github.com/your-username"
          className="hover:text-black transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/your-username"
          className="hover:text-black transition"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://github.com/your-username"
          className="hover:text-black transition"
        >
          <FaYoutube />
        </a>
      </div>

      <div className="mt-auto flex   w-full border-t-[1px] border-gray-300  xl:text-[16px] lg:text-[14px]">
        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-[10px] border-r-[1px] border-gray-300 w-full py-[20px] justify-center  hover:bg-gray-100 transition text-[#323232]"
        >
          <p>DOWNLOAD CV</p>
          <FaDownload />
        </a>
        <a
          href="tel:+94771234567"
          className="flex  items-center gap-[10px] w-full py-[20px] justify-center  hover:bg-gray-100 transition text-[#323232]"
        >
          <p className="">CONTACT ME</p>
          <IoCall />
        </a>
      </div>
    </div>
  );
}

export default ProfileContainer;
