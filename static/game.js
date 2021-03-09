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
						this.board[i][j] = new Pixel('teal');
					} else if(spot === 'u'){
						this.board[i][j] = new Pixel('purple');
					} else if(spot === 'c'){
						this.board[i][j] = new Pixel('cyan');
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
				} else if(this.board[i][j].color() === 'teal'){
					out += 'y,';
				} else if(this.board[i][j].color() === 'purple'){
					out += 'u,';
				} else if(this.board[i][j].color() === 'cyan'){
					out += 'c,';
				}
			}
			out += '|';
		}
		return out;
	}
}

const SPEED_DOWNWARDS = 200;
const PIECES_IMG = {
	"leftL": "leftL.png",
	"rightL": "rightL.png",
	"square": "square.png",
	"line": "line.png",
	"T": "T.png",
	"leftZ": "leftZ.png",
	"rightZ": "rightZ.png"
};
const PIECES = {
	"leftL": [
			{piece:[[new Pixel(), new Pixel('red')],[new Pixel(), new Pixel('red')], [new Pixel('red'), new Pixel('red')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('red'), new Pixel('red'), new Pixel('red')], [new Pixel(), new Pixel(), new Pixel('red')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('red'), new Pixel('red')], [new Pixel('red'), new Pixel()], [new Pixel('red'), new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('red'), new Pixel(), new Pixel()], [new Pixel('red'), new Pixel('red'), new Pixel('red')]], centerX: -1, centerY: -1}
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
			{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan'),new Pixel('cyan')]], centerX: -2, centerY: 0},
			{piece:[[new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan'),new Pixel('cyan')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('cyan')], [new Pixel('cyan')],[new Pixel('cyan')],[new Pixel('cyan')]], centerX: 0, centerY: -2}
		],
	"T": [
			{piece:[[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('purple'),new Pixel()], [new Pixel('purple') ,new Pixel('purple')], [new Pixel('purple'),new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('purple'),new Pixel()],[new Pixel('purple'),new Pixel('purple'),new Pixel('purple')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel(),new Pixel('purple')], [new Pixel('purple') ,new Pixel('purple')], [new Pixel(),new Pixel('purple')]], centerX: -1, centerY: -1},
		],
	"leftZ": [
			{piece:[[new Pixel(), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('blue'), new Pixel('blue'), new Pixel()], [new Pixel(), new Pixel('blue'), new Pixel('blue')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel(), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('blue'), new Pixel('blue'), new Pixel()], [new Pixel(), new Pixel('blue'), new Pixel('blue')]], centerX: -1, centerY: -1}
		],
	"rightZ": [
			{piece:[[new Pixel('teal'), new Pixel()], [new Pixel('teal'), new Pixel('teal')], [new Pixel(), new Pixel('teal')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal'), new Pixel()]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('teal'), new Pixel()], [new Pixel('teal'), new Pixel('teal')], [new Pixel(), new Pixel('teal')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal'), new Pixel()]], centerX: -1, centerY: -1}

	]
};
let b = new Board();
let score = 0;

let playerPiece = {
	piece: PIECES['rightZ'][0],
	x: 4,
	y: b.HEIGHT - 1,
	pieceStr: "rightZ",
	pieceIdx: 0
};

var socket = io();
socket.on('connect', () => {
	console.log(socket.id);
});


//dark mode ftw
document.body.style.backgroundColor = "black";

//Making tetris score label
const scoreLabel = document.createElement('h1');
scoreLabel.style.color = 'white';
scoreLabel.style.marginLeft = 'auto';
scoreLabel.style.marginRight = 'auto';
scoreLabel.style.textAlign = 'center';
scoreLabel.innerHTML = 'Score: 0pts'
document.body.appendChild(scoreLabel);

//Making tetris board
const table = document.createElement("table");
table.style.marginTop = '5%';
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);
for(let i = 0; i < b.HEIGHT; i++){
  const row = document.createElement("tr");
  tableBody.appendChild(row);
  for(let j = 0; j < b.WIDTH; j++){
	const cell = document.createElement("td");
	cell.id = `tablecell${i},${j}`;
    cell.style.width = 25;
    cell.style.height = 25;
    cell.style.backgroundColor = `rgb(${(255 * (i / b.HEIGHT))},0,${(255 * (j / b.WIDTH))})`;
    row.appendChild(cell);
  }
}
document.body.appendChild(table);


function updateScoreVisual(score){
	if(score === 1){
		scoreLabel.innerHTML = `Score: 1 pt`;
	} else {
		scoreLabel.innerHTML = `Score: ${score} pts`;
	}
}

//updateVisuals(board: Board): void
function updateVisuals(board, playerPiece, showPlayerPiece=true){
	//draws board
	for(let i = 0; i < board.HEIGHT; i++){
		for(let j = 0; j < board.WIDTH; j++){
			document.getElementById(`tablecell${board.HEIGHT - (i + 1)},${j}`).style.backgroundColor = board.board[i][j].color();
		}
	}

	//draws playerPiece
	if(showPlayerPiece){
		
		for(let i = 0; i < playerPiece.piece.piece.length; i++){
			for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
				if(!playerPiece.piece.piece[i][j].isEmpty()){
					let xPos = playerPiece.x-j-playerPiece.piece.centerX;
					let yPos = playerPiece.y-i-playerPiece.piece.centerY;
					if(yPos < 0 || yPos >= b.HEIGHT){
						continue;
					}
					document.getElementById(`tablecell${board.HEIGHT  - (yPos+1)},${xPos}`).style.backgroundColor = playerPiece.piece.piece[i][j].color();
				}
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
			for(let i = 0; i < playerPiece.piece.piece.length; i++){
				for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
					if(!playerPiece.piece.piece[i][j].isEmpty()){
						if(playerPiece.y-i-playerPiece.piece.centerY >= b.HEIGHT){
							return true;
						}
						b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX] = playerPiece.piece.piece[i][j];
					}
				}
			}
			let pIdx = Math.floor(Math.random() * Object.keys(PIECES).length);
			playerPiece.piece = Object.values(PIECES)[pIdx][0];
			playerPiece.pieceIdx = 0;
			playerPiece.pieceStr = Object.keys(PIECES)[pIdx];
			playerPiece.x = 4;
			playerPiece.y = b.HEIGHT - 1;
			score += 1;
			let badPieceCounter = 0;
			for(let i = 0; i < playerPiece.piece.piece.length; i++){
				for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
					if(!playerPiece.piece.piece[i][j].isEmpty()){
						if (playerPiece.y-i-playerPiece.piece.centerY >= b.HEIGHT){
							if(!b.board[b.HEIGHT - 1][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
								badPieceCounter += 1;
							}
						}
						if(playerPiece.y-i-playerPiece.piece.centerY < b.HEIGHT && !b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
							badPieceCounter += 1;
						}
					}
				}
			}
			if(badPieceCounter >= 1){
				for(let i = 0; i < playerPiece.piece.piece.length; i++){
					for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
						while(playerPiece.y-i-playerPiece.piece.centerY < b.HEIGHT && !b.board[playerPiece.y-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
							playerPiece.y += 1;
						}
					}
				}
				return true;
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
	clearInterval(gameInterval);
	clearInterval(visualInterval);
	document.onkeydown = e => {};
	updateVisuals(b, playerPiece);
	let dimDiv = document.createElement('div');
	dimDiv.style.opacity = 0.5;
	dimDiv.style.position = "fixed";
	dimDiv.style.left = "0px";
	dimDiv.style.top = "0px";
	dimDiv.style.backgroundColor = "black";
	dimDiv.style.width = "100%";
	dimDiv.style.height = "100%";
	document.body.appendChild(dimDiv);
	let loseText = document.createElement("h1");
	loseText.style.color = "white";
	loseText.style.position = "fixed";
	loseText.innerHTML = `Game Over<br><font style='font-size: 30px;'>${score} points</font>`;
	loseText.style.margin = "auto";
	loseText.style.zIndex = "1000";
	loseText.style.width = "100%";
	loseText.style.textAlign = "center";
	loseText.style.fontSize = "150px";
	loseText.style.top = table.style.top.substring(0,-2) + 250;
	document.body.appendChild(loseText);
	scoreLabel.style.display = 'none';
  	socket.emit('leaderboard', score);
  	socket.on('leaderboard', (data, rank) => {
  		if(rank >= 0){
			let name = prompt("Please enter your name", "");
			socket.emit('leaderboardname', name);
			for(let j = data.length - 1; j > rank; j--){
				data[j] = data[j-1];
			}
			if(name === '' || name === null){
				data[rank] = ['You', score];
			} else {
				data[rank] = [name, score];
			}
  		}
  		let leaderboardText = `<font style='font-size: 20px'><br>`;
  		for(let i = 0; i < data.length; i++){
  			leaderboardText += `<br>${i + 1}. ${data[i][0]} - ${data[i][1]}`;
  		}
  		loseText.innerHTML += `${leaderboardText}</font>`;
  	});
}

let visualInterval = setInterval(() => {
	updateVisuals(b, playerPiece);
	updateScoreVisual(score);
}, 50);

let gameInterval = setInterval(() => {
	if(movePlayerDown(playerPiece)){
		lose();
	}
	let rowsCleared = 0;
	for(let i = b.HEIGHT - 1; i >= 0; i--){
		if(checkFull(b, i)){
			clearRow(b, i);
			rowsCleared += 1;
			moveDown(b, i);
		} else if(checkEmpty(b, i)){
			moveDown(b, i);
		}
	}
	score += rowsCleared * rowsCleared;
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