function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №8 (*) 

Переписать следующий код с помощью concat и reverse. 
 
const array1 = [1, 2, 3, 4, 5] const array2 = [6, 7, 8, 9, 10]
 
const resultArray = [] 
 
for (let i = 0; i < array1.length; i++) { resultArray.push(array1[array1.length - i - 1]) } 
 
array2.forEach(element => resultArray.push(element)) */

const   array1 = [1, 2, 3, 4, 5],
        array2 = [6, 7, 8, 9, 10];
let resultArray = [];

function exercise_8 () {
    array1.reverse();
    resultArray = array1.concat(array2);
    return resultArray;
}

msg ('8', exercise_8());