import React from 'react';
import PropTypes from 'prop-types';

const RandomColor = ({ colors, onColorChange }) => {
    return (
        <>
        {colors[Math.floor(Math.random() * colors.length)]}
        </>
    );
};

RandomColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onColorChange: PropTypes.func.isRequired,
};

export default RandomColor;