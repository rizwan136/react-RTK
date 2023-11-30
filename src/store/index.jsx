import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./silces/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice
  }
});
export default store;
