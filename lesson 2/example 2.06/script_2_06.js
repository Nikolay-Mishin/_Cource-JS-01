// Тема: разные виды условных операторов

const age = parseInt(prompt('Сколько вам лет?', 25))

if (age > 20) {
	console.log('Мы можем продать вам и алкоголь и табак. Выбирайте.')
}

else if (age >= 18) {
	console.log('Мы можем продать вам только табак. Выбирайте.')	
}

else if (age < 16) {
	console.log('Ты почему не в школе! Полиция! Тут прогульщик!')
}

else {
	console.log('Приходи через пару лет. Может быть что-нибудь тебе и продадим.')
}