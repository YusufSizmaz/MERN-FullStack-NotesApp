import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import axiosInstance from "../../utilis/axiosInstance";

const Navbar = ({ userInfo, setAllNotes }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      try {
        const response = await axiosInstance.get(
          `/api/notes/search?query=${query}`
        );
        if (response.data && response.data.notes) {
          setAllNotes(response.data.notes);
        }
      } catch (error) {
        console.error("Error searching notes:", error);
      }
    } else {
      const response = await axiosInstance.get("/api/notes");
      if (response.data && response.data.notes) {
        setAllNotes(response.data.notes);
      }
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    const getAllNotes = async () => {
      try {
        const response = await axiosInstance.get("/api/notes");
        if (response.data && response.data.notes) {
          setAllNotes(response.data.notes);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    getAllNotes();
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
