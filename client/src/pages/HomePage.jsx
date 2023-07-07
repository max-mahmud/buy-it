import React from "react";
import Layout from "./../components/layout/Layout";
import { useAuth } from "../context/hooks";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      home page
    </Layout>
  );
};

export default HomePage;
