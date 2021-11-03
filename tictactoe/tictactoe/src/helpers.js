export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],  // top row  
        [3, 4, 5],  // middle row
        [6, 7, 8],  // bottom row
        [0, 3, 6],  // left column
        [1, 4, 7],  // middle column
        [2, 5, 8],  // right column
        [0, 4, 8],  // diagonal top left to bottom right
        [2, 4, 6],  // diagonal top right to bottom left
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    } 
    return null;
    }

    const squares = [
        null, null, null,
        'X', 'X', 'O', 
        null, null, null
    ];

    console.log(calculateWinner(squares));