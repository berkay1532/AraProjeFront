"use server";

import dbService from "@/service";
import { SignupBody } from "@/types/session";

type SignupFunction = (_: SignupBody) => Promise<string>;

const Signup: SignupFunction = async function (params) {
  try {
    const res = await dbService.post("/signup", {
      fullName: params.fullName,
      email: params.email,
      password: params.password,
    });

    return JSON.stringify({ data: res.data, status: res.status });
  } catch (err) {
    throw err;
  }
};

export { Signup };
