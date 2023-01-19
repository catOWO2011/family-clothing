import { createAction } from "@reduxjs/toolkit";

import { CATEGORY_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS);

export const fetchCategoriesFailed = createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED);