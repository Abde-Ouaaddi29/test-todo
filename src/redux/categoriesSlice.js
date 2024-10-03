import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  searchTerm: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);  
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;  
    },
    deleteCategorie: (state, action) => {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
    updateCategory: (state, action) => {
      const { oldCategory, newCategory } = action.payload;
      const categoryIndex = state.categories.findIndex((category) => category === oldCategory);
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = newCategory;
      }
    },
  },
});

export const { addCategory, setSearchTerm, deleteCategorie, updateCategory } = categoriesSlice.actions;

export const selectFilteredCategories = (state) => {
  const { categories, searchTerm } = state.categories;
  if (searchTerm) {
    return categories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    return categories;
  }
};

export default categoriesSlice.reducer;
