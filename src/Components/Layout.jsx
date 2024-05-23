import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, cartCount }) => {
  return (
    <div>
      <header>
        <Header cartCount={cartCount} />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
