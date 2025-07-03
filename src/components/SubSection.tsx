import React from "react";

import { LiaFileSolid } from "react-icons/lia";
import { TbCircleDottedLetterI } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
export default function SubSection() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <hr className="border-gray-200 border-2 " />
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer dark:hover:bg-white dark:hover:text-black">
        <span>
          <LiaFileSolid className="w-5 h-5" />
        </span>
        <h2>All Files</h2>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer dark:hover:bg-white dark:hover:text-black">
        <span>
          <GoPeople className="w-5 h-5" />
        </span>
        <h2>Team members</h2>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer dark:hover:bg-white dark:hover:text-black">
        <span>
          <TbCircleDottedLetterI className="w-5 h-5" />
        </span>
        <h2>Appearance</h2>
      </div>
    </div>
  );
}
