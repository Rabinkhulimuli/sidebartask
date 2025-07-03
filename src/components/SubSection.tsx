import { LiaFileSolid } from "react-icons/lia";
import { TbCircleDottedLetterI } from "react-icons/tb";
import { GoPeople } from "react-icons/go";

const subMenuItems = [
  { label: "All Files", icon: <LiaFileSolid className="w-5 h-5" /> },
  { label: "Team members", icon: <GoPeople className="w-5 h-5" /> },
  { label: "Appearance", icon: <TbCircleDottedLetterI className="w-5 h-5" /> },
];

export default function SubSection() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <hr className="border-gray-200 border-2" />
      {subMenuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer dark:hover:bg-white dark:hover:text-black"
        >
          <span>{item.icon}</span>
          <h2>{item.label}</h2>
        </div>
      ))}
    </div>
  );
}
