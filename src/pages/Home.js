import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedApartments from "../components/FeaturedApartments";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="rentNStudy"
          subtitle="apartments starting at $299"
        >
          <Link to="/apartments" className="btn-primary">
            our apartments
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedApartments />
    </>
  );
};

export default home;