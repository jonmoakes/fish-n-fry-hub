import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getAllUsersAsync } from "./get-all-users.thunks";

const INITIAL_STATE = {
  getAllUsersIsLoading: false,
  allUsers: [],
  getAllUsersError: null,
};

export const getAllUsersSlice = createSlice({
  name: "getAllUsers",
  initialState: INITIAL_STATE,
  reducers: {
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    resetGetAllUsersError(state) {
      state.getAllChildrenError = null;
    },
    resetGetAllUsersState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectGetAllUsersSelectors: createSelector(
      (state) => state.getAllUsersIsLoading,
      (state) => state.allUsers,
      (state) => state.getAllUsersError,
      (getAllUsersIsLoading, allUsers, getAllUsersError) => {
        const allUserWithFormattedCreatedAt = allUsers.map((user) => {
          return {
            ...user,
            createdAtAsDateObjectForSearching: new Date(user.createdAt),
          };
        });

        return {
          getAllUsersIsLoading,
          allUsers,
          allUserWithFormattedCreatedAt,
          getAllUsersError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.getAllUsersIsLoading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        state.getAllUsersIsLoading = false;
        state.allUsers = action.payload;
        state.getAllUsersError = null;
      })
      .addCase(getAllUsersAsync.rejected, (state, action) => {
        state.getAllUsersIsLoading = false;
        state.allUsers = [];
        state.getAllUsersError = action.payload;
      });
  },
});

export const { resetGetAllUsersError, resetGetAllUsersState, setAllUsers } =
  getAllUsersSlice.actions;
export const { selectGetAllUsersSelectors } = getAllUsersSlice.selectors;

export const getAllUsersReducer = getAllUsersSlice.reducer;
