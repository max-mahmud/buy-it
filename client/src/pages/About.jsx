import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title="Buy It - about">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="bg-dark p-2 text-white text-center">ABOUT US</h2>
          <p className="text-justify mt-2">
            <strong>BUY-IT</strong> is an online retailer that sells a wide
            variety of products, including clothing, electronics, home goods,
            and more. We offer a convenient and secure shopping experience, with
            fast shipping and friendly customer service.
          </p>
          <p className="text-justify mt-2">
            Our website is easy to use and navigate, with clear product
            descriptions and images. We also offer a variety of payment options,
            so you can shop with confidence.
          </p>
          <p className="text-justify mt-2">
            We are committed to providing our customers with the best possible
            shopping experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
