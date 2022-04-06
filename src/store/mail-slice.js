import { createSlice } from "@reduxjs/toolkit";

import mails from "./mails";

const initialMails = { mails: mails, length: mails.length };

const allMailsSlice = createSlice({
  name: "All-Mails",
  initialState: initialMails,
  reducers: {
    onDelete(state, index) {
      const updatedMails = state.mails.filter(
        (mail) => mail.id !== index.payload
      );
      const mailsLength = state.mails.length - 1;

      state.mails = updatedMails;
      state.length = mailsLength;
    },
    onStarred(state, index) {
      const updatesMails = state.mails.map((mail) => {
        if (mail.id === index.payload) {
          return { ...mail, starred: !mail.starred };
        } else {
          return { ...mail };
        }
      });

      state.mails = updatesMails;
    },
  },
});

export const allMailsActions = allMailsSlice.actions;

export default allMailsSlice.reducer;
