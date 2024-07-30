import { createSelector, createSlice } from "@reduxjs/toolkit";
import { uploadMenuItemsToDatabaseAsync } from "./upload-menu-items-thunks";

const INITIAL_STATE = {
  uploadMenuItemsIsLoading: false,
  uploadMenuItemsError: null,
};

export const uploadMenuItemsSlice = createSlice({
  name: "uploadMenuItems",
  initialState: INITIAL_STATE,
  reducers: {
    resetUploadMenuItemsError(state) {
      state.uploadMenuItemsError = null;
    },
    resetUploadMenuItemsState: () => {
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadMenuItemsToDatabaseAsync.pending, (state) => {
        state.uploadMenuItemsIsLoading = true;
      })
      .addCase(uploadMenuItemsToDatabaseAsync.fulfilled, (state, action) => {
        state.uploadMenuItemsIsLoading = false;
        state.uploadMenuItemsError = null;
      })
      .addCase(uploadMenuItemsToDatabaseAsync.rejected, (state, action) => {
        state.uploadMenuItemsIsLoading = false;
        state.uploadMenuItemsError = action.payload;
      });
  },
  selectors: {
    selectUploadMenuItemsSelectors: createSelector(
      (state) => state.uploadMenuItemsIsLoading,
      (state) => state.uploadMenuItemsError,
      (uploadMenuItemsIsLoading, uploadMenuItemsError) => {
        return {
          uploadMenuItemsIsLoading,
          uploadMenuItemsError,
        };
      }
    ),
  },
});

export const { resetUploadMenuItemsError, resetUploadMenuItemsState } =
  uploadMenuItemsSlice.actions;
export const { selectUploadMenuItemsSelectors } =
  uploadMenuItemsSlice.selectors;

export const uploadMenuItemsReducer = uploadMenuItemsSlice.reducer;
