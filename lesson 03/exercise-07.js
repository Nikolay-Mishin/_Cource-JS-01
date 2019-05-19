function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №7 (*) 

Даны два массива одинаковой длины (array1, array2). Создать массив arrayIs такой же длины из элементов true/false по следующему правилу: 1. если на позиции N в массивах array1 и array2 один и тот же элемент, то на позиции N массива arrayIs стоит true 2. иначе false 
 
Исходные массивы: const array1 = [3, 5, 5, 2, 4, 4, 5, 3, 3, 5, 5, 1, 1, 2, 1, 1, 5, 1, 3, 3] const array2 = [3, 4, 4, 5, 2, 2, 4, 3, 2, 3, 1, 5, 2, 1, 2, 5, 5, 4, 1, 3] */

const   array1 = [3, 5, 5, 2, 4, 4, 5, 3, 3, 5, 5, 1, 1, 2, 1, 1, 5, 1, 3, 3], 
        array2 = [3, 4, 4, 5, 2, 2, 4, 3, 2, 3, 1, 5, 2, 1, 2, 5, 5, 4, 1, 3];

function exercise_7 () {
    let arrayIs = [];
    for (let N = 0; N < array1.length; N++) { arrayIs.push (array1[N] === array2[N] ? true : false); }
    return arrayIs;
}

msg (7, exercise_7());