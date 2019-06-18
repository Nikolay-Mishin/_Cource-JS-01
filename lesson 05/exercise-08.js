// https://repl.it/@chl9252/DZ-5-8
// https://repl.it/@Kocherov_M/05-08

/* №8 (**)

  - Отсортировать `li` элементы по факту наличия класса `first`:
    - все `li` элементы с классом `first` перенести в `ul.first`
    - остальные `li` перенести в `ul` без классов.
  - Подсказа: использовать `querySelectorAll`, `classList.contains` и `insertBefore`. */

const liElement = document.querySelectorAll('li');
const ulFirst = document.querySelector('ul.first');
const ul = document.querySelectorAll('ul')[1];

liElement.forEach(item => {
	if (item.classList.contains('first')) {
		ulFirst.insertBefore(item, null);
	}
    else {
		ul.insertBefore(item, null);
	}
});