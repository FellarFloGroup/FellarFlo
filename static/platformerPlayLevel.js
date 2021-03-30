class Sprite{
	constructor(x, y, img, dx=0, dy=0){
		this.x = x;
		this.y = y;
		this.img = img;
		this.dx = dx;
		this.dy = dy;
	}

	move(board){

	}

	display(ctx, cameraX, cameraY){
		ctx.drawImage(this.img, this.x - cameraX, this.y + cameraY);
	}
}

class Board{
	constructor(){
		this.board = {};
	}
	isEmpty(x, y){
		return this.get(x, y).length === 0;
	}
	get(x, y){
		x = Math.floor(x);
		y = Math.floor(y);
		x -= x % 50;
		y -= y % 50;
		if(Object.keys(this.board).includes(x.toString()) && Object.keys(this.board[x]).includes(y.toString())){
			return this.board[x][y];
		} else {
			return [];
		}
	}
	add(sprite){
		let x = Math.floor(sprite.x);
		let y = Math.floor(sprite.y);
		x -= x % 50;
		y -= y % 50;
		if(!Object.keys(this.board).includes(x)){
			this.board[x] = {};
		}
		if(!Object.keys(this.board[x]).includes(y)){
			this.board[x][y] = [];
		}
		this.board[x][y].push(sprite);
	}
	display(cameraX, cameraY, ctx){
		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		for(let i = cameraX - 25; i < cameraX + window.innerWidth + 25; i+=50){
			for(let j = cameraY - 25; j < cameraY + window.innerHeight + 25; j+=50){
				if(i === 10 && j === 110){
					console.log(this.get(i, j));
				}
				this.get(i, j).forEach(e => e.display(ctx, cameraX, cameraY));
			}
		}
	}
}


const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "fixed";
canvas.style.left = "0px";
canvas.style.top = "0px";
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const img = document.createElement('img');
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEUAX93///////0AVtwAXd2pvO8AWdwAW9wAUtsAU9vr9P0AWNwAWd0BX9wAVtsAT9v0+f3g6/mmwfC/0/RNhuQATtydu+9mlOb4/f0vcuAebOFXiuUjb+GPr+zO3fbS4vewyPKApuxFgOK/1PJ0nehbkefe6flqmOiYuewAZd82d+GSs+2BqOtzn+kyceFVieVtXsqDAAAIEUlEQVR4nO2cCZPaOBOGLVlryQYf3OawzTFAYGD2//+7TwZjtYw0yVKbzGq+flKpmtiyB73VUh9q4nkIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8n8OF30e9r76U7iGv60IiYr0qz+HWwQzSiR0h7r9A1if3GQj5K3/1Z/FIfpX0lCFX/1ZHCL56yFbhLL9Or6Szf/qz+IQKNtLoGwvgbK9BMr2EijbS6BsL4GyvQTK9hIo20ugbC+Bsr0EyvYSRtkYCySM/fRpxrgcyLlp5OeP/8LL/8t0ZYuZH4aL7f543G8Xftj7ZHaBL9h8PDvOxnMmkj6LwT3GReCFfmx+Ut7ty7sOK9eRLRCLyy5rrtBsd1kJc9GX+clyeMjrUfJvPhjugxDIEC6rPI+mgVkZf1zKu0OP/4YJ/Rk02QJxrCjRqY5CN6QaJhbDrBn5eCAbrkQzME5/NLqfTMqI4v5QtnLW3oBsIj1GhHZloyQ6plzXLfHW5GkkpXR0ullc3N83YtJB+KxMcmzvppZV/J8HyOY9WVojB6kW8BiVTa5P4j7GFmktU1g+JKej7oFY3D+rh8euLlMlW5bbxJDTP6rZs2D3bJOtxJUXSNkideVd6L+QxZl6+BL84en+WyjZiE20263p5DY89vgpqq3INpBmc+kkB1RtfHstHmRhRdXN4zeQ7VPo+mZvjC+ynwzMz/3kXclK6TwAO5hYK0ultO/+3qbZTL3BQ5OSP06FtDW5xJ5G6t6BknzF/UhpQyJWW+md8EKAahtnO09MsjWCdT3l1ZeBx0C7etPryaNGAV9AIcv0EZj0xlDhtbv9E13ZaisbDGfnxeI8mw40LcmcizUQSf60u4w/Fh/bzYhq13eTYAnVHDb68FMOXlgJZ8M2g2y7beoHXGabfT/d7qDVHCZ/w5F5wcOeHMh4T/iXDL7jGIgCGuHbzS3otpp57qrWkY2SbJy2sVTMeDoG4QLdwGmvg6Tds+pMdthucZTmPpuMwC5GtrXLTEfQJM+uetGajmwV70wm4BV0feqna6obC0tnVN1/9z1xABrnMfPEO/xNR6frVLpshu2Gi0rbzhr5Zs+NNsnfrX3V5sZP0FAPoT9rVb37ZZeBskkX+JS011mBivnbaRemWYdt09cttuhvoZ9YL4ATlc7190/td6Jko7bthm87MQYl5SQ27edq85JuUr77quyTUOgzIlslzhWgbGthnky47gRr9MOcgrOTEvjk1SlB106bF6xcTeEfANnIwhwRxMGqY20ji76edKcPrr26VmIqqlC6dDY7eABkK627tCj1iVvrPfzcjlnXnpL1nzJYaavGjdEtgEuwZ4i9jTbzzNquGqet+6hu2vD5U7GEjia/YyJ/FiCbvUTN5tq8d3ZrCdvdrDkI82ddczMVfJ0DyJZYvRvj2sT/Suyve39YV94c6Ykfumrm4wXXAEXxTzrFE22LKuw7OljOp7tssYxKYGK7dTmnavlF2aJflC24tntZI5snLlC1yHIG6BhJmyjmn8jWy6FsP+yLNCnafL4pcARLbY06XS5SgFVlDPxvyDAWMrIL7LeBW3Y3K61gWcvmcnFSwfftjPbWvZrr7nBg96RppQ9ivegpANl8g6/b8EU7naG1lBN2kiRrqMJYxyQnpeEU+jt4hUnblJDZtizWy6g28XdbJt67tKOK+m3plBjIT+5vb6GqWlwtuiUX3WRoZmtEUkkCOXPQttAxuG8Q8QZv7cwy8+JhPOtO3lJk9Ft9qQxnYn6GoQd8x2jium4sUJVus5PT49X7SGNlTnlNSoaJDECg3Ic3+HzhvFsAh3j0YtBNC1dbw4yf3S70mvSDMelV1b/zxWQKi+t7e+znBmyuavx00zlY8djkYuyTiU5dewvYQI2U2X6qFTfHPS+F5SdbpdMdBDiHI2vRbzsP5A+BWKuTY7rL1chsrCsszipvpWTOww1UWcZqsSetUZlfZGz4dQh20pLGfZrcZ8RYks5AtEop147s1gvRJJiMh/EQnrCsUz6GL71vmnwFDddeFXUEf6NOSqQ4g2Lup0Kk/rkYaD1ZV98H67Du+duf5EAh4v0Iekqa9fkJGCap0tir//SW8Kh16LhusbZM65llh7I85HonER0Jj8/1S5RGVVlFlGr7n0wDwgFUsc12QYuDfOTN6RPm2gfCJhnyOKbTW7UGdUN8MtPMipoGko1IQS8NOEeMPdDiIEdsHXcLLH7KuDs60uhuMuHGGPhD3gUIoes+GhCjxQIu88jZlucGzp6O3jXRaPT42or4VDepSZF6Iex/+AFPB2O46VGydNzcPBaWdjUo3amvrIRLa2t0rW/dHK1anuWTnXOqYAvGu9tO+SBOC2rqAL9d0v6/rWBREdPI+tpgVRdHxEHlpkk3PPNBljX7BiUk/6Okz2rIK+VKzyCZ2GTGlZoX9+Y4ldLni+dlKIYPTT+rwztDzMW4vHtRSpQ9leNuwuV5vX6RtSMfD2RTr0k047q56+ZLx4ZVyERJ7iHL/hsYWw0Xq+mB3rntVIfpSpi2bdYL96Os1ZaSfDRLQBUtHNaqHbbGhJ2F07yOaMaOx22KmPnpaVkMR2U5GhbLU2r/9iIPxfltui7Lcj29noXQTvKY743389TiKOMkkHfFN7G1BhYkfijxk5+dafJADhRypGEgM385V911PfZAEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBkH+d/wH9SGD2/c8xowAAAABJRU5ErkJggg==';
const testSprite = new Sprite(10, 110, img);

const board = new Board();
board.add(testSprite);

board.display(0, 0, ctx);
let cameraX = 0;
let cameraY = 0;
setInterval(() => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	cameraX -= 1;
	board.display(cameraX, cameraY, ctx);
}, 10);