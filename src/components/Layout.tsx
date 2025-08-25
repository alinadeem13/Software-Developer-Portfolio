import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "../../src/index.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
