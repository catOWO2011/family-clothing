import { createSelector } from "@reduxjs/toolkit";

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (category) =>
    category.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (category) => category.isLoading
);