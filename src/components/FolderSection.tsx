export default function FolderSection() {
  return (
    <div className="flex flex-col gap-2 pl-4 w-full">
      <div className='flex items-center  py-1 justify-between  px-4 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black'>
        <p>View all</p>
        <p>(48)</p>
      </div>
      <div className='flex items-center justify-between py-1  px-4 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black'>
        <p>Recent</p>
        <p>(6)</p>
      </div>
      <div className='flex items-center justify-between py-1 px-4 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black'>
        <p>Favourite</p>
        <p>(4)</p>

      </div>
      <div className='flex items-center justify-between  px-4 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black'>
        <p>Shared</p>
        <p>(22)</p>
      </div>
      <div className='flex items-center justify-between  px-4 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black'>
        <p>Archived</p>
        <p>(14)</p>
      </div>
    </div>
  )
}
