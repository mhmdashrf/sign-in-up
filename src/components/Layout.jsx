import React from "react";
import Header from "./Header/header";
import Footer from "./footer";

const Layout = ({ children, title }) => {
  return (
    <div className="container">
      <Header />
      <main>{title}</main>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
