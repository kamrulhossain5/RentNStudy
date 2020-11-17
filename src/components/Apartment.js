import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { memo } from "react";
const Apartment = memo(({ apartment, setApartment }) => {
  const { name, apartmentName, images, price } = apartment;
  // console.log(name);
  return (
    <article className="apartment">
      <div className="img-container">
        <img src={images[0]} alt="single apartment" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per month</p>
        </div>
        <Link
          to={`/apartments/${apartmentName}`}
          className="btn-primary apartment-link"
          onClick={() => setApartment(apartmentName)}
        >
          features
        </Link>
      </div>
      <p className="apartment-info">{name}</p>
    </article>
  );
});

Apartment.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    apartmentName: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  }),
  setApartment: PropTypes.func.isRequired
};
export default Apartment;