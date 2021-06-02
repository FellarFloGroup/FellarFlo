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
		this.WIDTH = 15;
		this.HEIGHT = 15;
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
let LEADERBOARD_QUALIFY = true;
let PAUSED = false;
let GHOST_VISIBLE = true;
const SPEED_DOWNWARDS = 250;
let selectionTimer = null;
let waitUntilNextSelected = true;

const PIECES_IMG = {
	"leftL": "https://evan.umasscreate.net/pieces/leftL.png",
	"rightL": "https://evan.umasscreate.net/pieces/rightL.png",
	"square": "https://evan.umasscreate.net/pieces/square.png",
	"line": "https://evan.umasscreate.net/pieces/line.png",
	"T": "https://evan.umasscreate.net/pieces/T.png",
	"leftZ": "https://evan.umasscreate.net/pieces/leftZ.png",
	"rightZ": "https://evan.umasscreate.net/pieces/rightZ.png"
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
	//"v": [
	//		{piece:[[new Pixel(), new Pixel('orange')], [new Pixel('orange'), new Pixel('orange')]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('orange'), new Pixel('orange')], [new Pixel(), new Pixel('orange')]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('orange'), new Pixel('orange')], [new Pixel('orange'), new Pixel()]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('orange'), new Pixel()], [new Pixel('orange'), new Pixel('orange')]], centerX: -1, centerY: 0},
	//	],
	"line": [
			{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan'),new Pixel('cyan')]], centerX: -2, centerY: 0},
			{piece:[[new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan'),new Pixel('cyan')]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('cyan')], [new Pixel('cyan')],[new Pixel('cyan')],[new Pixel('cyan')]], centerX: 0, centerY: -2}
		],
	//"line3": [
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan')]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan')]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('cyan')], [new Pixel('cyan')],[new Pixel('cyan')]], centerX: 0, centerY: -1}
	//	],
	//"stairs": [
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel()],[new Pixel(), new Pixel('cyan'),new Pixel('cyan')],[new Pixel(), new Pixel(),new Pixel('cyan')]], centerX: -2, centerY: 0},
	//		{piece:[[new Pixel(), new Pixel('cyan'),new Pixel('cyan')],[new Pixel('cyan'), new Pixel('cyan'),new Pixel()],[new Pixel('cyan'), new Pixel(),new Pixel()]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel('cyan'), new Pixel(),new Pixel()],[new Pixel('cyan'), new Pixel('cyan'),new Pixel()],[new Pixel(), new Pixel('cyan'),new Pixel('cyan')]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel(), new Pixel(),new Pixel('cyan')],[new Pixel(), new Pixel('cyan'),new Pixel('cyan')],[new Pixel('cyan'), new Pixel('cyan'),new Pixel()]], centerX: 0, centerY: -2}
	//	],
	//"boomerang": [
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan')],[new Pixel('cyan'), new Pixel(),new Pixel()],[new Pixel('cyan'), new Pixel(),new Pixel()]], centerX: 0, centerY: 0},
	//		{piece:[[new Pixel('cyan'), new Pixel(),new Pixel()],[new Pixel('cyan'), new Pixel(),new Pixel()],[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan')]], centerX: 0, centerY: 0},
	//		{piece:[[new Pixel(), new Pixel(),new Pixel('cyan')],[new Pixel(), new Pixel(),new Pixel('cyan')],[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan')]], centerX: 0, centerY: 0},
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan')],[new Pixel(), new Pixel(),new Pixel('cyan')],[new Pixel(), new Pixel(),new Pixel('cyan')]], centerX: 0, centerY: 0}
	//	],
	"T": [
			{piece:[[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: 0},
			{piece:[[new Pixel('purple'),new Pixel()], [new Pixel('purple') ,new Pixel('purple')], [new Pixel('purple'),new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('purple'),new Pixel()],[new Pixel('purple'),new Pixel('purple'),new Pixel('purple')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel(),new Pixel('purple')], [new Pixel('purple') ,new Pixel('purple')], [new Pixel(),new Pixel('purple')]], centerX: -1, centerY: -1},
		],
	//"tallT": [
	//		{piece:[[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('purple'),new Pixel(),new Pixel()], [new Pixel('purple') ,new Pixel('purple'),new Pixel('purple')], [new Pixel('purple'),new Pixel(),new Pixel()]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel(), new Pixel('purple'),new Pixel()],[new Pixel(), new Pixel('purple'),new Pixel()],[new Pixel('purple'),new Pixel('purple'),new Pixel('purple')]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel(),new Pixel(),new Pixel('purple')], [new Pixel('purple') ,new Pixel('purple'),new Pixel('purple')], [new Pixel(),new Pixel(),new Pixel('purple')]], centerX: -1, centerY: -1},
	//	],	
	"leftZ": [
			{piece:[[new Pixel(), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('blue'), new Pixel('blue'), new Pixel()], [new Pixel(), new Pixel('blue'), new Pixel('blue')]], centerX: -1, centerY: -1},
			{piece:[[new Pixel(), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel()]], centerX: 0, centerY: -1},
			{piece:[[new Pixel('blue'), new Pixel('blue'), new Pixel()], [new Pixel(), new Pixel('blue'), new Pixel('blue')]], centerX: -1, centerY: -1}
		],
	//"rightL4": [
	//		{piece:[[new Pixel('green'), new Pixel()],[new Pixel('green'), new Pixel()],[new Pixel('green'), new Pixel()], [new Pixel('green'), new Pixel('green')]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel(), new Pixel(), new Pixel(), new Pixel('green')], [new Pixel('green'), new Pixel('green'), new Pixel('green'), new Pixel('green')]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel('green'), new Pixel('green')], [new Pixel(), new Pixel('green')], [new Pixel(), new Pixel('green')], [new Pixel(), new Pixel('green')]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel('green'), new Pixel('green'), new Pixel('green'), new Pixel('green')], [new Pixel('green'), new Pixel(), new Pixel(), new Pixel()]], centerX: -1, centerY: 0}
	//	],
	//"Plus": [
	//		{piece:[[new Pixel(),new Pixel('purple'),new Pixel()],[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel(),new Pixel('purple'),new Pixel()],[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel(),new Pixel('purple'),new Pixel()],[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel(),new Pixel('purple'),new Pixel()],[new Pixel('purple'), new Pixel('purple'),new Pixel('purple')],[new Pixel(),new Pixel('purple'),new Pixel()]], centerX: -1, centerY: -1},
	//	],
	//"line5": [
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan'),new Pixel('cyan'), new Pixel('cyan')]], centerX: -2, centerY: 0},
	//		{piece:[[new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')], [new Pixel('cyan')]], centerX: 0, centerY: -2},
	//		{piece:[[new Pixel('cyan'), new Pixel('cyan'),new Pixel('cyan'),new Pixel('cyan'), new Pixel('cyan')]], centerX: -2, centerY: 0},
	//		{piece:[[new Pixel('cyan')], [new Pixel('cyan')],[new Pixel('cyan')],[new Pixel('cyan')], [new Pixel('cyan')]], centerX: 0, centerY: -2}
	//	],
	//"leftL4": [
	//		{piece:[[new Pixel(), new Pixel('red')],[new Pixel(), new Pixel('red')],[new Pixel(), new Pixel('red')], [new Pixel('red'), new Pixel('red')]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel('red'), new Pixel('red'), new Pixel('red'), new Pixel('red')], [new Pixel(), new Pixel(), new Pixel(), new Pixel('red')]], centerX: -1, centerY: 0},
	//		{piece:[[new Pixel('red'), new Pixel('red')], [new Pixel('red'), new Pixel()], [new Pixel('red'), new Pixel()], [new Pixel('red'), new Pixel()]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel('red'), new Pixel(), new Pixel(), new Pixel()], [new Pixel('red'), new Pixel('red'), new Pixel('red'), new Pixel('red')]], centerX: -1, centerY: -1}
		//],
	//"leftThumb": [
	//		{piece:[[new Pixel(), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')]], centerX: 1, centerY: -1},
	//		{piece:[[new Pixel('blue'), new Pixel('blue'), new Pixel('blue')], [new Pixel(), new Pixel('blue'), new Pixel('blue')]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel('blue')], [new Pixel('blue'), new Pixel()]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel('blue'), new Pixel('blue'), new Pixel()], [new Pixel('blue'), new Pixel('blue'), new Pixel('blue')]], centerX: 0, centerY: -1}
	//	],
	"rightZ": [
			{piece:[[new Pixel('teal'), new Pixel()], [new Pixel('teal'), new Pixel('teal')], [new Pixel(), new Pixel('teal')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal'), new Pixel()]], centerX: -1, centerY: -1},
			{piece:[[new Pixel('teal'), new Pixel()], [new Pixel('teal'), new Pixel('teal')], [new Pixel(), new Pixel('teal')]], centerX: 0, centerY: -1},
			{piece:[[new Pixel(), new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal'), new Pixel()]], centerX: -1, centerY: -1}
	//	],	
	//"rightThumb": [
	//		{piece:[[new Pixel('teal'), new Pixel()], [new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal')]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel(), new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal'), new Pixel('teal')]], centerX: -1, centerY: -1},
	//		{piece:[[new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal')], [new Pixel(), new Pixel('teal')]], centerX: 0, centerY: -1},
	//		{piece:[[new Pixel('teal'), new Pixel('teal'), new Pixel('teal')], [new Pixel('teal'), new Pixel('teal'), new Pixel()]], centerX: -1, centerY: -1}

	]
};
let b = new Board();
let score = 0;
let nextPieceIdx = -2;

let playerPiece = {
	piece: PIECES['leftL'][0],
	x: 4,
	y: b.HEIGHT - 1,
	pieceStr: "leftL",
	pieceIdx: 0
};
let displayTwo = [];
displayTwo.push(getNewPieceStr());
displayTwo.push(getNewPieceStr());

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

const queueLabel = document.createElement('h2');
queueLabel.innerHTML = "Choose Next Piece";
queueLabel.style.color = 'white';
queueLabel.style.fontSize = 35;
queueLabel.style.textAlign = "center";
queueLabel.style.marginLeft = 'auto';
queueLabel.style.marginRight = 'auto';
queueLabel.style.marginBottom = 0;
queueLabel.style.marginTop = '70px';
middleSection.appendChild(queueLabel);


const queueBorder = document.createElement('div');
queueBorder.style.border = '5px inset grey';
queueBorder.style.width = '220px';
queueBorder.style.marginLeft = 'auto';
queueBorder.style.marginRight = 'auto';
queueBorder.style.height = '100px';
queueBorder.style.marginTop = '0px';
middleSection.appendChild(queueBorder);
const displayNext = createDisplayTwoArray();
updateDisplayTwoVisual();

//Making tetris score label
const scoreLabelDiv = document.createElement("div");
scoreLabelDiv.style.position = "fixed";
scoreLabelDiv.style.backgroundColor = "gray";
scoreLabelDiv.style.border = "5px inset lightgray";
scoreLabelDiv.style.top = "0px";
scoreLabelDiv.style.left = "0px";
leftSection.appendChild(scoreLabelDiv);
const scoreLabel = document.createElement('h1');
scoreLabel.style.color = 'black';
scoreLabel.style.textAlign = "left";
scoreLabel.style.top = "0px";
scoreLabel.style.marginTop = "0px";
scoreLabel.style.marginBottom = "0px";
scoreLabel.style.paddingRight = "20px";
scoreLabel.innerHTML = 'Score: 0pts';
scoreLabelDiv.appendChild(scoreLabel);

//Making tetris board
const table = document.createElement("table");
table.id = 'table';
table.style.marginTop = '5%';
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';
table.style.border = ' 8px inset gray';
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
    cell.style.backgroundColor = `gray`;
    row.appendChild(cell);
    const img = document.createElement('img');
    img.id = `img${i},${j}`;
    img.style.left = 0;
    img.style.top = 0;
    img.style.padding = 0;
    img.style.width = '100%';
    img.style.height = '100%';
    img.src = 'https://www.evan.umasscreate.net/pixels/gray.png';
    cell.appendChild(img);
  }
}
middleSection.appendChild(table);


function createDisplayTwoArray(){
	let array = [];
	for(let i = 0 ; i < 2 ; i++){
		let newImage = document.createElement('img');
		newImage.style.width = '100px';
		newImage.style.height = '100px';
		newImage.style.paddingLeft = '10px';
		newImage.style.float = "left";
		queueBorder.appendChild(newImage);
		array.push(newImage);
	}
	return array;
}

function updateScoreVisual(score){
	if(score === 1){
		scoreLabel.innerHTML = `Score: 1 pt`;
	} else {
		scoreLabel.innerHTML = `Score: ${score} pts`;
	}
}

function highlight(){
    let defaultOutline = 'none';
	for(let i = 0 ; i < displayTwo.length; i++){
		let queueElement = displayNext[i];
		queueElement.src = PIECES_IMG[displayTwo[i]];
		queueElement.style.outline = defaultOutline;
		if(i === nextPieceIdx){
	    	queueElement.style.outline = '#f00 solid 4px';
		}
	}	
}

function updateDisplayTwoVisual(){
	for(let i = 0 ; i < displayTwo.length; i++){
		let queueElement = displayNext[i];
		queueElement.src = PIECES_IMG[displayTwo[i]];
		queueElement.outline = 'none';
	}
}
//updateVisuals(board: Board): void
function updateVisuals(board, playerPiece, showPlayerPiece=true, showGhostPlayerPiece=true){
	//draws board
	for(let i = 0; i < board.HEIGHT; i++){
		for(let j = 0; j < board.WIDTH; j++){
			document.getElementById(`img${board.HEIGHT - (i + 1)},${j}`).src = `https://www.evan.umasscreate.net/pixels/${board.board[i][j].color()}.png`;
			document.getElementById(`img${board.HEIGHT - (i + 1)},${j}`).style.opacity = 1;
		}
	}


	//draws playerPiece
	if(showPlayerPiece){

		//draw ghost piece
		if(showGhostPlayerPiece){
			let ghostHeight = playerPiece.y;
			let keepGoing = true;
			while(keepGoing){
				ghostHeight -= 1;
				for(let i = 0; i < playerPiece.piece.piece.length; i++){
					for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
						if(!playerPiece.piece.piece[i][j].isEmpty()){
							let xPos = playerPiece.x-j-playerPiece.piece.centerX;
							let yPos = ghostHeight-i-playerPiece.piece.centerY;
							if(yPos < 0){
								keepGoing = false;
								break;
							}
							if(yPos >= b.HEIGHT){
								continue;
							}
							if(!board.board[yPos][xPos].isEmpty()){
								keepGoing = false;
							}
						}
					}
				}
				if(!keepGoing){
					ghostHeight += 1;
				}
			}
			for(let i = 0; i < playerPiece.piece.piece.length; i++){
				for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
					if(!playerPiece.piece.piece[i][j].isEmpty()){
						let xPos = playerPiece.x-j-playerPiece.piece.centerX;
						let yPos = ghostHeight-i-playerPiece.piece.centerY;
						if(yPos < 0 || yPos >= b.HEIGHT){
							continue;
						}
						document.getElementById(`img${board.HEIGHT  - (yPos+1)},${xPos}`).src = `https://www.evan.umasscreate.net/pixels/${playerPiece.piece.piece[i][j].color()}.png`;
						
						if(PAUSED){
							document.getElementById(`img${board.HEIGHT  - (yPos+1)},${xPos}`).style.opacity = 0;
							GHOST_VISIBLE = false;
							//ensuring invisbility of ghost during pause menu
						}else{
							document.getElementById(`img${board.HEIGHT  - (yPos+1)},${xPos}`).style.opacity = .25;
						}
					}
				}
			}
		}

		//draw player piece
		for(let i = 0; i < playerPiece.piece.piece.length; i++){
			for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
				if(!playerPiece.piece.piece[i][j].isEmpty()){
					let xPos = playerPiece.x-j-playerPiece.piece.centerX;
					let yPos = playerPiece.y-i-playerPiece.piece.centerY;
					if(yPos < 0 || yPos >= b.HEIGHT){
						continue;
					}
					document.getElementById(`img${board.HEIGHT  - (yPos+1)},${xPos}`).src = `https://www.evan.umasscreate.net/pixels/${playerPiece.piece.piece[i][j].color()}.png`;
					document.getElementById(`img${board.HEIGHT  - (yPos+1)},${xPos}`).style.opacity = 1;

				}
			}
		}

	}
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


function getNewPieceStr(){
	return Object.keys(PIECES)[Math.floor(Math.random() * Object.keys(PIECES).length)];
}

function displayNextTwo(){
	if(nextPieceIdx === -2){
		if(Math.random() < 0.5){
			nextPieceIdx = 0;
		}else{
			nextPieceIdx = 1;
		}
	}
	let out = displayTwo.splice(nextPieceIdx,1);
	displayTwo.push(getNewPieceStr());
	return out;
}


let framesUntilPlace = 1;
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
			console.log("placed down");
			nextPieceIdx = -2;
			updateDisplayTwoVisual();
			waitUntilNextSelected = false;
			selectionTimer =   setTimeout(function(){console.log('in timer');setPlayerPiece(displayNextTwo());updateDisplayTwoVisual(); waitUntilNextSelected = true;}, 2000);
			playerPiece = {};
			score += 1;
			console.log(playerPiece);
			if(waitUntilNextSelected){
				console.log("player piece is :");
				console.log(playerPiece.pieceStr);
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
								//console.log(playerPiece.y-i-playerPiece.piece.centerY);
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
			}
		} else {
			framesUntilPlace--;
		}
	} else {
		framesUntilPlace = 1;
	}
	return false;
}

function lose(){
	clearInterval(gameInterval);
	document.onkeydown = e => {};
	updateVisuals(b, playerPiece);

	const dimDiv = document.createElement('div');
	dimDiv.id = "dimDiv";
	//needed^^ for deletion at replay
	dimDiv.style.opacity = 0.5;
	dimDiv.style.position = "fixed";
	dimDiv.style.marginLeft = 'auto';
	dimDiv.style.marginRight = 'auto';
	dimDiv.style.top = "0px";
	dimDiv.style.backgroundColor = "black";
	dimDiv.style.width = "100%";
	dimDiv.style.height = "100%";
	leftSection.appendChild(dimDiv);


	const loseText = document.createElement("h1");
	loseText.id = "loseText";
	//needed^^ for deletion at replay
	loseText.style.color = "white";
	loseText.style.position = "fixed";
	loseText.innerHTML = `<font style='color: Crimson'>Game Over</font><br><font style='font-size: 50px;'>${score} points</font>`;
	loseText.style.margin = "auto";
	loseText.style.zIndex = "1000";
	loseText.style.width = "100%";
	loseText.style.textAlign = "center";
	loseText.style.fontSize = "150px";
	loseText.style.top = 100;
	document.body.appendChild(loseText);
	scoreLabel.style.display = 'none';
	scoreLabelDiv.style.display = 'none';
  	socket.emit('leaderboardScore', score);

}

socket.on('leaderboardSend', (data, rank) => {
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
  		let leaderboardTable = document.createElement("table");
  		leaderboardTable.id = 'leaderboardTable';
  		//needed^^ for deletion at replay
  		leaderboardTable.style.position = 'relative';
  		leaderboardTable.style.top = 400;
  		leaderboardTable.style.marginLeft = 'auto';
  		leaderboardTable.style.marginRight = 'auto';
  		leaderboardTable.style.border = '10px groove gray';
  		leaderboardTable.style.color = 'black';
  		leaderboardTable.style.zIndex = '5000';
  		leaderboardTable.style.backgroundColor = 'black';
  		document.body.appendChild(leaderboardTable);
  		const leaderboardBody = document.createElement('tbody');
  		const titleRow = document.createElement('tr');
  		titleRow.style.backgroundColor = 'darkgray';
  		leaderboardBody.appendChild(titleRow);
  		const rankTitle = document.createElement('td');
  		rankTitle.style.minWidth = '10px';
  		titleRow.appendChild(rankTitle);
  		const nameTitle = document.createElement('td');
  		nameTitle.innerHTML = "<strong>Name</strong>";
  		titleRow.appendChild(nameTitle);
  		const scoreTitle = document.createElement("td");
  		scoreTitle.innerHTML = "<strong>Score</strong>";
  		titleRow.appendChild(scoreTitle);

  		leaderboardTable.appendChild(leaderboardBody);
  		for(let i = 0; i < data.length; i++){
  			const row = document.createElement('tr');
  			row.style.color = 'black';
  			if(i % 2 === 0){
  				row.style.backgroundColor = 'gray';
  			} else {
  				row.style.backgroundColor = 'lightgray';
  			}
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

  		const playAgainButton = document.createElement('div');
  		playAgainButton.id = 'playAgainButton';
  		//needed^^ for deletion at replay
  		playAgainButton.innerHTML = 'PLAY AGAIN  &#8634';
  		playAgainButton.style.backgroundColor = "rgb(0,120,45)";
  		playAgainButton.style.color = 'white';
  		playAgainButton.style.top = 430;
  		playAgainButton.style.position = 'relative';
  		playAgainButton.style.textAlign = 'center';
  		playAgainButton.style.border = '5px solid rgb(0,89,33)';
  		playAgainButton.style.fontSize= '80px';
  		playAgainButton.style.width = "60%";
  		playAgainButton.style.marginLeft = 'auto';
  		playAgainButton.style.marginRight = 'auto';
  		//notify user that this is a button upon mouseover
  		playAgainButton.style.cursor = 'pointer';
  		document.body.appendChild(playAgainButton);
  		playAgainButton.onclick = playAgain;

  	});

function playAgain(){
	//restarting everything
	b = new Board();
	score = 0;
	let displayTwo = [];
	displayTwo.push(getNewPieceStr());
	displayTwo.push(getNewPieceStr());
	updateVisuals(b, playerPiece);
	//time to delete the end game graphics
	document.getElementById("dimDiv").remove();
	document.getElementById("loseText").remove();
	document.body.removeChild(document.getElementById("leaderboardTable"));
	document.body.removeChild(document.getElementById("playAgainButton"));
	//leaderboard and play again button were reappearing in multiples
	document.onkeydown = enableOnKeyDown;
	scoreLabel.style.display = "initial";
	gameInterval = setInterval(gameIntervalFunction, SPEED_DOWNWARDS);


}

const gameIntervalFunction = () => {
	if(!waitUntilNextSelected){
		return
	}
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
	updateVisuals(b, playerPiece);
	updateScoreVisual(score);
};

let gameInterval = setInterval(gameIntervalFunction, SPEED_DOWNWARDS);

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

function quickDrop(){
	let keepGoing = true;
	while(keepGoing){
		playerPiece.y -= 1;
		for(let i = 0; i < playerPiece.piece.piece.length; i++){
			for(let j = 0; j < playerPiece.piece.piece[i].length; j++){
				if(!playerPiece.piece.piece[i][j].isEmpty()){
					let xPos = playerPiece.x-j-playerPiece.piece.centerX;
					let yPos = playerPiece.y-i-playerPiece.piece.centerY;
					if(yPos < 0){
						keepGoing = false;
						break;
					}
					if(yPos >= b.HEIGHT){
						continue;
					}
					if(!b.board[yPos][xPos].isEmpty()){
						keepGoing = false;
					}
				}
			}
		}
		if(!keepGoing){
			playerPiece.y += 1;
		}
	}
}

function pause(){
	if(!PAUSED){
		PAUSED = true;
		if(LEADERBOARD_QUALIFY){
			LEADERBOARD_QUALIFY= false;
		}
		updateVisuals(b, playerPiece);
			//once you have paused, you no longer qualify to be on the leaderboard
		clearInterval(gameInterval);	
		//freezing time
		document.onkeydown = pauseOnKeyDown;
			//disabling all functions except unpause
		//document.getElementById('table').style.display = 'none';
		const dimPause = document.createElement('div');
		dimPause.id = "dimPause";
		//needed^^ for deletion at unpause
		dimPause.style.opacity = 1.0;
		dimPause.style.position = "fixed";
		dimPause.style.marginLeft = 'auto';
		dimPause.style.marginRight = 'auto';
		dimPause.style.top = "0px";
		dimPause.style.backgroundColor = "black";
		dimPause.style.width = "100%";
		dimPause.style.height = "100%";
		leftSection.appendChild(dimPause);

		const pauseText = document.createElement("h1");
		pauseText.id = "pauseText";
		//needed^^ for deletion at unpause
		pauseText.style.color = "white";
		pauseText.style.position = "fixed";
		pauseText.innerHTML = `<font style='color: Crimson'>PAUSE</font><br><font style='font-size: 50px;'>${score} points</font>`;
		pauseText.style.margin = "auto";
		pauseText.style.zIndex = "1000";
		pauseText.style.width = "100%";
		pauseText.style.textAlign = "center";
		pauseText.style.fontSize = "150px";
		pauseText.style.top = 100;
		document.body.appendChild(pauseText);

		const pauseInstruct = document.createElement("h1");
		pauseInstruct.id = "pauseInstruct";
		//needed^^ for deletion at unpause
		pauseInstruct.style.color = "white";
		pauseInstruct.style.position = "fixed";
		pauseInstruct.innerHTML = `<font style='color: white'>Press 'p' to Continue</font>`;
		pauseInstruct.style.margin = "auto";
		pauseInstruct.style.zIndex = "1000";
		pauseInstruct.style.width = "100%";
		pauseInstruct.style.textAlign = "center";
		pauseInstruct.style.fontSize = "15px";
		pauseInstruct.style.top = 250;
		document.body.appendChild(pauseInstruct);
		
	}else{
		document.getElementById("dimPause").remove();
		document.body.removeChild(document.getElementById("pauseText"));
		document.body.removeChild(document.getElementById("pauseInstruct"));
		document.onkeydown = enableOnKeyDown;
		//enable buttons again
		gameInterval = setInterval(gameIntervalFunction, SPEED_DOWNWARDS);
		//continue time

		PAUSED = false;
	}
}

const enableOnKeyDown = function (e) {
	//function mapping pressing of keys, disabled at game over
  e = e || window.event;
	// use e.keyCode
  if (e.key === 'ArrowDown') {
		move("down");
  } else if (e.key === 'ArrowLeft') {
		move("left");
  } else if (e.key === 'ArrowRight') {
		move("right");
  } else if(e.key === 'ArrowUp'){
		quickDrop();
	} else if(e.key === 'a' || e.key === 'A'){
		rotatePlayerPiece(playerPiece, 'left');
	} else if(e.key === 'd' || e.key === 'D'){
		rotatePlayerPiece(playerPiece, 'right');
	} else if(e.key === 'p' || e.key === 'P'){
		pause();
	} else if(e.key === '1'){
		//selectionTimer = null;
		//waitUntilNextSelected = true;
		nextPieceIdx = 0;
	} else if (e.key === '2'){
		//selectionTimer = null;
		//waitUntilNextSelected = true;
		nextPieceIdx = 1;
	} 
	highlight();
	setTimeout(() => updateVisuals(b, playerPiece),0);
};

const pauseOnKeyDown = function (e) {
	//function mapping pressing of keys, disabled at game over
  e = e || window.event;
	// use e.keyCode
	if(e.key === 'p' || e.key === 'P'){
		pause();
  } 
	setTimeout(() => updateVisuals(b, playerPiece), 0);
};


document.onkeydown = enableOnKeyDown;

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

		updateVisuals(b, playerPiece);
	};
}
