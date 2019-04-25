function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №4 (*)

  - Написать функцию `isTrimed`, принимающую строку и возвращающую `true` если в начале и конце нет пробельных символов. Иначе `false`.
  - Пример:

```javascript
isTrimed('') // true
isTrimed(' ') // false
isTrimed('Hello world') // true
isTrimed(`Hellow
world
`) // false
``` */

const isTrimed = str => str.trim() === str;

msg (4, `${isTrimed ('')}\n${isTrimed (' ')}\n${isTrimed ('Hello world')}\n${isTrimed (`Hellow
world
`)}`);