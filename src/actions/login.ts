"use server";

import dbService from "@/service";
import { LoginBody } from "@/types/session";

type LoginFunction = (_: LoginBody) => Promise<string>;

const Login: LoginFunction = async function (params) {
  try {
    const res = await dbService.post("/login", {
      email: params.email,
      password: params.password,
    });

    return JSON.stringify({ data: res.data, status: res.status });
  } catch (err) {
    throw err;
  }
};

export { Login };
