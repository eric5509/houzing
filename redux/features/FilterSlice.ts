import { createSlice } from "@reduxjs/toolkit";

type TFilter = {
    type?: string;
    title?: string;
    location?: string;
    max?: number;
    min?: number;
    bed?: number;
    bath?: number;
    pool?: boolean;
    garage?: boolean;
    wifi?: boolean;
}

const initialState: TFilter = {}

const FilterSlice = createSlice({
    name:'filterSlice',
    initialState,
    reducers: ({
        loadTitle: (state, action) => {
             state.title = action.payload
             return state
        },
        loadLocation: (state, action) => {
             state.location = action.payload
            return state
        },
        loadType: (state, action) => {
            state.type = action.payload
            return state
        },
        loadBed: (state, action) => {
             state.bed = state.bed === action.payload ? 0 : action.payload
             return state
        },
        loadBath: (state, action) => {
            state.bath = action.payload
            return state
        },
        loadPool: (state, action) => {
            state.pool = action.payload
            return state
        },
        loadGarage: (state, action) => {
            state.garage = action.payload
            return state
        },
        loadWifi: (state, action) => {
            state.wifi = action.payload
            return state
        },
        loadMax: (state, action) => {
            state.max = action.payload
            return state
        },
        loadMin: (state, action) => {
            state.min = action.payload
            return state
        },
       
    })
})
export const {loadBath,loadBed,loadGarage,loadLocation, loadMax, loadMin, loadPool, loadTitle, loadType, loadWifi } = FilterSlice.actions
export default FilterSlice.reducer
