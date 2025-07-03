const folders = [
  { label: "View all", count: 48 },
  { label: "Recent", count: 6 },
  { label: "Favourite", count: 4 },
  { label: "Shared", count: 22 },
  { label: "Archived", count: 14 },
];

export default function FolderSection() {
  return (
    <div className="flex flex-col gap-2 pl-4 w-full">
      {folders.map((folder, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-4 py-1 rounded-md transition-all duration-600 hover:bg-black hover:text-white w-full cursor-pointer ease-in-out dark:hover:bg-white dark:hover:text-black"
        >
          <p>{folder.label}</p>
          <p>({folder.count})</p>
        </div>
      ))}
    </div>
  );
}
