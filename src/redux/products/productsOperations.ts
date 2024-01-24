import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {BASE_URL} from '@env';

const baseUrl = BASE_URL;

export const getProducts = createAsyncThunk<
  TProductsArr,
  void,
  {
    rejectValue: string;
  }
>('products/getProductsAll', async (_, {rejectWithValue}) => {
  try {
    const res = await axios.get(`${baseUrl}products`);
    return res.data.data.result;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
