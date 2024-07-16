import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type TProperty = {
    title?: string;
    address?: string;
    location?: string;
    details?: string;
    price?: number;
    type?: string;
    additionals?: string[];
    bed?: number;
    pool?: boolean;
    garage?: boolean;
    wifi?: boolean;
    page?: number
    bath?: number;
    sqm?: number;
    image?: string[];
}
type TProperties = {
  properties?: TProperty[]
  loading?: boolean
  pages?: number
  currentPage?: number
}
const initialState: TProperties = {
  currentPage: 1
};
const PropertiesSlice = createSlice({
  name: "propertiesSlice",
  initialState,
  reducers: {
    loadProperties: (state, action: PayloadAction<TProperty[]>) => {
      state.properties = action.payload!;
      return state;
    },
    startLoading: state =>{
      state.loading = true
      return state
    },
    stopLoading: state =>{
      state.loading = false
      return state
    },
    

  },
});

export const { loadProperties, startLoading, stopLoading } = PropertiesSlice.actions;

export default PropertiesSlice.reducer;
