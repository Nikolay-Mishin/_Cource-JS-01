function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
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

exercise_2();