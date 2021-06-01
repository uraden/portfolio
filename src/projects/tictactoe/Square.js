import React from 'react';
import TiCSS from './Game.module.css'

const Square = ({ value, onClick }) => (

    <button onClick={onClick} className={TiCSS.squareStyle}>
        {value}
    </button>
);

export default Square;