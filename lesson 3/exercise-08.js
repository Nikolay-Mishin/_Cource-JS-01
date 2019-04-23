function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
}

/* №8 (**) 
 */

function exercise_8 (min = -10, max = 10) {
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

msg ('8', exercise_8());