import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>{/* Header content goes here */}</header>
      <main>{children}</main>
      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default Layout;
