import React from "react";
import { MdAdd } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border border-gray-300 px-3  my-2 py-2 rounded outline-none"
          placeholder="Add tags"
        />

        <button className="">
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
