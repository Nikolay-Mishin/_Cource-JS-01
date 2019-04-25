function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №8 (*)

  - Написать функции `getCopy`, принимающую объект и возвращающую другой объект с теме же ключами и значениями.
  - Гарантируется, что аргумент будет содержать только примитивы в ключах и значениях.
  - Пример:

```javascript
const obj = {
    name: 'Фродо',
    family: 'Бегенс'
}
const copy = getCopy(obj)
console.log(copy) // {name: "Фродо", family: "Бегенс"}
console.log(copy === obj) // false
``` */

function getCopy () {
    //
}

const obj = {
    name: 'Фродо',
    family: 'Бегенс'
};

const copy = getCopy (obj);

msg (8, copy);
console.log(copy === obj);