"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";

import { resetSession, setSession } from "@/store/session";
import { LoginBody, SessionHook, SignupBody } from "@/types/session";
import { useAppDispatch, useAppSelector } from "@/types/store";
import { Login } from "@/actions/login";
import { Signup } from "@/actions/register";

type SessionHookProps = ReturnType<SessionHook>;

const useSession: SessionHook = () => {
  const router = useRouter();

  const toast = useToast();

  const dispatch = useAppDispatch();

  const session = useAppSelector((state) => state.session);

  const login = useCallback<SessionHookProps["login"]>(
    async (body: LoginBody) => {
      const loginWithBody = Login.bind(null, { ...body });
      const resString = await loginWithBody();

      const { status, data } = JSON.parse(resString);
      if (status === 200) {
        toast({
          title: "Giriş Başarılı",
          status: "success",
          duration: 1500,
        });

        router.push("/");
      } else if (status === 404) {
        toast({
          title: "Böyle bir kullanıcı bulunamadı.",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      } else if (status === 403) {
        toast({
          title: "Şifre yanlış.",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      }
      if (status === 500) {
        toast({
          title: "Beklenmedik bir hata oluştu",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signup = useCallback<SessionHookProps["signup"]>(
    async (body: SignupBody) => {
      const signupWithBody = Signup.bind(null, { ...body });
      const resString = await signupWithBody();

      const { status, data } = JSON.parse(resString);
      if (status === 200) {
        toast({
          title: "Hesap başarıyla oluşturuldu.",
          status: "success",
          duration: 1500,
        });

        router.push("/");
      } else {
        toast({
          title: "Beklenmedik bir hata oluştu",
          status: "error",
          duration: 1500,
          isClosable: true,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signout = useCallback<SessionHookProps["signout"]>(() => {
    dispatch(resetSession());
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const init = useCallback<SessionHookProps["init"]>(() => {
    let jwt = Cookies.get("auth");

    if (jwt) {
      dispatch(
        setSession({
          user: {
            token: jwt,
          },
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { login, signup, session, signout, init };
};

export default useSession;
