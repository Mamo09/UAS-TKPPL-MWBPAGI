//game Tic Tac toe//

const cells = document.querySelectorAll('.cell');
let xIsNext = true;
let gameOver = false;

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

function handleClick(e) {
  const cell = e.target;
  const cellIndex = parseInt(cell.id.split('-')[1]);
  if (gameOver || cell.textContent !== '') {
    return;
  }

  const symbol = xIsNext ? 'X' : 'O';
  cell.textContent = symbol;
  cell.classList.add(symbol.toLowerCase());
  xIsNext = !xIsNext;

  checkForWinningCombination();
}

function checkForWinningCombination() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent &&
      cells[a].textContent !== ''
    ) {
    gameOver = true;
    alert(`Player ${cells[a].textContent} has won!`);
    break;
  }
}
}