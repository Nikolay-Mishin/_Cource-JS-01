function msg (n, text = null) {
    console.log (`===== | Задание № ${n} | =====`);
    if (text) console.log (text);
}

/* №20 (**) 

Написать функцию yodaSay, которая принимает на вход 1 аргумент: строку, - и возвращает новую строку с измененным порядком слов. Учитывать капитализацию. 
 
Пример: yodaSay(‘Здравствуй мой дорогой друг’) // ‘Мой здравствуй друг дорогой’ */

const yodaSay = str => {
    let arr = str.split (' ');
	let new_arr = [];
	for (let i = 0; i < arr.length; i += 2) {
		if (arr[i + 1]) {
			new_arr[i] = arr[i + 1];
			new_arr[i + 1] = arr[i];
		}
        else { new_arr[i] = arr[i]; }
	}

	for (let i = 0; i < new_arr.length; i++){
		let first_letter = new_arr[i].slice (0, 1);
		if (first_letter === first_letter.toUpperCase()) { new_arr[i] = new_arr[i].toLowerCase(); }
	}

	let first_sword = new_arr[0].split ('');
	first_sword[0] = first_sword[0].toUpperCase();
	new_arr[0] = [];

	for (let i = 0; i < first_sword.length; i++) { new_arr[0] += first_sword[i]; }
	str = new_arr.join(' ');
	return str;
}

msg (20, yodaSay ('Здравствуй мой дорогой друг'));