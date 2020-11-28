import React, { Component } from "react";
import items from "./data";
// import Client from "./Contentful";

const ApartmentContext = React.createContext();

export default class ApartmentProvider extends Component {
  state = {
    apartments: [],
    sortedApartments: [],
    featuredApartments: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    // this.getData();
    let apartments = this.formatData(items);
    let featuredApartments = apartments.filter(apartment => apartment.featured === true);
    //
    let maxPrice = Math.max(...apartments.map(item => item.price));
    let maxSize = Math.max(...apartments.map(item => item.size));
    this.setState({
      apartments,
      featuredApartments,
      sortedApartments: apartments,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let apartment = { ...item.fields, images, id };
      return apartment;
    });
    return tempItems;
  }
  getApartment = apartmentName => {
    let tempApartments = [...this.state.apartments];
    const apartment = tempApartments.find(apartment => apartment.apartmentName === apartmentName);
    return apartment;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterApartments
    );
  };
  filterApartments = () => {
    let {
      apartments,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempApartments = [...apartments];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempApartments = tempApartments.filter(apartment => apartment.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempApartments = tempApartments.filter(apartment => apartment.capacity >= capacity);
    }
    // filter by price
    tempApartments = tempApartments.filter(apartment => apartment.price <= price);
    //filter by size
    tempApartments = tempApartments.filter(
      apartment => apartment.size >= minSize && apartment.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempApartments = tempApartments.filter(apartment => apartment.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempApartments = tempApartments.filter(apartment => apartment.pets === true);
    }
    this.setState({
      sortedApartments: tempApartments
    });
  };
  render() {
    return (
      <ApartmentContext.Provider
        value={{
          ...this.state,
          getApartment: this.getApartment,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}
const ApartmentConsumer = ApartmentContext.Consumer;

export { ApartmentProvider, ApartmentConsumer, ApartmentContext };

export function withApartmentConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ApartmentConsumer>
        {value => <Component {...props} context={value} />}
      </ApartmentConsumer>
    );
  };
}