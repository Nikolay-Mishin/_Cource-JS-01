function msg (n, text) {
    console.log (`===== | Задание № ${n} | =====`);
    console.log (text);
}

/* №7 (*)

  - Дописать функцию из задания 6 так, чтобы возвращаемый объект имел какие-нибудь методы. */

function createPerson () {
    this.name = prompt ('Имя');
    this.family = prompt ('Фамилия')

    this.say_hello = () => console.log (`Здравствуйте, ${this.name} ${this.family}! Желаю Вам хорошего дня!`);
}

const person = new createPerson();

msg (7, person);
person.say_hello();