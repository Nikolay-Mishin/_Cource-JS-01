function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
}

/* №1 (*) 

С помощью цикла найти в массиве наименьшее число, удовлетворяющее условиям: 1. 3-х значное 2. делящееся без остатка на 7 или на 3 
 
Исходный массив: const array = [437, 1164, 1119, 517, 367, 975, 586, 663, 131, 60, 492, 338, 54, 386, 966, 322, 503, 1048, 738, 1232, 1263, 198, 1245, 732, 128, 1067, 219, 367, 758, 1159, 1270, 1099, 712, 778, 306, 828, 396, 106, 1000, 1259, 241, 668, 482, 57, 1286, 461, 733, 1205, 963, 165]   */

function exercise_1 (min = -100, max = 100) {
    for (let x = min; x < max; x++) {
        for (let y = min; y < max; y++) {
            if (x * y == (2 * x + 5 * y)) { return `x = ${x}, y = ${y}`; };
        }
    }
}

msg (1, `Корни уравнения: ${exercise_1()}`);