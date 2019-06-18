/* 
https://repl.it/@Kocherov_M/10-03

https://repl.it/@chl9252/DZ-10-3
*/

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

const ballRadius = 5

let xPos = []
let yPos = []
let dx = []
let dy = []
const radius = 5

// Указать количество шаров
launchBalls(10)

function launchBalls(number){
	for (let i = 0; i < number; i++) {

		let sinA = Math.random()
		let katetY = radius * sinA
		let katetX = Math.sqrt(radius**2 - katetY**2)
		let xDirection = katetX*getRandNumber(-1, 1)
		let yDirection = katetY*getRandNumber(-1, 1)

		xPos.push(getRandNumber(ballRadius, canvas.width - ballRadius))
		yPos.push(getRandNumber(ballRadius, canvas.height - ballRadius))
		dx.push(xDirection)
		dy.push(yDirection)
	}
	setInterval(moveBall,20,number)
}

function moveBall(number){
	clearCanvas()

	for (let i=0; i<number; i++) {

		if (xPos[i] > canvas.width - ballRadius || xPos[i] < ballRadius) {
			dx[i] *= -1
		}

		if (yPos[i] > canvas.height - ballRadius || yPos[i] < ballRadius) {
			dy[i] *= -1
		}

		xPos[i] = (xPos[i] + dx[i])
		yPos[i] = (yPos[i] + dy[i])

		drawBall(xPos[i], yPos[i])
	}
}

function clearCanvas () {
	canvas.width = canvas.width
}

function drawBall(x, y){
	context.beginPath()
	context.arc(x, y, ballRadius, 0, Math.PI*2)
	context.closePath()
	context.fillStyle = 'blue'
	context.fill()
}

function getRandNumber(min, max) {
	let randomNumber = Math.floor(Math.random() * (max - min)) + min
	if ( randomNumber === 0) {
		randomNumber++
	}
	return randomNumber
}