class Board{
	constructor(stringRep=''){
		//board[yCoord][xCoord]
		this.board = [];
		this.WIDTH = 10;
		this.HEIGHT = 20;
		for(let i = 0; i < this.HEIGHT; i++){
      		this.board.push([]);
			for(let j = 0; j < this.WIDTH; j++){
				this.board[i].push({isEmpty: () => true, color: () => "gray"});
			}
		}
		if(stringRep !== ''){
			let i = 0;
			stringRep.split('|').forEach(line => {
				let j = 0;
				line.split(',').forEach(spot => {
					if(spot === 'r'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'red'};
					} else if(spot === 'g'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'green'};
					} else if(spot === 'b'){
						this.board[i][j] = {isEmpty: () => false, color: () => 'blue'};
					}
					j++;
				});
				i++;
			});
			
		}
	}
	toString(){
		let out = "";
		for(let i = 0; i < this.HEIGHT; i++){
			for(let j = 0; j < this.WIDTH; j++){
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


var socket = io();
b = new Board();
let counter = 0;
socket.on('message', function(data) {
	b.board[counter % b.HEIGHT][Math.round((counter / b.HEIGHT) - 0.5)].color = () => 'blue';
	b.board[counter % b.HEIGHT][Math.round((counter / b.HEIGHT) - 0.5)].isEmpty = () => false;
	counter += 1;
});

//dark mode ftw
document.body.style.backgroundColor = "black";

//Making tetris board
let table = document.createElement("table");
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';
let tableBody = document.createElement("tbody");
table.appendChild(tableBody);
for(let i = 0; i < b.HEIGHT; i++){
  let row = document.createElement("tr");
  tableBody.appendChild(row);
  for(let j = 0; j < b.WIDTH; j++){
	let cell = document.createElement("td");
	cell.id = `tablecell${i},${j}`;
    cell.style.width = 25;
    cell.style.height = 25;
    cell.style.backgroundColor = `rgb(${(255 * (i / b.HEIGHT))},0,${(255 * (j / b.WIDTH))})`;
    row.appendChild(cell);
  }
}
document.body.appendChild(table);

//updateVisuals(board: Board): void
function updateVisuals(board){
	console.log(b.toString());
	for(let i = 0; i < board.HEIGHT; i++){
		for(let j = 0; j < board.WIDTH; j++){
			document.getElementById(`tablecell${i},${j}`).style.backgroundColor = board.board[i][j].color();
		}
	}
}

//checks to see if it can move down, if it can then moves board downwards
//moveDown(board: Board): void
function moveDown(board){
	
}

setInterval(() => updateVisuals(b, 100));