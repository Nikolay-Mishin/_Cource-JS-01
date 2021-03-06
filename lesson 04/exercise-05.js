function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №5 (**)

  - Написать функцию `sort`, принимающую массив чисел и возвращающую новый массив из тех же элементов, но в порядке возрастания.
  - Пример:

```javascript
sort([0, 1, 2, 3, 4, 5]) // [0, 1, 2, 3, 4, 5]
sort([5, 4, 1, 3, 0, 2]) // [0, 1, 2, 3, 4, 5]
sort([100, -100, 0, 200, -200]) // [-200, -100, 0, 100, 200]
``` */

const sort = arr => arr.sort ((a, b) => a - b);

msg (5, `${sort ([0, 1, 2, 3, 4, 5])}\n${sort ([5, 4, 1, 3, 0, 2])}\n${sort ([100, -100, 0, 200, -200])}`);