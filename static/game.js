let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

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
	"leftL": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fde%2FPearl_Winter_White_Russian_Dwarf_Hamster_-_Front.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHamster&tbnid=rSodfVFOfsie0M&vet=12ahUKEwiy1NjI9LLvAhVHZN8KHXIYCdIQMygAegUIARCwAQ..i&docid=lIUkuH03JLTovM&w=2052&h=1128&q=hamster%20pics&ved=2ahUKEwiy1NjI9LLvAhVHZN8KHXIYCdIQMygAegUIARCwAQ",
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
let canSwap = true;
const totalPieces = ["leftL", "rightL", "square", "line", "T", "leftZ", "rightZ"];
let queue = [];
playerQueue('add');
let playerPiece = {
	piece: PIECES['rightZ'][0],
	x: 4,
	y: b.HEIGHT - 1,
	pieceStr: "rightZ",
	pieceIdx: 0
};
let holdPiece = '';

var socket = io();
socket.on('connect', () => {
	// console.log(socket.id);
});


//dark mode ftw
document.body.style.backgroundColor = "black";

//Making three sections
const sections = document.createElement('table');
sections.style.position = 'fixed';
sections.style.top = '0px';
sections.style.left = '0px';
sections.style.width = '100%';
sections.style.height = '75%';
document.body.appendChild(sections);
const sectionsBody = document.createElement('tbody');
sections.appendChild(sectionsBody);
const sectionsRow = document.createElement('tr');
sectionsBody.appendChild(sectionsRow);
const leftSection = document.createElement('td');
leftSection.style.width = '33%';
leftSection.style.height = '100%';
sectionsRow.appendChild(leftSection);
const middleSection = document.createElement('td');
middleSection.style.width = '34%';
middleSection.style.height = '100%';
sectionsRow.appendChild(middleSection);
const rightSection = document.createElement('td');
rightSection.style.width = '33%';
rightSection.style.height = '100%';
sectionsRow.appendChild(rightSection);

//Making tetris score label
const scoreLabel = document.createElement('h1');
scoreLabel.style.color = 'white';
scoreLabel.style.marginLeft = 'auto';
scoreLabel.style.marginRight = 'auto';
scoreLabel.style.textAlign = 'center';
scoreLabel.innerHTML = 'Score: 0pts'
middleSection.appendChild(scoreLabel);

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
    cell.style.padding = 0;
    cell.style.backgroundColor = `rgb(${(255 * (i / b.HEIGHT))},0,${(255 * (j / b.WIDTH))})`;
    row.appendChild(cell);
    const img = document.createElement('img');
    img.id = `img${i},${j}`;
    img.style.left = 0;
    img.style.top = 0;
    img.style.padding = 0;
    img.style.width = '100%';
    img.style.height = '100%';
    img.src = '';//https://www.evan.umasscreate.net/pixels/red.png';
    cell.appendChild(img);
  }
}
middleSection.appendChild(table);


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

function setPlayerPiece(pieceStr){
	playerPiece.piece = PIECES[pieceStr][0];
	playerPiece.x = 4;
	playerPiece.y = b.HEIGHT - 1;
	playerPiece.pieceStr = pieceStr;
	playerPiece.pieceIdx = 0;
}

function hold(){
	if(holdPiece.length === 0){
		const newHoldPiece = (' ' + playerPiece.pieceStr).slice(1);
		setPlayerPiece(playerQueue('pop'));
		holdPiece = newHoldPiece;
	} else {
		const newHoldPiece = (' ' + playerPiece.pieceStr).slice(1);
		setPlayerPiece(holdPiece);
		holdPiece = newHoldPiece;
	}
}

function getNewPieceStr(){
	return Object.keys(PIECES)[Math.floor(Math.random() * Object.keys(PIECES).length)];
}

function playerQueue(action){
	if(action == 'add'){
		for(let i = queue.length; i < 5; i++){
			queue.push(getNewPieceStr());
		}
	} else if(action == 'pop'){
		let out = queue.shift();
		playerQueue('add');
		return out;
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
				while(playerPiece.y-(change)-i-playerPiece.piece.centerY < 0 || playerPiece.y-(change)-i-playerPiece.piece.centerY >= b.HEIGHT || !b.board[playerPiece.y-(change)-i-playerPiece.piece.centerY][playerPiece.x-j-playerPiece.piece.centerX].isEmpty()){
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

			canSwap = true;
			setPlayerPiece(playerQueue('pop'));

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
	const dimDiv = document.createElement('div');
	dimDiv.style.opacity = 0.5;
	dimDiv.style.position = "fixed";
	dimDiv.style.marginLeft = 'auto';
	dimDiv.style.marginRight = 'auto';
	dimDiv.style.top = "0px";
	dimDiv.style.backgroundColor = "black";
	dimDiv.style.width = "34%";
	dimDiv.style.height = "100%";
	middleSection.appendChild(dimDiv);
	const loseText = document.createElement("h1");
	loseText.style.color = "white";
	loseText.style.position = "fixed";
	loseText.innerHTML = `<font style='color: Crimson'>Game Over</font><br><font style='font-size: 30px;'>${score} points</font>`;
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
  		const leaderboardTable = document.createElement("table");
  		leaderboardTable.style.position = 'fixed';
  		leaderboardTable.style.bottom = "0px";
  		leaderboardTable.style.left = '67%'; 
  		leaderboardTable.style.border = '10px groove gray';
  		leaderboardTable.style.color = 'white';
  		rightSection.appendChild(leaderboardTable);
  		const leaderboardBody = document.createElement("tbody");
  		const titleRow = document.createElement('tr');
  		leaderboardBody.appendChild(titleRow);
  		const rankTitle = document.createElement("td");
  		rankTitle.style.minWidth = "100px";
  		titleRow.appendChild(rankTitle);
  		const nameTitle = document.createElement("td");
  		nameTitle.innerHTML = "Name";
  		titleRow.appendChild(nameTitle);
  		const scoreTitle = document.createElement("td");
  		scoreTitle.innerHTML = "Score";
  		titleRow.appendChild(scoreTitle);

  		leaderboardTable.appendChild(leaderboardBody);
  		for(let i = 0; i < data.length; i++){
  			const row = document.createElement('tr');
  			leaderboardBody.appendChild(row);
  			const rankingTd = document.createElement('td');
  			rankingTd.innerHTML = `${i + 1}.`;
  			row.appendChild(rankingTd);
  			const nameTd = document.createElement('td');
  			nameTd.innerHTML = data[i][0];
  			row.appendChild(nameTd);
  			const scoreTd = document.createElement('td');
  			scoreTd.innerHTML = data[i][1]
  			row.appendChild(scoreTd);
  		}
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

function move(str){
	if(str === 'down'){
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
	} else if(str === 'left'){
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
	} else if(str === 'right'){
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
	}
}

document.onkeydown = function (e) {
    e = e || window.event;
	// use e.keyCode
    if (e.keyCode == '40') {
		move("down");
    } else if (e.keyCode == '37') {
		move("left");
    } else if (e.keyCode == '39') {
		move("right");
	} else if(e.key === 'a'){
		rotatePlayerPiece(playerPiece, 'left');
	} else if(e.key === 'd'){
		rotatePlayerPiece(playerPiece, 'right');
	} else if(e.key == ' '){
		if(canSwap){
			hold();
			canSwap = false;
		}
	} else if (e.key ==='s'){
		playerQueue();
	}
};

if(isMobile){
	document.addEventListener('click', (e) => rotatePlayerPiece(playerPiece, 'right'), false);
	document.addEventListener('touchstart', handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);

	let xDown = null;                                                        
	let yDown = null;

	function getTouches(evt) {
	  return evt.touches ||  evt.originalEvent.touches;
	}

	function handleTouchStart(evt) {
	    const firstTouch = getTouches(evt)[0];
	    xDown = firstTouch.clientX;
	    yDown = firstTouch.clientY;
	};

	function handleTouchMove(evt) {
	    if (!xDown || !yDown) {
	        return;
	    }

	    let xUp = evt.touches[0].clientX;
	    let yUp = evt.touches[0].clientY;

	    let xDiff = xDown - xUp;
	    let yDiff = yDown - yUp;

	    if (Math.abs(xDiff) > Math.abs(yDiff)) {
	        if (xDiff > 0) {
	            /* left swipe */
	            move('left');
	        } else {
	            /* right swipe */
	            move('right');
	        }
	    } else {
	        if (yDiff > 0) {
	            /* up swipe */
	        } else {
	            move('down');
	        }
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;                                             
	};
}