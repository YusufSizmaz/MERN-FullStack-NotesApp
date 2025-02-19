import React from "react";
import { getInitials } from "../../utilis/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-200">
        {getInitials("Yusuf Can Sızmaz ")}
      </div>

      <div>
        <p className="text-sm font-medium">Yusuf Sızmaz</p>
        <button
          className="text-sm text-slate-700 underline cursor-pointer "
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
