import { configureStore } from "@reduxjs/toolkit";

import leftMenuActiveStatesReducer from "./leftmenu-active-states-slice";
import allMailsReducer from "./mail-slice";

const store = configureStore({
  reducer: { leftMenu: leftMenuActiveStatesReducer, allMails: allMailsReducer },
});

export default store;
