"use client";
import Image from "next/image";
import React from "react";
import HeaderStrip from "./HeaderStrip";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-8 pt-2 border-b lg:border-b-0 m-auto">
        <div className="flex items-center justify-center ">
          <div className="logo">
            <Image width={150} height={150} src={"/logo.avif"} />
          </div>
          <div className="search mt-2 ml-4 hidden lg:block">
            <Search />
          </div>
        </div>
        <div className="auth">Signin</div>
      </header>
      <div className="mt-4 mb-2 border-b hidden lg:block">
        <HeaderStrip />
      </div>
    </>
  );
};

export default Header;
