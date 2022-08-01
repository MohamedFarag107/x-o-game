import { configureStore } from "@reduxjs/toolkit";
import tictacSlice from "./tictacSlice";
const store = configureStore({ reducer: tictacSlice });

export default store;
