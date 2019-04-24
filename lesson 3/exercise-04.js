function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №4 (*) 

Запросите у пользователя 3 числа и выполните с этими числами: 1. если меньше 0-го элемента исходного массива, то добавить в начало исходного массива 2. если больше последнего элемента исходного массива, то добавить в конец исходного массива 3. иначе ничего не делать 
 
Исходный массив: const array = [2, 3, 4] */

const array = [2, 3, 4];

function exercise_4 (count = 3) {
    let arr = array.slice();
    for (let i = 0; i < count; i++) {
        let n = parseInt (prompt (`Задание № 4.\nВведите ${count} чисел.\nЧисло ${i + 1}:`));
        if (n < array[0]) { arr.unshift (n); }
        else if (n > array[array.length - 1]) { arr.push (n); }
    }
    return arr;
}

msg (4, exercise_4());