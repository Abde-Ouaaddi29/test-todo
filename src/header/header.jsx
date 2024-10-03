import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory, setSearchTerm } from "../redux/categoriesSlice";

export default function Header() {
  const [categoryInput, setCategoryInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
//   const [update, setUpdate] = useState("");
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    if (categoryInput.trim()) {
      dispatch(addCategory(categoryInput));
      setCategoryInput(""); // Clear input after adding
    }
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchInput));
  };

  return (
    <div className="lg:p-10 p-5">
      <div className="flex justify-end mb-4">
        <button className="bg-amber-900 py-2 px-4 rounded text-white hover:scale-105 hover:bg-amber-700 transition-all">
          Retour
        </button>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex justify-between">
          <input
            placeholder="Typing..."
            className="border border-black outline-green-700 rounded p-2 w-8/12 mr-2"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-green-800 mr-2 text-white rounded lg:py-2 lg:px-6 p-2 tracking-wide font-light hover:bg-green-400 hover:translate-y-0.5 transform transition-all duration-300"
          >
            Rechercher
          </button>
          <button className="bg-green-800 text-white rounded lg:py-2 lg:px-6 p-2 tracking-wide font-light hover:bg-green-400 hover:translate-y-0.5 transform transition-all duration-300">
            Annuler
          </button>
        </div>

        <div className="flex justify-between">
          <input
            placeholder="Add new category"
            className="border border-black outline-green-700 rounded p-2 w-8/12 mr-2 "
            type="text"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          />
          <button
            onClick={handleAddCategory}
            className="bg-green-800 mr-2 text-white rounded lg:py-2 lg:px-6 p-2 tracking-wide font-light hover:bg-green-400 hover:translate-y-0.5 transform transition-all duration-300"
          >
            Enregistrer
          </button>
          <button className="bg-green-800 text-white rounded lg:py-2 lg:px-6 p-2 tracking-wide font-light hover:bg-green-400 hover:translate-y-0.5 transform transition-all duration-300">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
