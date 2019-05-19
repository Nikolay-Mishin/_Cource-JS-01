function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №4 (*) 

Написать скрипт, который запрашивает у пользователя 3 числа и выводит наибольшее из них.  */

function exercise_4 (count = 3) {
    let n = [];
    let message = `Задание № 4.\nНаибольшее из ${count} чисел.\nВведите число №`;
    for (let i = 0; i < count; i++) { n.push (parseInt (prompt (`${message} ${i + 1}.`))); }
    return Math.max.apply (null, n);
}

msg (4, `Наибольшее из чисел: ${exercise_4()}`);