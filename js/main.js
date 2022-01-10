const greeting = "Welcome to the game";
console.log(greeting);

/*----- constants -----*/

/*----- app's state (variables) -----*/
let board = [
  [4, 4, 4, 4, 4, 4],
  [4, 4, 4, 4, 4, 6],
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

function logPitPosition(id) {
  return { rowIndex: id[1], pitIndex: id[3], pitId: id };
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
    row.forEach(function (pit, pitIndex) {
      // console.log(pit, pitIndex);
      // if (!square) return;
      document.getElementById(`s${rowIndex}-${pitIndex}`).textContent = pit;
      // square > 0 ? "X" : "O";
      // square > 0 ? "X" : "O" "🪵";
    });
  });
}

render();

function handleClick(e) {
  let position = logPitPosition(e.target.id); //this returns { rowIndex: 1 or 2, pitIndex: 0-5, pitID: each div ele}
  const value = parseInt(e.target.innerText);
  const setValue = 0; // when an item is clicked, set the pit value to 0
  const pitId = position.pitId; //this holds the pitId
  const el = document.getElementById(pitId);

  //loop through the board
  //increase all elements by 1
  board.forEach(function (row, rowIndex) {
    row.forEach(function (pit, pitIndex) {
      console.log(
        "playeSide:",
        position.rowIndex,
        "pit No:",
        position.pitId,
        "value:",
        value
      );
      // value = 0;
      // document.getElementById(`s${rowIndex}-${pitIndex}`).textContent = eachPit;
      // const eachValue = parseInt(eachPit);
      // eachValue++;

      // pit = pit++;
      // console.log(pit);
    });
  });

  // console.log(pitId);
  // if (board[position.rowIndex][position.pitIndex]) return;
  // board[position.rowIndex][position.pitIndex] = player;
  // player *= -1;
  // render();

  // checkWinner();
  // console.log("clicked!", coords.rIdx, coords.sIdx);

  // console.log(
  //   "playeSide:",
  //   position.rowIndex,
  //   "pit No:",
  //   position.pitId,
  //   "value:",
  //   value
  // );

  // return position;
}

function init() {}

// /*----- helper functions -----*/
function increaseValue(value) {
  let total;
  for (let i = 0; i < value; i++) {
    total += 1;
    // const element = array[index];
  }
  return total;
}

// function parseCoords(id) {
//   return { rIdx: id[1], sIdx: id[3] };
// }
