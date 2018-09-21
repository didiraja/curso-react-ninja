import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick }) => (

    <button className="button" onClick={handleClick}>{children}</button>

)

Button.propTypes = {
    handleClick: PropTypes.func
}

export default Button