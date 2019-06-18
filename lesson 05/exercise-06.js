// https://repl.it/@chl9252/DZ-5-6
// https://repl.it/@Kocherov_M/05-06

/* №6 (*)

  - Декларативно создать таблицу умножения и вставить ее в `div#application`.
  - Подсказка: использовать `Object.createElement` и `innerHTML`.
  - В таблице использовать стандартную верстку элементами `table`, `tr`, `td` и `th`.
  - Пример декларативного создания виртуального DOM есть в примерах. */

const applicationElement = document.getElementById('application');
const virtualDOM = createVirtualDOM(`
	<table><tr class="row"><td class="data">0</td><td class="data">1</td><td class="data">2</td><td class="data">3</td><td class="data">4</td><td class="data">5</td><td class="data">6</td><td class="data">7</td><td class="data">8</td><td class="data">9</td></tr><tr class="row"><td class="data">1</td><td class="data">1</td><td class="data">2</td><td class="data">3</td><td class="data">4</td><td class="data">5</td><td class="data">6</td><td class="data">7</td><td class="data">8</td><td class="data">9</td></tr><tr class="row"><td class="data">2</td><td class="data">2</td><td class="data">4</td><td class="data">6</td><td class="data">8</td><td class="data">10</td><td class="data">12</td><td class="data">14</td><td class="data">16</td><td class="data">18</td></tr><tr class="row"><td class="data">3</td><td class="data">3</td><td class="data">6</td><td class="data">9</td><td class="data">12</td><td class="data">15</td><td class="data">18</td><td class="data">21</td><td class="data">24</td><td class="data">27</td></tr><tr class="row"><td class="data">4</td><td class="data">4</td><td class="data">8</td><td class="data">12</td><td class="data">16</td><td class="data">20</td><td class="data">24</td><td class="data">28</td><td class="data">32</td><td class="data">36</td></tr><tr class="row"><td class="data">5</td><td class="data">5</td><td class="data">10</td><td class="data">15</td><td class="data">20</td><td class="data">25</td><td class="data">30</td><td class="data">35</td><td class="data">40</td><td class="data">45</td></tr><tr class="row"><td class="data">6</td><td class="data">6</td><td class="data">12</td><td class="data">18</td><td class="data">24</td><td class="data">30</td><td class="data">36</td><td class="data">42</td><td class="data">48</td><td class="data">54</td></tr><tr class="row"><td class="data">7</td><td class="data">7</td><td class="data">14</td><td class="data">21</td><td class="data">28</td><td class="data">35</td><td class="data">42</td><td class="data">49</td><td class="data">56</td><td class="data">63</td></tr><tr class="row"><td class="data">8</td><td class="data">8</td><td class="data">16</td><td class="data">24</td><td class="data">32</td><td class="data">40</td><td class="data">48</td><td class="data">56</td><td class="data">64</td><td class="data">72</td></tr><tr class="row"><td class="data">9</td><td class="data">9</td><td class="data">18</td><td class="data">27</td><td class="data">36</td><td class="data">45</td><td class="data">54</td><td class="data">63</td><td class="data">72</td><td class="data">81</td></tr></table>
`);

function createVirtualDOM (str) {
	const div = document.createElement('div');
	div.innerHTML = str;
	return div.firstElementChild;
}

applicationElement.appendChild(virtualDOM);