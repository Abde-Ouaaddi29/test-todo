import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategorie, selectFilteredCategories, updateCategory } from "../redux/categoriesSlice";

export default function Categories() {
  const categories = useSelector(selectFilteredCategories);
  const dispatch = useDispatch();
  const [editCategoryInput, setEditCategoryInput] = useState("");
  const [categoryToEdit, setCategoryToEdit] = useState(null); // To hold the category being edited

  const handleUpdateCategory = (category) => {
    if (editCategoryInput.trim()) {
      dispatch(updateCategory({ oldCategory: category, newCategory: editCategoryInput }));
      setEditCategoryInput("");
      setCategoryToEdit(null);
    }
  };

  return (
    <div className="lg:p-10 p-2">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-800">
            <th className="text-gray-400 p-2 text-start border-r">Categories Product</th>
            <th className="text-gray-400 p-2 text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 border-r">
                  {categoryToEdit === category ? (
                    <div className="flex">
                      <input
                        type="text"
                        className="border border-black outline-green-700 rounded lg:p-2 p-1"
                        value={editCategoryInput}
                        onChange={(e) => setEditCategoryInput(e.target.value)}
                      />
                      <button onClick={() => handleUpdateCategory(category)} className="bg-green-600 hover:bg-green-700 p-2  text-sm  rounded text-white ml-2">
                        modifier
                      </button>
                    </div>
                  ) : (
                    category
                  )}
                </td>
                <td className="p-2">
                  {categoryToEdit === category ? (
                    <button onClick={() => setCategoryToEdit(null)} className="bg-gray-500 hover:bg-gray-600 transform transition-all duration-300 p-2 text-sm  text-white rounded">
                      annuler
                    </button>
                  ) : (
                    <>
                      <button onClick={() => {
                        setEditCategoryInput(category); // Pre-fill input with category name
                        setCategoryToEdit(category); // Set the category being edited
                      }} className="mr-2 bg-green-500 p-2 rounded hover:bg-green-600 transform transition-all duration-300">
                        <UpdateIcone />
                      </button>
                      <button onClick={() => dispatch(deleteCategorie(category))} className="bg-red-500 hover:bg-red-600 transform transition-all duration-300 p-2 text-white rounded">
                        <IoClose className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="p-2 text-center">No categories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export const UpdateIcone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  );
};
