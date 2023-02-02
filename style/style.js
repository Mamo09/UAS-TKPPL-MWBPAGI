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


//Game Puzzle//

var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;


var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./image/" + imgOrder.shift() + ".jpg";

            
            tile.addEventListener("dragstart", dragStart);  
            tile.addEventListener("dragover", dragOver);   
            tile.addEventListener("dragenter", dragEnter); 
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);      
            tile.addEventListener("dragend", dragEnd);     

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this;
}

function dragEnd() {
    if (!otherTile.src.includes("3.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
}