import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NotifyState {
  isNotify: boolean;
  typeNotify: 'success' | 'info' | 'warning' | 'error';
  titleNotify: String,
  messageNotify: String
}

interface NotifyAction {
  typeNotify: 'success' | 'info' | 'warning' | 'error';
  titleNotify: String;
  messageNotify: String
}

const initialState: NotifyState = {
  isNotify: false,
  typeNotify: 'success',
  titleNotify : "",
  messageNotify: ""
};

const NotifySlice = createSlice({
  name: 'Notify',
  initialState,
  reducers: {
    setNotify(state, action: PayloadAction<NotifyAction>) {
      state.isNotify = true;
      state.typeNotify = action.payload.typeNotify;
      state.titleNotify = action.payload.titleNotify;
      state.messageNotify = action.payload.messageNotify;
    },
    unsetNotify(state, action) {
      state.isNotify = false;
      state.typeNotify = 'success';
      state.titleNotify = "";
      state.messageNotify = ""
    },
  },
});

export const { setNotify, unsetNotify } = NotifySlice.actions;

export default NotifySlice.reducer;
