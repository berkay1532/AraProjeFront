"use client";
import Image from "next/image";
import Logo from "@/assets/topbar/logo.svg";
import React, { useState } from "react";
import { Input } from "../common/Input";
import { FiSearch } from "react-icons/fi";
import Person from "@/assets/common/person.svg";
import useSession from "@/hooks/useSession";
import Link from "next/link";

const Topbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const { session } = useSession();

  return (
    <div className="w-full container py-2.5 flex justify-between items-center mx-auto">
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" width={64} height={64} />
      </Link>
      <Input
        classNames={{
          wrapper: "!w-[400px]",
        }}
        insidePlaceholder="Search"
        value={searchValue}
        handleChange={(e) => {
          setSearchValue(e.target.value);
        }}
        name="search"
        endIcon={
          <FiSearch className="text-white absolute right-3 top-[24px]" />
        }
      />
      <button>
        {!!session?.user?.token ? (
          <Link href={"/profile"}>
            <Image src={Person} alt="Profile" width={64} height={64} />
          </Link>
        ) : (
          <Link href={"/auth/login"} className="text-white text-xl">
            Giriş Yap / Üye Ol
          </Link>
        )}
      </button>
    </div>
  );
};

export default Topbar;
