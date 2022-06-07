class Board {

    constructor(p1, p2){
      //data needed for the board
      this.BOARD_SIZE = 3;
      //Cell size = (height of canvas * 0.9) / num boards / cell dimensions
      this.CELL_SIZE = ((height * 0.9) / TOTAL) / this.BOARD_SIZE;
      this.cells = [];
      //data dealing with players
      this.p1 = p1;
      this.p2 = p2;
      this.turn = this.p1.t;
      //data needed to deal with winning
      this.winState = false;
      this.resultText = "";
      this.newGame();
    }
    
    display(x, y){
      let CELL_SIZE = this.CELL_SIZE;
      if (this.winState){
        textSize(24);
        textAlign(CENTER);
          text(this.resultText, width/2, height/2);
        text("Click anywhere for a new game", width/2, height/2+30);
        
      } else {
        this.cells.forEach(function(element){
          rect(element.r*CELL_SIZE + (CELL_SIZE * 3 * x * 1.1), element.c*CELL_SIZE + (CELL_SIZE * 3 * y * 1.1), CELL_SIZE, CELL_SIZE);
          textSize(64);
          textAlign(CENTER);
          text(element.t, element.r * CELL_SIZE + CELL_SIZE / 2, element.c * CELL_SIZE + CELL_SIZE / 1.5);
        });
      }
      
    }
    
    //this will allow users to make changes to the board
    update(r, c, t){
      let turn = this.turn;
      this.cells.forEach(function(element){
              if (element.r === r && element.c === c && element.v === 0){
            element.t = t;
          if(turn==="X"){
              element.v = 1;
          } else {
              element.v = -1;
          }
        }
      });
      let result = this.checkResult()
      if (result){
        this.winState = true;
        this.resultText = "The winner is..." + result;
      }
    }
    
    //this will evaluate if someone has won the game
    checkResult(){
      let winner;
      let p1 = this.p1;
      let p2 = this.p2;
      let rowSums = new Array(this.BOARD_SIZE);
      let colSums = new Array(this.BOARD_SIZE);
      let diagSums = new Array(this.BOARD_SIZE);
      let numOpen = 9;
      let s = this.BOARD_SIZE

      for (let i = 0; i < this.BOARD_SIZE; i++){
        rowSums[i]= 0;
        colSums[i] = 0;
        diagSums[i] = 0;
      }

      this.cells.forEach(function(element) {
        rowSums[element.r] += element.v;
        colSums[element.c] += element.v;
        numOpen -= abs(element.v);
        if(abs(element.r-element.c) === 0){
            diagSums[0] += element.v;
        }
        if(abs(element.r-element.c) === 2 || (element.r == 1  && element.c == 1)){
            diagSums[1] += element.v;
        }
      });
      rowSums.forEach(function(element) {
          if(element === s){
            winner = p1.t;
          p1.win();
        }
        if (element === -1 * s){
            winner = p2.t;
          p2.win();
        }
      });
      colSums.forEach(function(element) {
          if(element === s){
            winner = p1.t;
          p1.win();
        }
        if (element === -1 * s){
            winner = p2.t;
          p2.win();
        }
      });
      diagSums.forEach(function(element) {
          if(element === s){
            winner = p1.t;
          p1.win();
        }
        if (element === -1 * s){
            winner = p2.t;
          p2.win();
        }
      });
      if (numOpen === 0 ){
        winner = "No one, it's a tie";
      }
      return winner;
    }
    
    newGame(){
      this.winState = false;
      this.turn = this.p1.t;
        score_div.html("Turn:" + this.p1.t);
      this.cells = [];
      for (let i = 0; i < this.BOARD_SIZE; i++){
        for (let j = 0; j < this.BOARD_SIZE; j++){
          this.cells.push({
            "r": i,
            "c": j,
            "t": "",
            "v": 0
            });
          }
      }
    }
  }