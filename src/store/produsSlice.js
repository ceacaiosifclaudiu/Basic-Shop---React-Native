import {createSlice} from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
  produs: products,
  produsSelectat: null,
};

export const produsSlice = createSlice({
  name: 'produs',
  initialState,
  reducers: {
    seteazaProdusSelectat: (state, action) => {
      const idProdus = action.payload;
      state.produsSelectat = state.produs.find(
        produs => produs.id === idProdus,
      );
    },
  },
});
