function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №2 (*)

  - Написать функцию `getRandom`, принимающая 2 аргумента `min, max` и возвращающая случайное число между ними.
  - Обязательно использовать функции `Math.random()` и `Math.floor()`.
  - Пример:

```javascript
getRandom(0, 1) // 0
getRandom(0, 1) // 1
getRandom(-100, 100) // -57
``` */ 

const getRandom = (min, max) => Math.floor (Math.random() * (max - min + 1) + min);

msg (2, `${getRandom (0, 1)}\n${getRandom (0, 1)}\n${getRandom (-100, 100)}`);