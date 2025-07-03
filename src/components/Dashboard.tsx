import { useEffect, useState } from "react";
import { BsFolder } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import SubSection from "./SubSection";
import FolderSection from "./FolderSection";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiBracketsRoundLight } from "react-icons/pi";
import { IoIosSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";

export default function Dashboard() {
  const [drawer, setDrawer] = useState(false);
  const [open, setOpen] = useState(false);
 const [darkMode,setDarkMode]=useState(false)
 useEffect(() => {
  if (!darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
  return (
    <div className={`relative  `}>
      
      {!open&&<FaArrowUpRightFromSquare
        className={`fixed top-2 left-2 cursor-pointer transition-all duration-500 delay-200 ease-in-out ${open ? "rotate-180 opacity-0" : "opacity-100"}`}
        onClick={() => setOpen(!open)}
      />}
      <div
        className={` fixed dark:bg-black dark:text-white sm:max-w-1/2 md:w-1/3 border-3 rounded-md border-gray-200 px-4 pb-2 flex flex-col font-semibold  justify-between items-start h-full w-full  ${
          drawer ? "gap-7" : "gap-32"
        } h-full transform transition-transform duratiion-700 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="h-full w-full ">
          <IoIosSunny onClick={()=> setDarkMode(!darkMode)}  className="w-5 h-5 float-right mt-1 ml-1 cursor-pointer dark:hidden" />
          <GoMoon onClick={()=> setDarkMode(!darkMode)}  className="w-5 h-5 float-right mt-1 ml-1 cursor-pointer hidden dark:block" />
          <FaArrowUpRightFromSquare
        className={`my-2 mx-1 cursor-pointer float-right ${open ? "rotate-180" : ""}`}
        onClick={() => setOpen(!open)}
      />
          <div className="flex  items-center dark:text-red-700">
            <PiBracketsRoundLight className="w-7 h-7 rotate-45 " />
            <h1 className="text-3xl font-bold my-4 px-2">United UI</h1>
          </div>
          <TopSection />
          <div className="my-2 w-full">
            <div className="flex justify-between items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 ease-in-out hover:bg-black hover:text-white w-full dark:hover:bg-white dark:hover:text-black">
              <div className="flex gap-2 items-center cursor-pointer ">
                <span>
                  <BsFolder className="w-5 h-5" />
                </span>
                <h2>Folders</h2>
              </div>
              <span>
                {drawer ?<FaMinus
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setDrawer((a) => !a)}
                />:
                <FaPlus
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setDrawer((a) => !a)}
                />}
              </span>
            </div>
            {drawer && <FolderSection />}
          </div>

          <SubSection />
        </div>
        <div className="h-full">
          <BottomSection />
        </div>
      </div>
    </div>
  );
}
