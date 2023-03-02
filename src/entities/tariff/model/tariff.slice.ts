import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TariffItemType } from "@/entities/tariff/model/tariff.types";

const initialState: {
  currentTariff: TariffItemType | null;
} = {
  currentTariff: null,
};

export const tariffSlice = createSlice({
  name: "tariff",
  initialState,
  reducers: {
    setTariff: (state, { payload }: PayloadAction<TariffItemType>) => {
      state.currentTariff = payload;
    },
  },
});

export const { setTariff } = tariffSlice.actions;

export default tariffSlice.reducer;
