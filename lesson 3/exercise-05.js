function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №5 (*) 

Разработайте функцию для фильтра массива который делает из исходного массива конечный массив. 
 
Исходный массив: const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1] 
Конечный массив: resultArray = [9, 24, 24] */

const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1];

function exercise_5 () {
    let sum = 46 + -45 + 26 + -17 + -32 + -19 + -43 + -18 + 16 + -28 + 17 + -40 + 42 + -32 + -36 + -39 + 35 + 43 + -34 + 47;
    let arr = array.filter (value => {  });
    return sum;
}

msg (5, exercise_5());