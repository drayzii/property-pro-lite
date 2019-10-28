/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import { DEFAULT_IMAGE } from '../config';

class Property extends React.Component {
  render() {
    const { property } = this.props;
    const color = (property.status !== 'Available') ? 'red' : 'green';
    return (
      <div className="property">
        <div className="propertyimg">
          <img src={property.image_url || DEFAULT_IMAGE} height="200" width="200" alt="" />
        </div>
        <div className="propertydetails">
          <h3 className="propertytitle">
            <Link to="/">
              {property.type.toUpperCase()}
              {' '}
              in
              {' '}
              {property.city}
            </Link>
          </h3>
          <p>
            Status:
            <span style={{ color }} className="propertyaddress">
              {' '}
              {property.status}
            </span>
            <br />
            <span className="propertyaddress">
              Address:
              {' '}
              {property.address}
            </span>
            <br />
            <span className="propertyprice">
              $
              {' '}
              {property.price}
            </span>
            <br />
          </p>
          <div className="action">
            <Link to="/"><Button disabled={false} classes="button1" text="View" /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Property;
