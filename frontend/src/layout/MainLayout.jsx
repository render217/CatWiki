import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";


export const MainLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto max-sm:px-3 px-5 min-h-screen">
        <div className="font-Montserrat">
          <Header />
               <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};
