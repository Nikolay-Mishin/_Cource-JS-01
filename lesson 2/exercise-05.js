function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №5 (*) 

Написать скрипт, который запрашивает у пользователя число и выводит сумму всех его делителей. 
https://www.yaklass.ru/p/matematika/6-klass/naturalny.. */

function exercise_5 () {
    n = parseInt (prompt ('Задание № 5.\nНайти сумму всех делителей числа.\nВведите число.'));
    let sum = 1;
    for (let div = 2; n % div == 0; div++) { sum += div; }
    return sum + n;
}

msg (5, `Сумма делителей: ${exercise_5()}`);