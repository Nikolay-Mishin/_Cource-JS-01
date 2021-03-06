function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №1 (*) 

С помощью цикла найти в массиве наименьшее число, удовлетворяющее условиям: 1. 3-х значное 2. делящееся без остатка на 7 или на 3 
 
Исходный массив: const array = [437, 1164, 1119, 517, 367, 975, 586, 663, 131, 60, 492, 338, 54, 386, 966, 322, 503, 1048, 738, 1232, 1263, 198, 1245, 732, 128, 1067, 219, 367, 758, 1159, 1270, 1099, 712, 778, 306, 828, 396, 106, 1000, 1259, 241, 668, 482, 57, 1286, 461, 733, 1205, 963, 165] */

const array = [437, 1164, 1119, 517, 367, 975, 586, 663, 131, 60, 492, 338, 54, 386, 966, 322, 503, 1048, 738, 1232, 1263, 198, 1245, 732, 128, 1067, 219, 367, 758, 1159, 1270, 1099, 712, 778, 306, 828, 396, 106, 1000, 1259, 241, 668, 482, 57, 1286, 461, 733, 1205, 963, 165];

function exercise_1 (rank = 3, div = null) {
    let min = array[0];
    for (let i = 0; i < array.length - 1; i++) {
        if (!div && array[i + 1].toString().length == rank) { min = Math.min (min, array[i + 1]); }
        else if (array[i + 1].toString().length == rank && (array[i + 1] % div[0] === 0 || array[i + 1] % div[1] === 0)) {
            min = Math.min (min, array[i + 1]);
        }
    }
    return min;
}

msg ('1_1', exercise_1());
msg ('1_2', exercise_1(3, [7, 3]));