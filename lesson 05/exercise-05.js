// https://repl.it/@chl9252/DZ-5-5
// https://repl.it/@Kocherov_M/05-05

/* №5 (*)

  - Императивно создать таблицу умножения и вставить ее в `div#application`.
  - Подсказка: использовать `Object.createElement` и `textContent`.
  - В таблице использовать стандартную верстку элементами `table`, `tr`, `td` и `th`. */

const applicationElement = document.getElementById('application');
const table = document.createElement('table');
applicationElement.appendChild(table);

for (let y = 0; y < 10; y++) {
	const tableRow = document.createElement('tr');

	table.appendChild(tableRow);
	tableRow.classList.add('row');

	for (let x = 0; x < 10; x++) {
		let result = x * y;

		if (x === 0) {
			result = y;
		}
		if (y === 0) {
			result = x;
		}

		const tableData = document.createElement('td');
        
		tableRow.appendChild(tableData);
		tableData.textContent = result;
		tableData.classList.add('data');
	}
}