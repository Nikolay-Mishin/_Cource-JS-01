function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №6 (*) 

Запросите у пользователя число. В консоль выведите индекс элемента в исходном массиве. (попробуйте реализовать с помощью findIndex и indexOf) 
 
Исходный массив: const array = [10, 53, 52, 79, 38, 80, 33, 1, 55, 45, 94, 31, 54, 83, 47, 62, 62, 8, 98, 36] */

const array = [10, 53, 52, 79, 38, 80, 33, 1, 55, 45, 94, 31, 54, 83, 47, 62, 62, 8, 98, 36];

function exercise_6 () {
    let n = parseInt (prompt ('Задание № 6.\nВведите число:'));
    let result = array.findIndex (value => value === n ? array.indexOf (n) : false);
    return result !== -1 ? result : 'Такого значения нет';
}

msg (6, exercise_6());