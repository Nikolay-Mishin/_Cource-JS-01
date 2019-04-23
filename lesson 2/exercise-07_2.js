function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
}

/* №7 (**) 

Переписать код из примеров 2.03 и 2.07 с использование while и do while. 
https://developer.mozilla.org/ru/docs/Web/JavaScript/..
https://developer.mozilla.org/ru/docs/Web/JavaScript/.. */

// 2.07 - while

function exercise_7_2 (min = -10, max = 10) {
    let a = min;
    let result = [];

    while (a <= max) {
        let b = min;
        while (b <= max) {
            let c = min;
            while (c <= max) {
                const mul = a * b * c; // multiplication = умножение
                const sum = max * (Math.abs (a) + Math.abs (b) + Math.abs (c));
                // Если произведение числе больше чем 10 сумм абсолютных величин и хотя бы одна из величин отрицательная
                if (mul > sum && (a < 0 || b < 0 || c < 0)) { result.push (`a = ${a}, b = ${b}, c = ${c}`); }
                c++;
            }
            b++;
        }
        a++;
    }

    return [result];
}

msg ('7_2', exercise_7_2());