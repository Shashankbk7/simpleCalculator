import { createSlice, PayloadAction,configureStore } from "@reduxjs/toolkit";

interface DataState {
    isDarkMode: boolean;
    historyData: String;
}

const initialState: DataState = {
    isDarkMode: true,
    historyData: "History Data"
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
            console.log("isDarkMode: " + state.isDarkMode);
        },

        setHistoryData: (state, action: PayloadAction<String>) => {
            state.historyData = action.payload;
    }
}
});

const store = configureStore({
    reducer: {
        dataSlice: dataSlice.reducer,
    }
})

export const Actions = dataSlice.actions;
export default store;

