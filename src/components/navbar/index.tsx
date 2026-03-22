import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { BsEnvelopePaper } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();

  interface NavItem {
    path: string;
    displayName: string;
    icon: React.ReactNode;
  }

  const navList: NavItem[] = [
    {
      path: "/",
      displayName: "ABOUT",
      icon: <FaRegUser className="text-[15px] font-" />,
    },
    {
      path: "/resume",
      displayName: "RESUME",
      icon: <FaRegRectangleList className="text-[15px]" />,
    },
    {
      path: "/projects",
      displayName: "PROJECTS",
      icon: <GrWorkshop className="text-[15px]" />,
    },
    {
      path: "/certificates",
      displayName: "Certs",
      icon: <GrCertificate className="text-[16px]" />,
    },
    {
      path: "/contact",
      displayName: "CONTACT",
      icon: <BsEnvelopePaper className="text-[15px]" />,
    },
  ];
  return (
    <div className=" flex  lg:flex-col  flex:row gap-[10px] lg:w-auto w-full">
      <div className="hidden lg:flex lg:flex-col flex-row items-center bg-white dark:bg-slate-800 dark:text-gray-200 gap-[20px] py-[20px] rounded-[4px]">
        <RxHamburgerMenu 
          className="text-[20px] cursor-pointer hover:text-blue-500 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        />
        {theme === 'dark' ? (
          <FaSun className="text-[20px] cursor-pointer hover:text-blue-400 transition-colors" onClick={toggleTheme} />
        ) : (
          <FaRegMoon className="text-[20px] cursor-pointer hover:text-blue-500 transition-colors" onClick={toggleTheme} />
        )}
      </div>
      <div className="bg-white dark:bg-slate-800 dark:text-gray-200 flex lg:flex-col flex-row items-center lg:gap-[20px] justify-around w-full lg:px-[10px] lg:py-[40px] rounded-[4px] transition-all duration-300">
        {navList.map((listItem) => (
          <NavLink
            key={listItem.path}
            to={listItem.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 dark:text-blue-400 font-bold border-b-[2px] border-blue-400 lg:w-full flex justify-center pb-2 lg:pb-0"
                : "border-b-[2px] border-transparent hover:border-gray-300 dark:hover:border-gray-600 lg:w-full flex justify-center pb-2 lg:pb-0 text-gray-700 dark:text-gray-300 transition-colors"
            }
          >
            <div className="flex flex-col gap-[10px] items-center lg:py-0 py-[10px]">
              {listItem.icon}
              <p className={`text-[14px] transition-all duration-300 ${!isOpen ? 'lg:hidden' : 'block'}`}>{listItem.displayName}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
