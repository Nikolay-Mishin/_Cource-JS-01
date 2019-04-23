function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
}

/* №1 (*) 

С помощью двойного вложенного цикла найти все решения уравнения x*y = 2*x + 5*y, при x, y от -100 до 100 

(смотри пример 2.07)  */

function exercise_1 (min = -100, max = 100) {
    for (let x = min; x < max; x++) {
        for (let y = min; y < max; y++) {
            if (x * y == (2 * x + 5 * y)) { return `x = ${x}, y = ${y}`; };
        }
    }
}

msg (1, `Корни уравнения: ${exercise_1()}`);