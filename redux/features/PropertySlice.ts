import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TProperty = {
    title?: string;
    address?: string;
    location?: string;
    details?: string;
    price?: number;
    type?: string;
    additionalConveniences?: string[];
    bed?: number;
    pool?: boolean;
    garage?: boolean;
    wifi?: boolean;
    bath?: number;
    sqm?: number;
    image?: string[];
};

const initialState: TProperty = {};

const PropertySlice = createSlice({
  name: "propertySlice",
  initialState,
  reducers: {
    loadProperty: (state, action: PayloadAction<TProperty>) => {
      state = action.payload!;
      return state;
    },
  },
});

export const { loadProperty } = PropertySlice.actions;

export default PropertySlice.reducer;
