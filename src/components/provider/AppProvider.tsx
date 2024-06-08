"use client";
import React from "react";

import { Provider } from "react-redux";

import { store } from "@/store/store";
import { ThemeProvider } from "./ThemeProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
