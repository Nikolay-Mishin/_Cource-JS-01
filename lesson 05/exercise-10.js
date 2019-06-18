// https://repl.it/@chl9252/DZ-5-10

/* №10 (***)

  - Проанализировать DOM и заменить всю элементарную арифметику на результат вычисления.
  - Обратите внимание, что арифметика встречается как в текстовых узлах, так и в стилях.
  - Обязательно использовать перебор узлов. */

let arrEl = document.querySelectorAll('p');

for (let i=0; i<arrEl.length; i++) {
    let replace = arrEl[i].textContent;
    arrEl[i].textContent = regex(replace);

    if (arrEl[i].attributes.style) {
        replace = arrEl[i].attributes.style.textContent;
        arrEl[i].attributes.style.textContent = regex(replace);
        replace = arrEl[i].attributes.style.textContent;
        arrEl[i].attributes.style.textContent = regex(replace);
    }
}

arrEl = document.querySelector('title');
let replace = arrEl.textContent;
arrEl.textContent = regex(replace);

function regex(str1) {
	const regex1 = RegExp(/\d{1,3}[\+|\*|\-|\/]\d{1,3}/g);
	let arrS;
	let arrE;

	while ((array1 = regex1.exec(str1)) !== null) {
		arrS = `${array1.index}`;
		arrE = `${regex1.lastIndex}`;
		let rep1 = str1.substr(0, arrS);
		let rep2 = str1.substr(arrE);
		str1 = rep1+ eval(`${array1[0]}`) +rep2;
	}
    
	return str1;
}