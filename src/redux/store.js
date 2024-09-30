import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slice/noteSlice";

const noteStore = configureStore({
    reducer: {
        noteReducer: noteSlice
    }
})

export default noteStore