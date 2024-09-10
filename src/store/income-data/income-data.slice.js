import { createSelector, createSlice } from "@reduxjs/toolkit";
import { requestIncomeDataAsync } from "./income-data.thunks";

const INITIAL_STATE = {
  incomeDataIsLoading: false,
  incomeData: null,
  incomeDataError: null,
};

const incomeDataSlice = createSlice({
  name: "incomeData",
  initialState: INITIAL_STATE,
  reducers: {
    resetIncomeData(state) {
      state.incomeData = null;
    },
    resetIncomeDataError(state) {
      state.incomeDataError = null;
    },
    resetIncomeDataState: () => {
      return INITIAL_STATE;
    },
  },
  selectors: {
    selectIncomeDataSelectors: createSelector(
      (state) => state.incomeDataIsLoading,
      (state) => state.incomeData,
      (state) => state.incomeDataError,
      (incomeDataIsLoading, incomeData, incomeDataError) => {
        const formattedIncomeData =
          incomeData &&
          incomeData.length &&
          incomeData.map((income) => {
            const createdDate = new Date(income.created * 1000);

            return {
              ...income,
              createdAtAsDateObjectForSearching: createdDate,
            };
          });

        let sortedIncomeData = null;
        if (formattedIncomeData && formattedIncomeData.length > 0) {
          sortedIncomeData = [...formattedIncomeData].sort((dataA, dataB) => {
            const createdA = dataA.created;
            const createdB = dataB.created;
            return createdB - createdA;
          });
        }

        return {
          incomeDataIsLoading,
          incomeData,
          sortedIncomeData,
          incomeDataError,
        };
      }
    ),
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestIncomeDataAsync.pending, (state) => {
        state.incomeDataIsLoading = true;
      })
      .addCase(requestIncomeDataAsync.fulfilled, (state, action) => {
        state.incomeDataIsLoading = false;
        state.incomeData = action.payload;
        state.incomeDataError = null;
      })
      .addCase(requestIncomeDataAsync.rejected, (state, action) => {
        state.incomeDataIsLoading = false;
        state.incomeData = null;
        state.incomeDataError = action.payload;
      });
  },
});

export const { resetIncomeData, resetIncomeDataError, resetIncomeDataState } =
  incomeDataSlice.actions;
export const { selectIncomeDataSelectors } = incomeDataSlice.selectors;

export const incomeDataReducer = incomeDataSlice.reducer;
