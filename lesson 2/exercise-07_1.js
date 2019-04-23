function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
}

/* №7 (**) 

Переписать код из примеров 2.03 и 2.07 с использование while и do while. 
https://developer.mozilla.org/ru/docs/Web/JavaScript/..
https://developer.mozilla.org/ru/docs/Web/JavaScript/.. */

// 2.03 - while

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

exercise_7_1();