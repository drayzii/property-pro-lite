/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { getProperties } from '../actions/properties';
import Header from './header2';
import Footer from './footer2';
import Property from './propertyComponent';

class AllProperties extends React.Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const { properties } = this.props.properties;
    let data;
    if (properties.length === 0) {
      data = <h3>No Properties Available</h3>;
    }
    data = properties.map((property) => (<Property key={property.id} property={property} />));
    return (
      <>
        <Header />
        <div className="contentwrapper">
          <h2>All Properties</h2>
          <section id="properties">
            {data}
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({ properties: state.properties });

const mapDispatchToProps = (dispatch) => ({
  getProperties: () => dispatch(getProperties()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProperties);
