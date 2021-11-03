import React, {useState} from 'react'
import { calculateWinner } from '../helpers';
import Board from './Board'; 


const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        //if user clicks on a square that is already filled or if game is won, do nothing
        if (winner || boardCopy[i]) return; 

        //put x or o in clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy); 
        setXIsNext(!xIsNext);
    }

    const jumpTo = () => { 

    }

    const renderMoves = () => {
    
    }

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            
        </>
    )
}

export default Game
