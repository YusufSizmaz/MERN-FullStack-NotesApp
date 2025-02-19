import React from "react";
import TagInput from "../../components/input/TagInput";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label text-xs text-slate-400">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go To Gym At 5"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label text-slate-400 ">Content</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
        />
      </div>
      <div className="mt-3">
        <label className="input-label text-slate-400">TAGS</label>
        <TagInput />
      </div>
      <button
        className="bg-blue-500 text-zinc-100 font-medium p-3 rounded-md shadow-md w-full hover:bg-blue-600 transition"
        onClick={() => {}}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
