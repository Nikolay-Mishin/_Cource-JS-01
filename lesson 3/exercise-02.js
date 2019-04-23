function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
}

/* №2 (*) 

С помощью цикла найти сумму всех чисел удовлетворяющих: 1. находится в диапазоне [-10; -3] или [1; 25] 2. больше, чем предыдущий элемент массива 
 
Исходный массив: const array = [46, -45, 26, -17, -32, -19, -43, -18, 16, -28, 17, -40, 42, -32, -36, -39, 35, 43, -34, 47, 9, -23, -26, 0, 19, 48, -3, -38, -26, -29, -1, -10, 24, -36, 10, 42, -34, 24, 2, 33, -13, -42, -2, 40, 38, 11, -46, -13, -41, 1]  */ 

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

exercise_2();