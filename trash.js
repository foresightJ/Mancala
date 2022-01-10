const greeting = "Welcome to the game";
console.log(greeting);

/*----- constants -----*/

/*----- app's state (variables) -----*/
let board = [
  [6, 6, 5, 6, 6, 6],
  [6, 6, 6, 6, 6, 6],
];

const players = {
  player1: {
    score: 0,
  },
  player2: {
    score: 0,
  },
};
// let player;
// let player2;

/*----- cached element references -----*/
const gameBoard = document.getElementById("gameboard");
const pit = document.querySelectorAll(".pit");
const playerRow = document.querySelectorAll(".row");

/*----- event listeners -----*/
gameBoard.addEventListener("click", handleClick);

/*----- functions -----*/

// init();

function handleClick(e) {
  let position = logPitPosition(e.target.id); //this returns { rowIndex: 1 or 2, pitIndex: 0-5}
  // if (board[position.rowIndex][position.pitIndex]) return;
  // board[position.rowIndex][position.pitIndex] = player;
  // player *= -1;
  // render();

  // checkWinner();
  // console.log("clicked!", coords.rIdx, coords.sIdx);
  console.log(
    "playeSide:",
    position.rowIndex,
    "pit No:",
    position.pitIndex,
    "value:",
    e.target.value
  );

  // return position;
}

function logPitPosition(id) {
  return { rowIndex: id[1], pitIndex: id[3] };
}

// function init() {
//   board = [
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//   ];
//   player = 1;
//   // drawBoard();
//   render();
// }

function render() {
  // messageEl.textContent = `${player > 0 ? "X" : "O"}'s Turn!`;
  board.forEach(function (row, rowIndex) {
    row.forEach(function (square, pitIndex) {
      // if (!square) return;
      console.log(square);
      document.getElementById(`s${rowIndex}-${pitIndex}`).textContent = square;
      // square > 0 ? "X" : "O";
      // square > 0 ? "X" : "O" "🪵";
    });
  });
}

render();

// /*----- helper functions -----*/
// function parseCoords(id) {
//   return { rIdx: id[1], sIdx: id[3] };
// }
