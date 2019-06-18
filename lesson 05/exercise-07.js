// https://repl.it/@chl9252/DZ-5-7
// https://repl.it/@Kocherov_M/05-07

/* №7 (*)

  - Заменить все теги `<color>` на `<span>`.
  - Использовать атрибут цвета тега `color` в качестве `style color`.
  - Гарантируется, что тег `color` содержит единственный атрибут и этот атрибут является именем цвета.
  - Подсказка: использовать `querySelectorAll`, свойства элемента `elements` и `outerHTML`.
  - Например `<color red>Я красный</color>` будет заменено на `<span style='color: red'>Я красный</span>` */

const colorElements = document.querySelectorAll('color');
for (let i = 0; i < colorElements.length; i++) {
	colorElements[i].outerHTML = `<span style='color: ${colorElements[i].attributes[0].name};'>${colorElements[i].innerHTML}</span>`;
}

//Еще вариант

// const applicationElement = document.getElementById('application')
// const count = applicationElement.childElementCount

// for ( let i=0; i<applicationElement.children.length; i++) {
// 	const color = applicationElement.children[0]
// 	const removedElement = color.parentElement.removeChild(color)
// 	const span = document.createElement('span')
// 	span.innerHTML = removedElement.innerHTML
// 	applicationElement.appendChild(span)
// 	span.style.color = removedElement.attributes[0].name
// }