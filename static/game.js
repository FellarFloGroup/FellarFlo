class Board{
	constructor(stringRep=''){
		//board[yCoord][xCoord]
		this.board = [];
		this.WIDTH = 10;
		this.HEIGHT = 20;
		this.highestPiece = 0;
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
	// b.board[counter % b.HEIGHT][Math.round((counter / b.HEIGHT) - 0.5)].color = () => 'blue';
	// b.board[counter % b.HEIGHT][Math.round((counter / b.HEIGHT) - 0.5)].isEmpty = () => false;
	// counter += 1;
});

for(let i = 5; i < 10; i++){
	b.board[i][i].color = () => 'blue';
	b.board[i][i].isEmpty = () => false;
}
b.board[0][0].color = () => 'red';
b.board[0][0].isEmpty = () => false;
b.highestPiece = 4;

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
	for(let i = 0; i < board.HEIGHT; i++){
		for(let j = 0; j < board.WIDTH; j++){
			document.getElementById(`tablecell${board.HEIGHT - (i + 1)},${j}`).style.backgroundColor = board.board[i][j].color();
		}
	}
}

//moveDown(board: Board, emptyIdx: int): void
function moveDown(board, emptyIdx){
	for(let i = emptyIdx; i < board.HEIGHT - 1; i++){
		board.board[i] = board.board[i+1];
	}
	for(let i = 0; i < board.WIDTH; i++){
		board.board[board.HEIGHT - 1][i] = {isEmpty: () => true, color: () => 'gray'};
	}
	board.highestPiece -= 1; 
}

//checkEmpty(board: Board, i: int): bool
function checkEmpty(board, i){
	for(let idx = 0; idx < board.board[i].length; idx++){
		if(!board.board[i][idx].isEmpty()){
			return false;
		}
	}
	return true;
}

setInterval(() => {
	for(let i = b.HEIGHT - 1; i >= 0; i--){
		if(checkEmpty(b, i)){
			moveDown(b, i);
		}
	}
	updateVisuals(b);
}, 100);