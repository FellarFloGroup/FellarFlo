class Pixel{
	constructor(color="empty"){
		if(color === "empty"){
			this.isEmpty = () => true;
			this.color = () => "gray";
		} else {
			this.isEmpty = () => false;
			this.color = () => color;
		}
	}
}

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
				this.board[i].push(new Pixel());
			}
		}
		if(stringRep !== ''){
			let i = 0;
			stringRep.split('|').forEach(line => {
				let j = 0;
				line.split(',').forEach(spot => {
					if(spot === 'r'){
						this.board[i][j] = new Pixel('red');
					} else if(spot === 'g'){
						this.board[i][j] = new Pixel('green');
					} else if(spot === 'b'){
						this.board[i][j] = new Pixel('blue');
					} else if(spot === 'o'){
						this.board[i][j] = new Pixel('orange');
					} else if(spot === 'y'){
						this.board[i][j] = new Pixel('yellow');
					} else if(spot === 'u'){
						this.board[i][j] = new Pixel('purple');
					} else if(spot === 'i'){
						this.board[i][j] = new Pixel('pink');
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
				} else if(this.board[i][j].color() === 'orange'){
					out += 'o,';
				} else if(this.board[i][j].color() === 'yellow'){
					out += 'y,';
				} else if(this.board[i][j].color() === 'purple'){
					out += 'u,';
				} else if(this.board[i][j].color() === 'pink'){
					out += 'i,';
				}
			}
			out += '|';
		}
		return out;
	}
}

const SPEED_DOWNWARDS = 200;
const PIECES = {
	"leftL": [
			{piece:[[new Pixel(), new Pixel('red')],[new Pixel(), new Pixel('red')], [new Pixel('red'), new Pixel('red')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('red'), new Pixel(), new Pixel()], [new Pixel('red'), new Pixel('red'), new Pixel('red')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('red'), new Pixel('red')], [new Pixel('red'), new Pixel()], [new Pixel('red'), new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('red'), new Pixel('red'), new Pixel('red')], [new Pixel(), new Pixel(), new Pixel('red')]], centerX: -1, centerY: 0}
		],
	"rightL": [
			{piece:[[new Pixel('green'), new Pixel()],[new Pixel('green'), new Pixel()], [new Pixel('green'), new Pixel('green')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel(), new Pixel('green')], [new Pixel('green'), new Pixel('green'), new Pixel('green')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('green'), new Pixel('green')], [new Pixel(), new Pixel('green')], [new Pixel(), new Pixel('green')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('green'), new Pixel('green'), new Pixel('green')], [new Pixel('green'), new Pixel(), new Pixel()]], centerX: -1, centerY: 0}
		],
	"square": [
			{piece:[[new Pixel('orange'), new Pixel('orange')], [new Pixel('orange'), new Pixel('orange')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('orange'), new Pixel('orange')], [new Pixel('orange'), new Pixel('orange')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('orange'), new Pixel('orange')], [new Pixel('orange'), new Pixel('orange')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('orange'), new Pixel('orange')], [new Pixel('orange'), new Pixel('orange')]], centerX: -1, centerY: 0},
		],
	"line": [
			{piece:[[new Pixel('pink'), new Pixel('pink'),new Pixel('pink'),new Pixel('pink')]], centerX: -2, centerY: 0},
			{piece:[[new Pixel('pink')], [new Pixel('pink')], [new Pixel('pink')], [new Pixel('pink')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('pink'), new Pixel('pink'),new Pixel('pink'),new Pixel('pink')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('pink')], [new Pixel('pink')],[new Pixel('pink')],[new Pixel('pink')]], centerX: 0, centerY: -2}
		],
	"T": [
			{piece:[[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('purple'),new Pixel()], [new Pixel('purple') ,new Pixel('purple')], [new Pixel('purple'),new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('purple'),new Pixel()],[new Pixel('purple'),new Pixel('purple'),new Pixel('purple')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel(),new Pixel('purple')], [new Pixel('purple') ,new Pixel('purple')], [new Pixel(),new Pixel('purple')]], centerX: -1, centerY: -1},
		],
	// "Z": [
	// 		{piece:[[new Pixel('blue'), new Pixel()],[new Pixel('blue'),new Pixel('blue')],[new Pixel(),new Pixel('blue')]], centerX: -1, centerY: 0},
	// 		{piece:[[new Pixel('blue'),new Pixel('blue'), new Pixel()], [new Pixel() ,new Pixel('blue'),new], [new Pixel('purple'),new Pixel()]], centerX: 0, centerY: -1},
	// 		{piece:[[new Pixel(), new Pixel('purple'),new Pixel()],[new Pixel('purple'),new Pixel('purple'),new Pixel('purple')]], centerX: -1, centerY: -1},
	// 		{piece:[[new Pixel(),new Pixel('purple')], [new Pixel('purple') ,new Pixel('purple')], [new Pixel(),new Pixel('purple')]], centerX: -1, centerY: -1},
	// 	],
};
b = new Board();


let playerPiece = {
	piece: PIECES['rightL'][0],
	x: 4,
	y: b.HEIGHT - 1,
	pieceStr: "rightL",
	pieceIdx: 0
};

var socket = io();
socket.on('message', function(data) {
	// b.board[counter % b.HEIGHT][Math.round((counter / b.HEIGHT) - 0.5)].color = () => 'blue';
	// b.board[counter % b.HEIGHT][Math.round((counter / b.HEIGHT) - 0.5)].isEmpty = () => false;
	// rotatePlayerPiece(playerPiece);
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
table.style.marginTop = '5%';
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
function updateVisuals(board, playerPiece){
	//draws board
	for(let i = 0; i < board.HEIGHT; i++){
		for(let j = 0; j < board.WIDTH; j++){
			document.getElementById(`tablecell${board.HEIGHT - (i + 1)},${j}`).style.backgroundColor = board.board[i][j].color();
		}
	}

	//draws playerPiece
	for(let i = 0; i < playerPiece.piece.piece.length; i++){
		for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
			if(!playerPiece.piece.piece[i][j].isEmpty()){
				let xPos = playerPiece.x-j-playerPiece.piece.centerX;
				let yPos = playerPiece.y-i-playerPiece.piece.centerY;
				if(yPos < 0){
					continue;
				}
				document.getElementById(`tablecell${board.HEIGHT - (yPos+1)},${xPos}`).style.backgroundColor = playerPiece.piece.piece[i][j].color();
			}
		}
	}
	// document.getElementById(`tablecell${board.HEIGHT - (playerPiece.y + 1)},${playerPiece.x}`).style.backgroundColor = 'darkgreen';
}

//moveDown(board: Board, emptyIdx: int): void
function moveDown(board, emptyIdx){
	for(let i = emptyIdx; i < board.HEIGHT - 1; i++){
		let copy = [];
		for(let j = 0; j < board.WIDTH; j++){
			copy.push(board.board[i+1][j]);
		}
		board.board[i] = copy;
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

//checkFull(board: Board, i: int): bool
function checkFull(board, i){
	for(let idx = 0; idx < board.WIDTH; idx++){
		if(board.board[i][idx].isEmpty()){
			return false;
		}
	}
	return true;
}

//clearRow(board: Board, i: int): void
function clearRow(board, i){
	for(let idx = 0; idx < board.WIDTH; idx++){
		board.board[i][idx] = new Pixel();
	}
}

function changePlayerPiece(playerPiece, pieceStr){
	playerPiece.piece = PIECES[pieceStr];
	for(let i = 0; i < playerPiece.piece.piece.length; i++){
		for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
			if(!playerPiece.piece.piece[i][j].isEmpty()){
				while(playerPiece.y-i-playerPiece.piece.centerY < 0){
					playerPiece.y += 1;
				}
				while(playerPiece.y-i-playerPiece.piece.centerY >= board.HEIGHT){
					playerPiece.y -= 1;
				}
				while(playerPiece.x-j-playerPiece.piece.centerX < 0){
					playerPiece.x += 1;
				}
				while(playerPiece.x-j-playerPiece.piece.centerX >= board.WIDTH){
					playerPiece.x -= 1;
				}
			}
		}
	}
}

function rotatePlayerPiece(playerPiece, dir="right"){
	playerPiece.pieceIdx += (dir === 'right' ? 1 : -1);
	playerPiece.pieceIdx %= 4;
	while(playerPiece.pieceIdx < 0){
		playerPiece.pieceIdx += 4;
	}
	playerPiece.piece = PIECES[playerPiece.pieceStr][playerPiece.pieceIdx];
	for(let i = 0; i < playerPiece.piece.piece.length; i++){
		for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
			if(!playerPiece.piece.piece[i][j].isEmpty()){
				while(playerPiece.y-i-playerPiece.piece.centerY < 0){
					playerPiece.y += 1;
				}
				while(playerPiece.y-i-playerPiece.piece.centerY >= b.HEIGHT){
					playerPiece.y -= 1;
				}
				while(playerPiece.x-j-playerPiece.piece.centerX < 0){
					playerPiece.x += 1;
				}
				while(playerPiece.x-j-playerPiece.piece.centerX >= b.WIDTH){
					playerPiece.x -= 1;
				}
				while(!b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
					playerPiece.y += 1;
				}
				while(!b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
					playerPiece.y -= 1;
				}
				while(!b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
					playerPiece.x += 1;
				}
				while(!b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
					playerPiece.x -= 1;
				}
			}
		}
	}
}

let framesUntilPlace = 2;

//movePlayerDown will return true iff the player has lost (a player placed a piece that is above the limit)
function movePlayerDown(playerPiece){
	let change = 1;
	for(let i = 0; i < playerPiece.piece.piece.length; i++){
		for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
			if(!playerPiece.piece.piece[i][j].isEmpty()){
				if(playerPiece.y-(change)-i-playerPiece.piece.centerY >= 0 && b.board[playerPiece.y-(change)-i-playerPiece.piece.centerY]===undefined){
					continue;
				}
				while(playerPiece.y-(change)-i-playerPiece.piece.centerY < 0 || !b.board[playerPiece.y-(change)-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
					change -= 1;
				}
			}
		}
	}
	playerPiece.y -= change;

	//place piece down
	if(change !== 1){
		if(framesUntilPlace === 0){
			console.log("placed piece");
			for(let i = 0; i < playerPiece.piece.piece.length; i++){
				for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
					if(!playerPiece.piece.piece[i][j].isEmpty()){
						console.log(`b.board[${playerPiece.y-i-playerPiece.piece.centerY}][${playerPiece.x-j-playerPiece.piece.centerX}]`);
						b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX] = playerPiece.piece.piece[i][j];
						if(playerPiece.y-i-playerPiece.piece.centerY >= b.HEIGHT){
							return true;
						}
					}
				}
			}
			let pIdx = Math.floor(Math.random() * Object.keys(PIECES).length);
			playerPiece.piece = Object.values(PIECES)[pIdx][0];
			playerPiece.pieceIdx = 0;
			playerPiece.pieceStr = Object.keys(PIECES)[pIdx];
			playerPiece.x = 4,
			playerPiece.y = b.HEIGHT - 1;
			for(let i = 0; i < playerPiece.piece.piece.length; i++){
				for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
					if(!playerPiece.piece.piece[i][j].isEmpty()){
						if(!b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
							return true;
						}
					}
				}
			}
		} else {
			framesUntilPlace--;
		}
	} else {
		framesUntilPlace = 2;
	}
	return false;
}

function lose(){
	clearInterval(interval);
	document.onkeydown = e => {};
}

setInterval(() => {
	updateVisuals(b, playerPiece);
}, 50);

let interval = setInterval(() => {
	if(movePlayerDown(playerPiece)){
		lose();
	}
	for(let i = b.HEIGHT - 1; i >= 0; i--){
		if(checkFull(b, i)){
			clearRow(b, i);
			moveDown(b, i);
		} else if(checkEmpty(b, i)){
			moveDown(b, i);
		}
	}
}, SPEED_DOWNWARDS);

document.onkeydown = function (e) {
    e = e || window.event;
	// use e.keyCode
    if (e.keyCode == '40') {
		let change = 1;
	   	for(let i = 0; i < playerPiece.piece.piece.length; i++){
			for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
				if(!playerPiece.piece.piece[i][j].isEmpty()){
					while(playerPiece.y-(change)-i-playerPiece.piece.centerY < 0 || !b.board[playerPiece.y-(change)-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
						change -= 1;
					}
				}
			}
		}
		playerPiece.y -= change;
    } else if (e.keyCode == '37') {
		let change = 1;
	   	for(let i = 0; i < playerPiece.piece.piece.length; i++){
			for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
				if(!playerPiece.piece.piece[i][j].isEmpty()){
					while(playerPiece.x-j-(change)-playerPiece.piece.centerX < 0 || !b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-change-playerPiece.piece.centerX].isEmpty()){
						change -= 1;
					}
				}
			}
		}
		playerPiece.x -= change;
    } else if (e.keyCode == '39') {
		let change = 1;
	   	for(let i = 0; i < playerPiece.piece.piece.length; i++){
			for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
				if(!playerPiece.piece.piece[i][j].isEmpty()){
					while(playerPiece.x+(change)-j-playerPiece.piece.centerX >= b.WIDTH || !b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x+change-j-playerPiece.piece.centerX].isEmpty()){
						change -= 1;
					}
				}
			}
		}
		playerPiece.x += change;
	} else if(e.key === 'a'){
		rotatePlayerPiece(playerPiece, 'left');
	} else if(e.key === 'd'){
		rotatePlayerPiece(playerPiece, 'right');
	}
};