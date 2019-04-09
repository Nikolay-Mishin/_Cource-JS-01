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

/* №2 (*) 

Отредактировать код из примера 2.03 так чтобы в финальном сообщение выводилось с какой попытки игрок угадал число. */ 

function exercise_2 (min = 1, max = 100, hops = 2) {
    const MIN = min;
    const MAX = max;
    const NUMBER = MIN + Math.floor (Math.random() * (MAX - MIN + 1));
    const HOPS = hops;

    let greeting = '';

    greeting += 'Сыграем в игру "Угадай число"!\n';
    greeting += 'Я загадал число от ' + MIN + ' до ' + MAX + '. У тебя есть ' + HOPS + ' попыток его отгадать.\n';
    greeting += 'Причем после каждой попытки я буду давать тебе подсказку.\n';

    alert (greeting);

    let isWin = false;
    let hint = '';

    exercise_2.count = 0; // номер попытки по умолчанию

    for (let i = 0; i < HOPS; i++) {
        let message = 'Твоя ' + (i + 1) + ' попытка. Твое число:';

        if (hint) { message = hint + message; }

        const answer = parseInt (prompt (message));
        exercise_2.count++; // прибавляем номер попытки на +1 после ответа

        if (answer === NUMBER) {
            isWin = true;
            break;
        }
        else if (answer > NUMBER) {
            hint = 'Задуманное число меньше ' + answer + '.\n';
            continue;
        }
        else {
            hint = 'Задуманное число больше ' + answer + '.\n';
            continue;
        }
    }

    if (isWin) {
        const message = 'Мои поздравления! Ты угадал задуманное ' + NUMBER + ' число.\n' + 'Вы угадали с ' + exercise_2.count + ' попытки.';
        msg (2, message);
    }
    else {
        const message = 'Увы! Загаданное число было ' + NUMBER + '. В следующий раз сыграешь лучше.';
        msg (2, message);
    }
}

/* №3 (*) 

Написать скрипт с константами SIZE и LENGTH и чтобы скрипт построил елочку по этим константам 

Например при SIZE = 2, LENGTH = 4 

* 
** 
*** 
**** 
* 
** 
*** 
****  */

function exercise_3 (size = 2, length = 4) {
    const SIZE = size;
    const LENGTH = length;
    let str = '';
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < LENGTH; j++) {
            for (let k = j; k >= 0; k--) { str += '*'; }
            str += '\n';
        }
    }
    return str;
}

/* №4 (*) 

Написать скрипт, который запрашивает у пользователя 3 числа и выводит наибольшее из них.  */

function exercise_4 (count = 3) {
    let n = [];
    let message = `Задание № 4.\nНаибольшее из ${count} чисел.\nВведите число №`;
    for (let i = 0; i < count; i++) { n.push (parseInt (prompt (`${message} ${i + 1}.`))); }
    return Math.max.apply (null, n);
}

/* #5 (*) 

Написать скрипт, который запрашивает у пользователя число и выводит сумму всех его делителей. 
https://www.yaklass.ru/p/matematika/6-klass/naturalny.. */

function exercise_5 () {
    n = parseInt (prompt ('Задание № 5.\nНайти сумму всех делителей числа.\nВведите число.'));
    let sum = 1;
    for (let div = 2; n % div == 0; div++) { sum += div; }
    return sum + n;
}

/* №6 (**) 

В JavaScript есть шаблонные строки. Переписать все строки в примере 2.03 в шаблонные. 
https://developer.mozilla.org/ru/docs/Web/JavaScript/.. */

function exercise_6 (min = 1, max = 100, hops = 2) {
    const MIN = min;
    const MAX = max;
    const NUMBER = MIN + Math.floor (Math.random() * (MAX - MIN + 1));
    const HOPS = hops;

    let greeting = '';

    greeting += 'Сыграем в игру "Угадай число"!\n';
    greeting += `Я загадал число от ${MIN} до ${MAX} . У тебя есть ${HOPS} попыток его отгадать.\n`;
    greeting += 'Причем после каждой попытки я буду давать тебе подсказку.\n';

    alert (greeting);

    let isWin = false;
    let hint = '';

    exercise_6.count = 0; // номер попытки по умолчанию

    for (let i = 0; i < HOPS; i++) {
        let message = `Твоя ${i + 1} попытка. Твое число:`;

        if (hint) { message = hint + message; }

        const answer = parseInt (prompt (message));
        exercise_6.count++; // прибавляем номер попытки на +1 после ответа

        if (answer === NUMBER) {
            isWin = true;
            break;
        }
        else if (answer > NUMBER) {
            hint = `Задуманное число меньше ${answer}.\n`;
            continue;
        }
        else {
            hint = `Задуманное число больше ${answer}.\n`;
            continue;
        }
    }

    if (isWin) {
        const message = `Мои поздравления! Ты угадал задуманное ${NUMBER} число.\nВы угадали с ${exercise_6.count} попытки.`;
        msg (6, message);
    }
    else {
        const message = `Увы! Загаданное число было ${NUMBER}. В следующий раз сыграешь лучше.`;
        msg (6, message);
    }
}

/* #7 (**) 

Переписать код из примеров 2.03 и 2.07 с использование while и do while. 
https://developer.mozilla.org/ru/docs/Web/JavaScript/..
https://developer.mozilla.org/ru/docs/Web/JavaScript/.. */

function exercise_7_1 (min = 1, max = 100, hops = 2) {
    const MIN = min;
    const MAX = max;
    const NUMBER = MIN + Math.floor (Math.random() * (MAX - MIN + 1));
    const HOPS = hops;

    let greeting = '';

    greeting += 'Сыграем в игру "Угадай число"!\n';
    greeting += `Я загадал число от ${MIN} до ${MAX} . У тебя есть ${HOPS} попыток его отгадать.\n`;
    greeting += 'Причем после каждой попытки я буду давать тебе подсказку.\n';

    alert (greeting);

    let isWin = false;
    let hint = '';

    exercise_7_1.count = 0; // номер попытки по умолчанию

    let i = 0;
    while (i < HOPS) {
        let message = 'Твоя ' + (i + 1) + ' попытка. Твое число:';

        if (hint) { message = hint + message; }

        const answer = parseInt (prompt (message));
        exercise_7_1.count++; // прибавляем номер попытки на +1 после ответа
        i++;

        if (answer === NUMBER) {
            isWin = true;
            break;
        }
        else if (answer > NUMBER) {
            hint = `Задуманное число меньше ${answer}.\n`;
            continue;
        }
        else {
            hint = `Задуманное число больше ${answer}.\n`;
            continue;
        }
    }

    if (isWin) {
        const message = `Мои поздравления! Ты угадал задуманное ${NUMBER} число.\nВы угадали с ${exercise_6.count} попытки.`;
        msg ('7_1', message);
    }
    else {
        const message = `Увы! Загаданное число было ${NUMBER}. В следующий раз сыграешь лучше.`;
        msg ('7_1', message);
    }
}

function exercise_7_1_do (min = 1, max = 100, hops = 2) {
    const MIN = min;
    const MAX = max;
    const NUMBER = MIN + Math.floor (Math.random() * (MAX - MIN + 1));
    const HOPS = hops;

    let greeting = '';

    greeting += 'Сыграем в игру "Угадай число"!\n';
    greeting += `Я загадал число от ${MIN} до ${MAX} . У тебя есть ${HOPS} попыток его отгадать.\n`;
    greeting += 'Причем после каждой попытки я буду давать тебе подсказку.\n';

    alert (greeting);

    let isWin = false;
    let hint = '';

    exercise_7_1_do.count = 0; // номер попытки по умолчанию

    let i = 0;
    do {
        let message = 'Твоя ' + (i + 1) + ' попытка. Твое число:';

        if (hint) { message = hint + message; }

        const answer = parseInt (prompt (message));
        exercise_7_1_do.count++; // прибавляем номер попытки на +1 после ответа
        i++;

        if (answer === NUMBER) {
            isWin = true;
            break;
        }
        else if (answer > NUMBER) {
            hint = `Задуманное число меньше ${answer}.\n`;
            continue;
        }
        else {
            hint = `Задуманное число больше ${answer}.\n`;
            continue;
        }
    } while (i < HOPS);

    if (isWin) {
        const message = `Мои поздравления! Ты угадал задуманное ${NUMBER} число.\nВы угадали с ${exercise_6.count} попытки.`;
        msg ('7_1_do', message);
    }
    else {
        const message = `Увы! Загаданное число было ${NUMBER}. В следующий раз сыграешь лучше.`;
        msg ('7_1_do', message);
    }
}

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

function exercise_7_2_do (min = -10, max = 10) {
    let a = min;
    let result = [];

    do {
        let b = min;
        do {
            let c = min;
            do {
                const mul = a * b * c; // multiplication = умножение
                const sum = max * (Math.abs (a) + Math.abs (b) + Math.abs (c));
                // Если произведение числе больше чем 10 сумм абсолютных величин и хотя бы одна из величин отрицательная
                if (mul > sum && (a < 0 || b < 0 || c < 0)) { result.push (`a = ${a}, b = ${b}, c = ${c}`); }
                c++;
            } while (c <= max);
            b++;
        } while (b <= max);
        a++;
    } while (a <= max);

    return [result];
}

/* №8 (**) 

В примере 2.01 переписать скрипт так чтобы не считать сумму, а найти сумму математически. 
https://www.yaklass.ru/p/algebra/9-klass/progressii-9.. */

function exercise_8 () {
    return false;
}

/* №9 (**) 

Написать скрипт который выводит следующие числа: 

20  19  18  15  16  17  10  9   8   5   6   7 
    -1  -1  -3  +1  +1  -7  -1  -1  -3  +1  +1

- с использованием циклов.  */

function exercise_9 (n = 20, count = 7, sequence = [-1, -1, -3, 1, 1, -7]) {
    let result = [n];
    for (let i = 0; i < count - 1; i++) {
        let s = i % sequence.length;
        n += sequence[s];
        result.push (n);
    }
    return result.join (' ');
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

msg (1, `Корни уравнения: ${exercise_1()}`);
exercise_2();
msg (3, exercise_3());
msg (4, `Наибольшее из чисел: ${exercise_4()}`);
msg (5, `Сумма делителей: ${exercise_5()}`);
exercise_6();
exercise_7_1();
exercise_7_1_do();
msg ('7_2', exercise_7_2());
msg ('7_2_do', exercise_7_2_do());
msg (8, exercise_8());
msg (9, exercise_9());
msg (10, exercise_10());