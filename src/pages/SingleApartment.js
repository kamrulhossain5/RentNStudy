import React, { Component } from "react";
import defaultBcg from "../images/apartment-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";

export default class SingleApartment extends Component {
  state = {
    error: true,
    apartment: {},
    mainBcg: defaultBcg,
    images: []
  };
  componentDidMount() {
    // console.log(this.props);
    const apartment = JSON.parse(localStorage.getItem("single-apartment")) || [];
    const [mainBcg, ...images] = apartment.images ? apartment.images : [];;
    this.setState({ apartment, error: false, mainBcg, images });
  }
  render() {
    // console.log(this.state);

    const { mainBcg, error, images } = this.state;
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      laundry,
      pets
    } = this.state.apartment;
    console.log(this.state);

    if (error) {
      return (
        <div className="error">
          <h3> an error occurred...</h3>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            return home
          </button>
        </div>
      );
    }
    return (
      <>
        <StyledHero img={mainBcg}>
          <Banner title={`${name} apartment`}>
            <Link to="/apartments" className="btn-primary">
              back to apartments
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-apartment">
          <div className="single-apartment-images">
            {images.map((item, index) => (
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
              <h6>{laundry && "free laundry included"}</h6>
            </article>
          </div>
        </section>
        <section className="apartment-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras && extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
