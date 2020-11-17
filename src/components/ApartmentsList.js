import React from "react";
import Apartment from "./Apartment";
const ApartmentsList = ({ apartments, setApartment }) => {
  if (apartments.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no apartments matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="apartmentslist">
      <div className="apartmentslist-center">
        {apartments.map(item => {
          return <Apartment key={item.id} apartment={item} setApartment={setApartment} />;
        })}
      </div>
    </section>
  );
};

export default ApartmentsList;