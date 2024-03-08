import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const appStore = configureStore({
    reducer:{
        count:countSlice
    }
});

export default appStore;