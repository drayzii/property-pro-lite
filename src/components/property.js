/* eslint-disable react/no-deprecated */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { getProperty } from '../actions/property';
import Header from './header2';
import Footer from './footer2';
import { DEFAULT_IMAGE } from '../config';

class AllProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        OwnerName: 'Loading...',
        OwnerEmail: 'Loading...',
        OwnerPhoneNumber: 'Loading...',
        address: 'Loading...',
        city: 'Loading...',
        id: null,
        price: 'Loading...',
        state: 'Loading...',
        status: 'Loading...',
        type: 'Loading...',
        imageUrrl: 'Loading...',
      },
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) {
      const { history } = this.props;
      return history.push('/');
    }
    const { id } = this.props.match.params;
    return this.props.getProperty({ id });
  }

  componentWillReceiveProps(nextProps) {
    if (!localStorage.getItem('token')) {
      const { history } = this.props;
      history.push('/');
    }
    const { data } = nextProps.property;
    this.setState({ data });
  }

  render() {
    const {
      OwnerName,
      OwnerEmail,
      OwnerPhoneNumber,
      address,
      city,
      price,
      state,
      status,
      type,
      image_url,
    } = this.state.data;
    const color = (status !== 'Available') ? 'red' : 'green';
    return (
      <>
        <Header />
        <div className="contentwrapper">
          <section id="property">
            <h2 className="propertytitle">
              {type.toUpperCase()}
              {' '}
              in
              {' '}
              {city}
            </h2>
            <div className="propertyimg">
              <img src={image_url || DEFAULT_IMAGE} alt="" height="300" width="300" />
            </div>
            <div className="propertydetails">
              <p>
                <span className="propertyaddress">
                  State:
                  {' '}
                  {state}
                </span>
                <br />
                <span className="propertyaddress">
                  City:
                  {' '}
                  {city}
                </span>
                <br />
                <span className="propertyaddress">
                  Address:
                  {' '}
                  {address}
                </span>
                <br />
                <span className="propertyprice">
                  Price: $
                  {price}
                </span>
                <br />
                <span style={{ color }} className="propertystatus">
                  Status:
                  {' '}
                  <span className="available">{status}</span>
                </span>
                <br />
              </p>
            </div>
            <div className="propertyowner">
              <h3 className="ownertitle">Owner Details</h3>
              <p>
                <span className="owneremail">
                  Names:
                  {' '}
                  {OwnerName}
                </span>
                <br />
                <span className="owneremail">
                  Email:
                  {' '}
                  {OwnerEmail}
                </span>
                <br />
                <span className="ownerphone">
                  Phone:
                  {' '}
                  {OwnerPhoneNumber}
                </span>
                <br />
              </p>
            </div>
            <div className="action">
              <button type="button" className="button3">&#9872; Report</button>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ property }) => ({ property });

const mapDispatchToProps = (dispatch) => ({
  getProperty: (data) => dispatch(getProperty(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllProperties);
