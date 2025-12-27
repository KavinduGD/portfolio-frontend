import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

function ProfileContainer() {
  return (
    <div className="w-[420px] h-[750px] bg-[#faf9f9] ml-[10px] overflow-hidden rounded-[4px] flex flex-col items-center ">
      {/* Image with triangle cut */}
      <div
        className="w-full h-[450px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('src/assets/profile-pic.png')",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      />

      {/* Content below image */}
      <div className="mt-[30px] text-center">
        <h2 className="text-[26px] font-bold">Kavindu Gihan Dharmasiri</h2>
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
      </div>

      <div className="mt-auto flex   w-full border-t-[1px] border-gray-300  ">
        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-[10px] border-r-[1px] border-gray-300 w-full py-[20px] justify-center cursor-pointer hover:bg-gray-100 transition"
        >
          <p>DOWNLOAD CV</p>
          <FaDownload />
        </a>
        <a
          href="tel:+94771234567"
          className="flex  items-center gap-[10px] w-full py-[20px] justify-center cursor-pointer hover:bg-gray-100 transition"
        >
          <p>CONTACT ME</p>
          <IoCall />
        </a>
      </div>
    </div>
  );
}

export default ProfileContainer;
