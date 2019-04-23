function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
    console.log ('');
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

msg (3, exercise_3());