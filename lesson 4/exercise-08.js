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

// Метод для клонирования объекта
Object.prototype.getCopy = function () {
    let o = this;
    function Create (i) {
        for (i in o) {
            if (o.hasOwnProperty (i)) this[i] = o[i];
        }
    }
    return new Create();
}

function getCopy (o) {
    let obj = {};
    for (i in o) {
        if (o.hasOwnProperty (i)) obj[i] = o[i];
    }
    return obj;
}

const obj = {
    name: 'Фродо',
    family: 'Бегенс'
};

const copy = getCopy (obj);
const copy_2 = obj.getCopy();

msg (8, copy);
console.log (copy === obj);

msg (8, copy_2);
console.log (copy_2 === obj);

delete copy_2.family;
console.log (copy_2);
console.log (obj);