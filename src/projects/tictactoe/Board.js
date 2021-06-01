import React from 'react';
import Square from './Square';
import TiCSS from './Game.module.css'



const Board = ({ squares, onClick }) => (
    <div className={TiCSS.boardstyle}>
        {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
))}
    </div>
)

export default Board;