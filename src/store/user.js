import { createSlice } from "@reduxjs/toolkit";

const init = {
  account: {
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    logoutAccount: (state) => {
      state.account = {
        ...init.account,
      };
    },
    loginAccount: (state, action) => {
      const newState = action.payload;
      console.log(action);
      state.account = {
        email: newState.email,
      };
    },
  },
});

export const { loginAccount, logoutAccount } = userSlice.actions;

export const selectUser = (state) => state.user.account;

export default userSlice.reducer;
