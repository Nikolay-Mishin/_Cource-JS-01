function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №10(*) 

С помощью методов filter, forEach и reduce выполнить последовательную цепочку действия над массивом: 1. удвоить все элементы массива 2. избавиться от отрицательных чисел 3. получить произведение всех чисел 
 
Исходный массив: const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1] */

const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1];

function exercise_10 (multy = 2, condition = 0) {
    array.forEach ((val, i) => array[i] *= multy);
    let arr = array.filter (val => val >= condition);
    let multy = arr.reduce ((multy, val) => multy *= val, 1);
    return { arr: arr, multy: multy };
}

msg (10, exercise_10());