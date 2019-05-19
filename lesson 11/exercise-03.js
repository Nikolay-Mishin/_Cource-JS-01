/* №3 (***)

  - Взять за основу решение `задание №2`.
  - Изучть паттер [memento](https://refactoring.guru/ru/design-patterns/memento). Достаточно понять суть не вникая в особенности реализации на других языках программирования.
  - Добавить обработку комманд связанных с паттерном `memento`.
  - Примечание: если будут сложности с выбором команд для паттерна `memento`, то пишите учителю. */

// https://repl.it/@chl9252/DZ-11-3
// https://repl.it/@Kocherov_M/11-03

// Comand

const moveToLeftCommand = {
	type: 'move',
	direct: 'left',
	dist: 5
}

const increaseCommand = {
	type: 'increase'
}

const decreaseCommand = {
	type: 'decrease'
}

const resetCommand = {
	type: 'reset'
}

const colorizeCommand = {
	type: 'colorize',
	colorNew: 'red'
}

const snapshotCommand = {
	type: 'snapshot'
}

const restoreCommand = {
	type: 'restore'
}

commandProcess(increaseCommand)


commandProcess(snapshotCommand)

commandProcess(increaseCommand)
commandProcess(increaseCommand)
commandProcess(increaseCommand)
commandProcess(increaseCommand)

commandProcess(decreaseCommand)
commandProcess(decreaseCommand)

commandProcess(snapshotCommand)

commandProcess(colorizeCommand)

commandProcess(restoreCommand)

commandProcess(restoreCommand)


// commandProcess(resetCommand)
