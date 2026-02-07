import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { BsEnvelopePaper } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";

function Navbar() {
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
      <div className="hidden  lg:flex lg:flex-col flex-row items-center bg-white gap-[20px] py-[20px] rounded-[4px]">
        <RxHamburgerMenu className="text-[20px]" />
        <FaRegMoon className="text-[20px]" />
      </div>
      <div className="bg-white  flex lg:flex-col flex-row items-center lg:gap-[20px] justify-around w-full  lg:px-[10px] lg:py-[40px] rounded-[4px]">
        {navList.map((listItem) => (
          <NavLink
            key={listItem.path}
            to={listItem.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold border-b-[1px] border-blue-300"
                : "border-b-[1px] border-gray-300"
            }
          >
            <div className="flex flex-col gap-[10px] items-center lg:py-0 py-[10px]">
              {listItem.icon}
              <p className="text-[14px]">{listItem.displayName}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
