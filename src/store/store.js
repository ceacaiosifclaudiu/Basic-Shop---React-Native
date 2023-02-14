import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from './cartSlice';
import {produsSlice} from './produsSlice';

export default configureStore({
  reducer: {
    produs: produsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
