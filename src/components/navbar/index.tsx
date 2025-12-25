import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaRegRectangleList } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { BsEnvelopePaper } from "react-icons/bs";

function Navbar() {
  interface NavItem {
    path: string;
    displayName: string;
    icon: React.ReactNode;
  }

  const navList: NavItem[] = [
    { path: "/", displayName: "ABOUT", icon: <CiUser /> },
    { path: "/resume", displayName: "RESUME", icon: <FaRegRectangleList /> },
    { path: "/projects", displayName: "PROJECTS", icon: <GrWorkshop /> },
    { path: "/contact", displayName: "CONTACT", icon: <BsEnvelopePaper /> },
  ];
  return (
    <div className="w-[100px] bg-amber-300 h-[500px]">
      <div className="flex flex-col justify-between">
        {navList.map((listItem) => (
          <NavLink
            to={listItem.path}
            className={({ isActive }) => (isActive ? "bg-red-300" : "")}
          >
            <div>
              {listItem.icon}
              <p>{listItem.displayName}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
