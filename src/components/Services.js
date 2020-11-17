import React, { Component } from 'react'
import { FaTv, FaBiking, FaDog, FaCouch } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
      services: [
        {
          icon: <FaTv />,
          title: "Media Room",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
          icon: <FaBiking />,
          title: "Bike Parking",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
          icon: <FaDog />,
          title: "Pet Area",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        },
        {
          icon: <FaCouch />,
          title: "Lounge Area",
          info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        }
      ]
    };
    render() {
      return (
        <section className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map(item => {
              return (
                <article key={`item-${item.title}`} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </section>
      );
    }
  }
