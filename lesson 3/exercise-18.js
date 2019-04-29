function msg (n, text = null) {
    console.log (`===== | Задание № ${n} | =====`);
    if (text) console.log (text);
}

/* №18 (*) 

Превратите строку в массив чисел и найдите ее сумму. Выведите строкой сумму элементов получившегося массива. 
 
Исходная строка: const string = ‘1, 15, 44, -20’ */

const string = '1, 15, 44, -20';
const sum = string.split (', ').reduce ((sum, val) => sum += parseInt (val), 0);

msg (18, sum.toString());