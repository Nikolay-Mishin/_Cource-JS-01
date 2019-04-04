// Метод для удаления значения массива по ключу
Array.prototype.unset = function (value) {
    if (this.indexOf (value) != -1)
        this.splice (this.indexOf (value), 1);
};

// Конструктор студента
function Person () {
    let args = arguments[0]; // Список полученных аргументов

    let keys = Object.keys (args); // Список ключей
    keys.forEach (key => this[key] = args[key]); // Для каждого ключа определяем свойство и значение (из переданных аргументов)
    keys.unset ('titles'); // Удаляем по значению лишнее имя ключа для дальнейшей работыы с ними

    let border = 'padding: 0 0 2px 5px; border-bottom: 2px dashed; border-left: 2px dashed;';
    let colors = ['color: purple', 'color: grey', 'color: orange', 'color: green', 'color: red']; // Список цветов для стилизации заголовков
    // Список стилей для приветственного сообщения
    let style = ['color: white', 'font: 1.3rem/3 Georgia', 'text-shadow: 0 2px orangered',
        'background: radial-gradient(circle farthest-corner at 100px 50px, #FBF2EB, #352A3B)'].join(';');

    // Метод для вывода детализированной информации на основе свойств
    this.say_hello = function () {
        console.group (`%c${this.name}`, 'border: 2px solid red; padding: 2px;'); // Объявляем начало группы
        console.log ('%cПривет мир!', style); // Приветственное сообщение
        // Выводим каждый заголовок и его значение
        keys.forEach ((key, i) => console.log (`%c${this.titles[i]}: `, `${colors[i]};${border}`, this[key]));
        console.groupEnd(); // Закрываем группу
    };
};

let students = {}; // Объект-хранилище всех студентов
let titles = ['Имя', 'Возраст', 'Место нахождения', 'Навыки', 'Цели']; // Список заголовков для таблицы
// Создаем студентов
students.nikolay = new Person ({
    name: 'Николай', age: '25 лет', place: 'Россия, Санкт-Петербург', skills: 'HTML, CSS, C#, Unity', goals: 'JS, PHP', features: 'UE4', titles: titles});
students.maria = new Person ({
    name: 'Мария', age: '25 лет', place: 'Россия, Санкт-Петербург', skills: 'HTML, CSS, 3dsMax, Unity', goals: 'JS, PHP', titles: titles});

let table = Object.assign ({}, students); // Создаем копию студентов для создания сводной таблицы (и очистки от лишних параметров)
let style = 'background: yellow; border: 2px dotted red; padding: 3px;';
console.log ('%cТаблица студентов', style);
console.table (students); // Выводим таблицу студентов
// Вызываем в цикле метод say_hello() и удаляем свойства и методы из списка ключей перед выводом сводной таблицы
for (let student in table) {
    table[student].say_hello();
    delete table[student].say_hello;
    delete table[student].titles;
}
console.log ('%cКлон студентов', style);
console.table (table); // Выводим таблицу Клона студентов
console.log ('%cОригинал студентов', style);
console.table (students); // Выводим таблицу студентов