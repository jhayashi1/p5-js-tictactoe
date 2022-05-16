class Player {
	
    constructor(p){
      this.t = p;
      this.score = 0;
    }
    
    select(b){
      if(b.turn === this.t){
        let cx = int(Math.floor(mouseX/b.cSize));
        let cy = int(Math.floor(mouseY/b.cSize));
        b.update(cx, cy, this.t);
      }
    }
    
    win(){
        this.score++;
    }
  }