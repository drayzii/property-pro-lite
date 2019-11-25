/* eslint-disable react/prop-types */
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
  const {
    classes, disabled, text, text2,
  } = props;
  if (disabled) {
    return (
      <button disabled type="button">
        {text2}
        <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faSpinner} spin />
      </button>
    );
  }
  return (
    <button type="submit" className={classes}>{text}</button>
  );
};

export default Button;
