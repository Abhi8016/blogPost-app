import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const stroe = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default stroe;
