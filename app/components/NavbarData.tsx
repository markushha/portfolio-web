import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome size={25} />,
    cName: "nav-title",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiIcons.AiFillProject size={25} />,
    cName: "nav-title",
  },
  {
    title: "Socials",
    path: "/socials",
    icon: <IoIcons.IoShareSocialSharp size={25} />,
    cName: "nav-title",
  }
]