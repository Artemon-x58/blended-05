import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'API/getUserInfo';

export const fetchBaseCurrency = createAsyncThunk(
  'fetch/baseCurrency',
  async (coords, thunkAPI) => {
    const state = thunkAPI.getState();
    const baseCurrency = state.baseCurrency;

    if (baseCurrency) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await getUserInfo(coords);
      console.log(data);
      return data.results[0].annotations.currency.iso_code;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
