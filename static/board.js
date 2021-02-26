class Board{
	constructor(stringRep=''){
		this.board = [];
		this.WIDTH = 10;
		this.HEIGHT = 20;
		for(let i = 0; i < this.WIDTH; i++){
			for(let j = 0; j < this.HEIGHT; j++){
				this.board[i][j] = {isEmpty: () => true};
			}
		}
		if(stringRep !== ''){
			let j = 0;
			stringRep.split('|').forEach(line => {
				let i = 0;
				line.split(',').forEach(spot => {
					if(spot === 'e'){
						this.board[i][j] = {isEmpty: () => true};
					} else if(spot === 'r'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'red'};
					} else if(spot === 'g'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'green'};
					} else if(spot === 'b'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'blue'};
					}
					i++;
				});
				j++;
			});
			
		}
	}
	toString(){
		out = "";
		for(let i = 0; i < this.WIDTH; i++){
			for(let j = 0; j < this.HEIGHT; j++){
				if(this.board[i][j].isEmpty()){
					out += 'e,';
				} else if(this.board[i][j].color() === 'red'){
					out += 'r,';
				} else if(this.board[i][j].color() === 'green'){
					out += 'g,';
				} else if(this.board[i][j].color() === 'blue'){
					out += 'b,';
				}
			}
			out += '|';
		}
		return out;
	}
}

exports = Board;