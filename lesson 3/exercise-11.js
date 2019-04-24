function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №11 (**) 

Написать функцию slice принимающую 3 аргумента: 1. array - массив 2. begin - число 3. end - число , - и выполняющую тоже самое, что и метод slice. */

function slice (array = [], begin = 0, end = array.length) {
    let arr = [];
    for (let i = begin; i < end; i++) { arr.push (array[i]) }
    return arr;
}

msg (11, slice ([1, 2, 3, 4, 5], 1, 3));