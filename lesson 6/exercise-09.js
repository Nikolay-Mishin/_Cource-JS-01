function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
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

msg (9, exercise_9());