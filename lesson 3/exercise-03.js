function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №3 (*) 

Из исходного массива пока это возможно забирать элементы из начала и конца и добавлять их в два других массива по следующим правилам: 1. положительные в начало массива positiveArray 2. отрицательные в конец массива negativeArray 
 
Исходный массив: const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1] */

const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1];
let positiveArray = [];
let negativeArray = [];

function exercise_3 () {
    let arr = array.slice();
    while (arr.length > 0) {
        let first = arr.shift();
        let last = arr.pop();
        if (first > 0) { positiveArray.unshift (first); }
        else { negativeArray.push (first); }
        if (last > 0) { positiveArray.unshift (last); }
        else { negativeArray.push (last); }
    }
    return { positiveArray: positiveArray, negativeArray: negativeArray };
}

msg (3, exercise_3());