import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterSearchState, CharacterSearchResults } from "../../../models";

const initialState: CharacterSearchState = {
  page: 0,
  info: {
    pages: 0,
    count: 0
  },
  results: [],
  details: {},
  loadingId: 0
};

export default createSlice({
  name: "characterSearch",
  initialState,
  reducers: {
    updateCharacterResults: (state, action: PayloadAction<CharacterSearchState>) => {
      state.results = action.payload.results;
      state.info = action.payload.info;
    },
    updateDetails: (state, action: PayloadAction<any>) => {
      state.details = action.payload;
      state.loadingId = 0;
    },
    setLoading: (state, action: PayloadAction<any>) => {
      state.loadingId = action.payload;
    }
  }
});
