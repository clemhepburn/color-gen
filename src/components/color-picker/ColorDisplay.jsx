import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor }) => {
  return (
    <img src='src/bubble.png'
    style={{
        backgroundColor,
        margin: '0',
        padding: '0',
    }} />
  );
};

ColorDisplay.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
};

export default ColorDisplay;