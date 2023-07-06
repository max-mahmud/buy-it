import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title = "Buy it -shop now" }) => {
  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
