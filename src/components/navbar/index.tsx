import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { BsEnvelopePaper } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegMoon } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";

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
      path: "/contact",
      displayName: "CONTACT",
      icon: <BsEnvelopePaper className="text-[15px]" />,
    },
    {
      path: "/blog",
      displayName: "BLOG",
      icon: <LuNotebookText className="text-[15px]" />,
    },
  ];
  return (
    <div className=" flex  flex-col gap-[10px]">
      <div className="flex flex-col items-center bg-white gap-[20px] py-[20px] rounded-[4px]">
        <RxHamburgerMenu className="text-[20px]" />
        <FaRegMoon className="text-[20px]" />
      </div>
      <div className="bg-white  flex flex-col items-center gap-[20px] px-[10px] py-[40px] rounded-[4px]">
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
            <div className="flex flex-col gap-[10px] items-center">
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
