type Props = {
  name: string;
};

const PageNavHeader = ({ name }: Props) => {
  return (
    <div className="bg-white px-4 py-5 border-b border-[#DCE0E5] dark:bg-gray-900 dark:border-gray-800">
      <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-gray-200">
        <span className="text-sm text-[#7F8C9F] text-[12px] dark:text-gray-400">
          ← Back
        </span>
      </button>

      <h1 className="font-bold text-[#17171C] text-[24px] dark:text-white">
        {name}
      </h1>
    </div>
  );
};

export default PageNavHeader;
