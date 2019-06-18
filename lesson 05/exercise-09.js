// https://repl.it/@chl9252/DZ-5-9
// https://repl.it/@Kocherov_M/05-09

/* №9 (**)

  - По нажатию кнопки `Add to list` из `input` забирает строка и на ее основе создается `li` элемент.
  - Этот `li` элемент вставляется в `ul`.
  - Вставка происходит в сортировочном формате по возрастанию длины строки.
  - Например после нескольких вставок должно получится:
  
<ul>
    <li>Lorem.</li>
    <li>Lorem ipsum dolor.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, beatae!</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptas architecto nesciunt, ad fugit unde itaque cum ratione quasi vero!</li>
</ul> */

const inputElement = document.querySelector('input');
const ulElement = document.querySelector('ul');
const buttonElement = document.querySelector('button');
const ulChild = ulElement.children;

buttonElement.addEventListener('click', () => {
	const liElement = document.createElement('li');
	liElement.innerHTML = inputElement.value;
	const lengthText = liElement.innerHTML.length;

	for (let i = 0; i <= ulChild.length; i++) {
		if (ulChild.length === 0) {
			ulElement.appendChild(liElement);
			break;
		} 
		else if (lengthText <= ulChild[i].innerText.length) {
			ulElement.insertBefore(liElement, ulChild[i]);
			break;
		}
		else if (lengthText > ulChild[i].innerText.length && ulChild.length === 1) {
			ulElement.insertBefore(liElement, null);
			break;
		}
		else if (lengthText <= ulChild[i+1].innerText.length && lengthText > ulChild[i].innerText.length) {
			ulElement.insertBefore(liElement, ulChild[i+1]);
			break;
		}
		else {
			ulElement.insertBefore(liElement, null);
		}
	}
})