import { PiClockClockwise } from "react-icons/pi";
import { RiHome3Line } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";

const menuItems = [
  { label: "Home", icon: <RiHome3Line className="w-5 h-5" /> },
  { label: "My store", icon: <CgShoppingBag className="w-5 h-5" /> },
  { label: "My projects", icon: <IoCubeOutline className="w-5 h-5" /> },
  { label: "Schedule", icon: <PiClockClockwise className="w-5 h-5" /> },
];

export default function TopSection() {
  return (
    <div className="flex flex-col gap-2 w-full">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black"
        >
          <span>{item.icon}</span>
          <h2>{item.label}</h2>
        </div>
      ))}
      <hr className="border-gray-200 border-2" />
    </div>
  );
}
