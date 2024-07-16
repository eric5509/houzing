import { configureStore } from "@reduxjs/toolkit";
import PropertySlice from "../features/PropertySlice";
import FilterSlice from "../features/FilterSlice";
import PropertiesSlice from "../features/PropertiesSlice";


export const store = configureStore({
    reducer: {
        property: PropertySlice,
        filter: FilterSlice,
        properties: PropertiesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;