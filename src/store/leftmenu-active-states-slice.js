import { createSlice } from "@reduxjs/toolkit";

const initialleftmenuActiveStates = {
  isMailActive: false,
  isChatActive: false,
  isSpacesActive: false,
  isMeetActive: false,
};

const leftMenuActiveStatesSlices = createSlice({
  name: "Left-Menu-Active-States",
  initialState: initialleftmenuActiveStates,
  reducers: {
    onMailClick(state) {
      state.isMailActive = !state.isMailActive;
      state.isChatActive = false;
      state.isSpacesActive = false;
      state.isMeetActive = false;
    },
    onChatClick(state) {
      state.isMailActive = false;
      state.isChatActive = !state.isChatActive;
      state.isSpacesActive = false;
      state.isMeetActive = false;
    },
    onSpacesClick(state) {

      // console.log(`Spaces values was ${!state.}`)
      state.isMailActive = false;
      state.isChatActive = false;
      state.isSpacesActive = !state.isSpacesActive;
      state.isMeetActive = false;
    },
    onMeetClick(state) {
      state.isMailActive = false;
      state.isChatActive = false;
      state.isSpacesActive = false;
      state.isMeetActive = !state.isMeetActive;
    },
  },
});

export const leftMenuActiveStateActions = leftMenuActiveStatesSlices.actions;

export default leftMenuActiveStatesSlices.reducer;
