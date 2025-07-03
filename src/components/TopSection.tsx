import React from "react";

import { PiClockClockwise } from "react-icons/pi";
import { RiHome3Line } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
export default function TopSection() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black ">
        <span>
          <RiHome3Line className="w-5 h-5" />
        </span>
        <h2>Home</h2>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black">
        <span>
          <CgShoppingBag className="w-5 h-5" />
        </span>
        <h2>My store</h2>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black">
        <span>
          <IoCubeOutline className="w-5 h-5" />
        </span>
        <h2>My projects</h2>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black">
        <span>
          <PiClockClockwise className="w-5 h-5" />
        </span>
        <h2>Schedule</h2>
      </div>
      <hr className="border-gray-200 border-2 "/>
    </div>
  );
}
