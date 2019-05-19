function msg (n, text = null) {
    console.log (`===== | Задание № ${n} | =====`);
    if (text) console.log (text);
}

/* №19 (**) 

Заполнить массив слов словами из строки с большой буквы. 
 
Исходная строка: const string = ‘привет Этот славный дивный Мир! Я так по Тебе скучал. Когда же мы С тобой виделись в Последний раз?’ */

const string = 'привет Этот славный дивный Мир! Я так по Тебе скучал. Когда же мы С тобой виделись в Последний раз?';

const arr = string.split (' ');

let new_arr = [];

for (let item of arr){
	let first_letter = item.slice (0, 1);
	if (first_letter === first_letter.toUpperCase()) { new_arr.push (item); }
}

msg (19, new_arr);