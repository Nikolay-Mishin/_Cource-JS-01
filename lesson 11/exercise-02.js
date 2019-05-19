/* №2 (*)

  - Из примера №6 взять освнову.
  - Реализовать обработку других типов команд:
      - `decrease` - уменьшение радиуса
      - `colorize` - раскрасить в другой цвет
      - `reset` - вернуть точку, размер точки и цвет в изначальное положение.
  - Разработать минимум 1 собственную команду для точки. (можно выполнить в рамках `задания №3`)
  - Продемострировать корректность выполнения комманд. */

// https://repl.it/@chl9252/DZ-11-2
// https://repl.it/@Kocherov_M/11-02

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

commandProcess(increaseCommand)



commandProcess(increaseCommand)
commandProcess(increaseCommand)
commandProcess(increaseCommand)
commandProcess(increaseCommand)

commandProcess(decreaseCommand)
commandProcess(decreaseCommand)


commandProcess(colorizeCommand)

// commandProcess(resetCommand)