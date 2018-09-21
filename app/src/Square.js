import React from 'react';

const Square = ({ color }) => (
    <div style={{
        backgroundColor: color,
        width: '100px',
        height: '100px'
    }} />
)

Square.defaultProps = {
    color: 'purple'
}

export default Square