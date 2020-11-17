import React from "react";
import { withApartmentConsumer } from "../context";
import Loading from "./Loading";
import ApartmentsFilter from "./ApartmentsFilter";
import ApartmentsList from "./ApartmentsList";

function ApartmentContainer({ context }) {
  const { loading, setApartment, sortedApartments, apartments } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ApartmentsFilter apartments={apartments} />
      <ApartmentsList apartments={sortedApartments} setApartment={setApartment} />
    </>
  );
}

export default withApartmentConsumer(ApartmentContainer);