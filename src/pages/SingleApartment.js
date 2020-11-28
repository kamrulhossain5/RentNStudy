import React, { Component } from "react";
import defaultBcg from "../images/apartment-1.jpeg";

import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ApartmentContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleApartment extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      apartmentName: this.props.match.params.apartmentName,
      defaultBcg: defaultBcg
    };
  }
  static contextType = ApartmentContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getApartment } = this.context;
    const apartment = getApartment(this.state.apartmentName);

    if (!apartment) {
      return (
        <div className="error">
          <h3> no such apartment could be found...</h3>
          <Link to="/apartments" className="btn-primary">
            back to apartments
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = apartment;
    const [...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} apartment`}>
            <Link to="/apartments" className="btn-primary">
              back to apartments
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-apartment">
          <div className="single-apartment-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-apartment-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="apartment-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}