import { Upload, ChevronDown, FileText, File } from "lucide-react";

type ExportDropdownProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const ExportDropdown = ({ isOpen, onToggle }: ExportDropdownProps) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="bg-primary-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
    >
      <Upload size={18} />
      <span className="hidden sm:inline">Export</span>
      <ChevronDown
        size={16}
        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>

    {isOpen && (
      <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 dark:bg-gray-800 dark:border-gray-700">
        <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors dark:hover:bg-gray-700">
          <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center dark:bg-red-900/20">
            <FileText size={16} className="text-red-600 dark:text-red-400" />
          </div>
          <span className="text-gray-700 font-medium dark:text-gray-200">
            Export as PDF
          </span>
        </button>
        <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors dark:hover:bg-gray-700">
          <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center dark:bg-green-900/20">
            <FileText
              size={16}
              className="text-green-600 dark:text-green-400"
            />
          </div>
          <span className="text-gray-700 font-medium dark:text-gray-200">
            Export as Excel
          </span>
        </button>
        <button className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors dark:hover:bg-gray-700">
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center dark:bg-gray-700">
            <File size={16} className="text-gray-600 dark:text-gray-300" />
          </div>
          <span className="text-gray-700 font-medium dark:text-gray-200">
            Export as CSV
          </span>
        </button>
      </div>
    )}
  </div>
);
