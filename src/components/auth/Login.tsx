"use client";
import React, { useState } from "react";
import Link from "next/link";

import { useFormik } from "formik";
import * as yup from "yup";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Spinner } from "@chakra-ui/react";
import { GoogleButton } from "../common/GoogleButton";
import useSession from "@/hooks/useSession";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const sessionManager = useSession();

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        setLoading(true);
        sessionManager
          .login({
            email: values?.email,
            password: values?.password,
          })
          .finally(() => {
            setLoading(false);
          });
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .email("Valid email required.")
          .required("Email is required."),
        password: yup.string().required("Password is required."),
      }),
    });

  return (
    <form className="p-6 bg-secondary rounded-xl flex flex-col w-2/3 gap-y-6">
      <div className="flex flex-col gap-y-4">
        <h2 className="text-base font-bold text-white">
          Sign in to your account
        </h2>
        <p className="text-xs text-white">
          Not a member? 
          <Link href={"/auth/register"} className="text-primary !font-semibold">
            Register
          </Link>
        </p>
      </div>
      <div className="flex flex-col w-full gap-y-4">
        <Input
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.email}
          errorText={errors.email}
          placeholder="Email"
          insidePlaceholder="Enter your email address"
        />
        <Input
          type={passwordVisible ? "text" : "password"}
          name="password"
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.password}
          errorText={errors.password}
          placeholder="Password"
          insidePlaceholder="Enter your password"
          endIcon={
            <div
              className="absolute cursor-pointer flex items-center justify-center top-[46px] right-[24px]"
              onClick={(e) => {
                e.stopPropagation();
                setPasswordVisible(!passwordVisible);
              }}
            >
              {passwordVisible ? (
                <IoEyeOutline className="text-white" />
              ) : (
                <IoEyeOffOutline className="text-white" />
              )}
            </div>
          }
        />
      </div>
      <div className="flex w-full justify-end">
        <p className="underline text-sm text-primary">Forgot password?</p>
      </div>
      <Button
        cx="!h-[40px]"
        type="submit"
        variant="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {!loading ? "Login" : <Spinner color="white" className="w-4 h-4" />}
      </Button>
      <GoogleButton />
    </form>
  );
};
