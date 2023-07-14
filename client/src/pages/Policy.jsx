import React from "react";
import Layout from "../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title="Buy It - policy">
      {" "}
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="bg-dark p-2 text-white text-center">PRIVACY & POLICY</h2>
          <h4>Contact information:</h4>
          <p>name, email address, and phone number.</p>
          <h4>Payment information:</h4>
          <p>credit card number, expiration date, and billing address.</p>
          <h4>Device information:</h4>
          <p> IP address, and operating system</p>
          <h4>Usage information:</h4>
          <p>
            visit on our App, the products view or purchase, and your search
            history.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
