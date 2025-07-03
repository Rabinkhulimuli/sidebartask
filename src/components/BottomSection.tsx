import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import ProfileTag from './ProfileTag';
export default function BottomSection() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center  gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer dark:hover:bg-white dark:hover:text-black ">
        <span>
          <AiOutlineQuestionCircle className="w-5 h-5" />
        </span>
        <h2>Support</h2>
      </div>
      <div className="flex items-center gap-1 px-2 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer dark:hover:bg-white dark:hover:text-black">
        <span>
          <CiSettings className="w-5 h-5" />
        </span>
        <h2>Settings</h2>
      </div>
      <ProfileTag/>
    </div>
  )
}
