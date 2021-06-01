import React, {useState} from 'react';
import {calculateWinner} from './helper'
import Board from './Board';
import TiCSS from './Game.module.css'

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    
    const jumpTo = () => {
        
    }
    
    const renderMoves = () => {
        return( 
          <body>
        <div className={TiCSS.btndiv}>
            <button onClick={() => setBoard(Array(9).fill(null))} className={TiCSS.btn}> Start Game </button>
        </div>
            </body>
        )
    }
    
    return (

        <>
        
        
        <Board squares={board} onClick={handleClick} />
        <div style={styles}>
    <p className={TiCSS.nextmove}>
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
    {renderMoves()}
  </div>
  
        </>

    )
}

export default Game;