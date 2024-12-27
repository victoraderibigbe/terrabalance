"use client";

import { MdExpandMore, MdExpandLess } from "react-icons/md";

const DropdownItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-2 rounded"
      >
        <span>{title}</span>
        {isOpen ? (
          <MdExpandLess className="text-2xl" />
        ) : (
          <MdExpandMore className="text-2xl" />
        )}
      </button>
      {isOpen && <div className="ml-4 mt-2">{children}</div>}
    </div>
  );
};

export default DropdownItem;
