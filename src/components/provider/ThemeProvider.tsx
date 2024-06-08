"use client";
import React, { useEffect, useRef } from "react";

import Cookies from "js-cookie";
import { ChakraProvider } from "@chakra-ui/react";

import useSession from "@/hooks/useSession";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();

  const intervalRef = useRef<any>(null);

  useEffect(() => {
    session.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!Cookies.get("auth") && session.session?.user?.token) {
        session.signout();
      } else if (Cookies.get("auth") && !session?.session?.user?.token) {
        session.init();
      }
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session.session]);

  return <ChakraProvider>{children}</ChakraProvider>;
};
