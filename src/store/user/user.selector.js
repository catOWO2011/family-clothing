import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectCurrentUser = createDraftSafeSelector(
  (state) => state,
  (state) => state.user.currentUser
);
