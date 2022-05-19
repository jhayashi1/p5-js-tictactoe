let turn;
let score_div;

const TOTAL = 10;
let boards = [];
let playersX = [];
let playersO = [];
let counter = 0;
let slider;
let neat;

let config = {
	model: [
		{nodeCount: 5, type: "input"},
		{nodeCount: 2, type: "output", activationfunc: activation.SOFTMAX}
	],
	mutationRate: 0.1,
	crossoverMethod: crossover.RANDOM,
	mutationMethod: mutate.RANDOM,
	populationSize: TOTAL
};

function setup() {
  // p1 = new Player("X");
  // p2 = new Player("O");
  // createCanvas(400, 400);
  // score_div = createDiv('').size(100, 25);
  // b = new Board(3, p1, p2); //this object tracks changes made to the board

  createCanvas(displayWidth, displayHeight);
  score_div = createDiv('').size(100, 25);
  for (let i = 0; i < TOTAL; i++) {
    playersX[i] = new Array(TOTAL);
    playersO[i] = new Array(TOTAL);
    boards[i] = new Array(TOTAL);
    for (let j = 0; j < TOTAL; j++) {
      playersX[i][j] = new Player("X");
      playersO[i][j] = new Player("Y");
      boards[i][j] = new Board(3, playersX[i], playersO[i]);
    }
  }

  neat = new NEAT(config);
}

function draw() {
  // background(220);
  // b.display();

  background(220);
  for (let i = 0; i < TOTAL; i++) {
    for (let j = 0; j < TOTAL; j++) {
      boards[i][j].display(i, j);
    }
  }
}

// function mousePressed(){
// 	if (!b.winState){
//     if (b.turn === "X"){
//       p1.select(b);
//     } else {
//       p2.select(b);
//     }
//     b.toggleTurn();
//   } else {
//   	b.newGame();
//   }
// }

