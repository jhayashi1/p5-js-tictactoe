let b;
let p1;
let p2;
let turn;
let score_div;

const TOTAL = 5;
let boards = [];
let players = [];
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

  neat = new NEAT(config);
}

function draw() {
  // background(220);
  // b.display();

  background(0);
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

