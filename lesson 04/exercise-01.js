function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №1 (*)

  - Написать функцию `getSum`, принимающую любое количество аргументов и возвращающая сумму своих аргументов.
  - Обязательно использовать `arguments`.
  - Пример:

```javascript
getSum(0) // 0
getSum(-1, -5, -7) // -13
getSum(1, 2, 3, 4, 5) // 15
``` */

function getSum () {
    return [].reduce.call (arguments, (sum, val) => sum += val, 0);
}

msg (1, `${getSum (0)}\n${getSum (-1, -5, -7)}\n${getSum (1, 2, 3, 4, 5)}`);