function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №6 (*)

  - Написать функцию `createPerson`. Функция запрашивает у пользователя соответствующие параметры и возвращает объект из этих параметров.
  - Пример:

```javascript
const person = createPerson() // alert('Имя') alert('Фамилия')...
console.log(person) // { name: '...', family: '...', /.../ }
``` */

function createPerson () {
    this.name = prompt ('Имя');
    this.family = prompt ('Фамилия')
}

const person = new createPerson();

const createPerson_2 = () => {return {
    name: prompt ('Имя'),
    family: prompt ('Фамилия')
}};

const person_2 = createPerson_2();

msg (6, person);
console.log (person_2);