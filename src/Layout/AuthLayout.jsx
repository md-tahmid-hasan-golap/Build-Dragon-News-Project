import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="max-w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
