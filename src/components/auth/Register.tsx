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

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        setLoading(true);
      },
      validationSchema: yup.object().shape({
        fullName: yup.string().required("Full name is required."),
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
        <h2 className="text-base font-bold">Sign in to your account</h2>
        <p className="text-xs">
          A member? 
          <Link href={"/auth/login"} className="text-primary !font-semibold">
            Login
          </Link>
        </p>
      </div>
      <div className="flex flex-col w-full gap-y-4">
        <Input
          type="text"
          name="fullName"
          value={values.fullName}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.fullName}
          errorText={errors.fullName}
          placeholder="Name and Surname"
          insidePlaceholder="Enter your name and surname"
        />
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
      <Button
        cx="!h-[40px]"
        type="submit"
        variant="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {!loading ? "Sign Up" : <Spinner color="white" className="w-4 h-4" />}
      </Button>
      <GoogleButton />
    </form>
  );
};
