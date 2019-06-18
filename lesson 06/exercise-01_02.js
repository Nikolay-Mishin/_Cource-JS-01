// https://repl.it/@chl9252/DZ-6-1-2
// https://repl.it/@Kocherov_M/06-01-02

/* №1 (*)

  - Привяжите обработчик события `onclick` ко всем элементам `td` который меняет цвет заливки при каждом нажатии.
  - Цвета меняются замкнутой цепочкой указанной в стилях. 
  
    №2 (*)

  - Доработать программу из задания 1 так чтобы при клике с зажатой клавишей `ctrl` `td` становился прозрачным.
  - Подсказка: можно просто удалить все стили. */

const tdElements = document.querySelectorAll('td')
const styles = ['greenSquare', 'redSquare', 'blueSquare', 'greenSquare']
for ( const tdElement of tdElements ) {
	tdElement.addEventListener('click', function(event) {
		if (this.className) {
			const pos = styles.indexOf(this.className)
			this.className = styles[pos+1]
		} else {
			this.className = styles[0]
		}
		if (event.ctrlKey) {
			this.className = ''
		}
	})
}