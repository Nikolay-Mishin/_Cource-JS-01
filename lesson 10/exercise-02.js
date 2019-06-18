/* 
https://repl.it/@Kocherov_M/10-02

https://repl.it/@chl9252/DZ-10-2
*/

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

addBalls(10)

function addBalls(count){
	for (let i = 0; i < count; i++) {
		drawBall(getRandNumber(20, 480), getRandNumber(20, 480), getRandColor())
	}
}

function drawBall(x, y, color='red') {
	context.beginPath()
	context.arc(x, y, 20, 0, Math.PI*2)
	context.closePath()
	context.fillStyle = color
	context.fill()
}

function getRandNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

function getRandColor() {
	const r = Math.floor(Math.random() * (256)),
		g = Math.floor(Math.random() * (256)),
		b = Math.floor(Math.random() * (256))
	return `rgb(${r}, ${g} ,${b})`
}