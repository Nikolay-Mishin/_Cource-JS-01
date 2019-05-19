function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №10 (***) 

Написать скрипт, который запрашивает у пользователя число и выводит разность произведения нечетных чисел и суммы четных цифр веденного числа. 

Например: 

Вводим: 123123 

Произведение нечетных цифр: a = 1 * 3 * 1 * 3 = 9 

Сумма четных цифр: b = 2 + 2 = 4 

Искомая разность: a - b = 9 - 4 = 5 

Примичание (использовать только циклы и математические операции) */

function exercise_10 (n = 123123) {
    let message = 'Задание № 10.\nНайти разность произведения нечетных чисел и суммы четных цифр веденного числа.\nВведите число.';
    n = parseInt (prompt (message, n));
    let split = String (n).split ('');
    let evens = [];
    let odds = [];
    let multy = 1;
    let sum = 0;

    split.forEach (item => (item % 2) ? evens.push (item) : odds.push (item));

    for (let even of evens) { multy *= even; }
    for (let odd of odds) { sum += parseInt (odd); }

    return multy - sum;
}

msg (10, exercise_10());