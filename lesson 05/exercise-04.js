// https://repl.it/@chl9252/DZ-5-4

/* №4 (***)

  - Создайте класс `Massiv`.
  - Реализуйте свойства и методы характерные массиву (`length`, `push`, `pop`, `slice`, `join`, etc)
  - Задание творческое. Суть заключается в том чтобы пояснить как функционирует базовый `Array`. По этому не нужно реализовывать все методы что есть в `Array`. 3-5 методов достаточно. Лучше выберите самые сложные для себя.
  - Напишите небольшой скрипт с использование своего класса. Покажите что методы экземпляра класса `Massiv` работают так же как и методы экземпляров класса `Array`. */

class Massiv {
    constructor () {
        this.length = arguments.length
        for (let i = 0; i < arguments.length; i++) {
            this[i] = arguments[i]
        }
    }

    push (element) {
        this[this.length] = element
        this.length += 1
    }
    
    join (separator) {
        let str = ''
        for (let i = 0; i < this.length - 1; i++) {
            str += this[i] + separator
        }
        return str + this[this.length-1]
    }

    find (callback) {
        for (let i = 0; i < this.length; i++) {
            const result = callback(this[i])
            if (result) {
                return this[i]
            }
        }
    }
}

const massiv = new Massiv(1,2,3,4,5)
massiv.push(7)

console.log(massiv)
console.log(massiv.join(', '))
console.log(massiv.find(e => e % 2 === 0))