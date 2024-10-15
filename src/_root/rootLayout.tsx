import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Outlet />
    </div>
  );
};

export default RootLayout;
