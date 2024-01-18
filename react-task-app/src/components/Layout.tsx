import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow  p-32 pt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
