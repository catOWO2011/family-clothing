import { createAction } from "@reduxjs/toolkit";

import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES);
