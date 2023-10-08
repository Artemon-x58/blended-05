import { fetchBaseCurrency } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});

export const currencySliceReducer = currencySlice.reducer;
export const { setBaseCurrency } = currencySlice.actions;
