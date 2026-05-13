
import { configureStore } from "@reduxjs/toolkit";
import apartmentReducer from '../features/apartment/apartmentSlice';

export const store = configureStore({
  reducer: {
    apartment: apartmentReducer,
  },
});