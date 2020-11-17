import React, { Component } from "react";
import Title from "./Title";
import { ApartmentContext } from "../context";
import Apartment from "./Apartment";
import Loading from "./Loading";
export default class FeaturedApartments extends Component {
  
  static contextType = ApartmentContext;
  render() {
    let { loading, featuredApartments: apartments, setApartment } = this.context;

    apartments = apartments.map(apartment => {
      return <Apartment key={apartment.id} apartment={apartment} setApartment={setApartment} />;
    });
    return (
      <section className="featured-apartments">
        <Title title="featured apartments" />
        <div className="featured-apartments-center">
          {loading ? <Loading /> : apartments}
        </div>
      </section>
    );
  }
}