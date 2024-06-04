import React, { useState } from 'react';
import './game.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const { winner, winningLine } = calculateWinner(board);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], winningLine: lines[i] };
            }
        }
        return { winner: null, winningLine: [] };
    }

    const handleClick = (i) => {
        const boardCopy = [...board];
        // If user clicks an occupied square or if game is won, return
        if (winner || boardCopy[i]) return;
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const Board = ({ squares, onClick }) => (
        <div className='board'>
            {squares.map((square, i) => (
                <Square
                    key={i}
                    value={square}
                    onClick={() => onClick(i)}
                    isWinningSquare={winningLine.includes(i)}
                />
            ))}
        </div>
    );

    const Square = ({ value, onClick, isWinningSquare }) => (
        <button className={`square ${isWinningSquare ? 'winning' : ''}`} onClick={onClick}>
            {value}
        </button>
    );

    return (
        <div className='game'>
            <h1>Tic Tac Toe</h1>
            <div className='game-info'>
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>
            </div>
            <Board squares={board} onClick={handleClick} />
        </div>
    );
};

export default Game;
