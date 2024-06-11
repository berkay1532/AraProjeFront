import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { User } from "@/types/session";

interface InitialState {
  user: null | User;
}

const initialState: InitialState = {
  user: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionToken(state, action: PayloadAction<string>) {
      if (state.user) {
        state.user.token = action.payload;
      }
      return state;
    },
    setSession(state, action: PayloadAction<InitialState>) {
      if (
        action.payload.user &&
        action.payload.user.token &&
        action.payload.user.role
      ) {
        Cookies.set("auth", action.payload.user.token, {
          domain: process.env.NEXT_PUBLIC_DOMAIN,
          sameSite: "lax",
          secure: true,
          expires: 1000 * 60 * 60 * 24 * 10,
        });

        state = action.payload;
      }

      return state;
    },
    setSessionData(
      state,
      action: PayloadAction<Record<string, Omit<any, "token">>>
    ) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
      return state;
    },
    resetSession(state) {
      state.user = null;
      Cookies.remove("auth", {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        sameSite: "lax",
        secure: true,
        expires: 1000 * 60 * 60 * 24 * 10,
      });

      return state;
    },
  },
});

export const { setSession, setSessionData, setSessionToken, resetSession } =
  sessionSlice.actions;

export default sessionSlice.reducer;
