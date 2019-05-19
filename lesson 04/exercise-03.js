function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №3 (*)

  - Написать функцию `getLongest`, принимающую массив строк и возвращающую самую длинную строку из массива.
  - Совет: используйте `for-of` или `for-in`.
  - Пример:

```javascript
getLongest(['a']) // 'a'
getLongest(['a', 'b', 'c']) // 'a'
getLongest(['a', 'b', 'c', 'lol', 'foo', 'bart']) // 'bart'
``` */

const getLongest = arr => {
    let longest = '';
    for (let str of arr) {
        longest = str.length > longest.length ? str : longest;
    }
    return longest;
};

msg (3, `${getLongest (['a'])}\n${getLongest (['a', 'b', 'c'])}\n${getLongest (['a', 'b', 'c', 'lol', 'foo', 'bart'])}`);