function msg (n, text = null) {
    console.log (`===== | Задание № ${n} | =====`);
    if (text) console.log (text);
}

/* №13 (*) 

Создайте объект person, которую вы будите использовать в следующих заданиях этой домашней работы. Включите в объект следующие поля: 1. Имя 2. Фамилию 3. Пол (gender) 4. Город проживания 5. Любые другие поля какие захотите 
 
Выведите приветствия в alert с использованием шаблонных строк и объекта вашей персоны. */

let person = {
    name: 'Николай',
    family: 'Мишин',
    gender: 'male',
    city: 'Санкт-Петербург',
    country: 'Россия',
    age: 25
}

msg (13, person);
console.log ('');

/* №14 (*) 

Создайте объект car любого на ваш выбор автомобиля. Самостоятельно выберите и заполните различные поля для это объекта. Присвойте полю owner объекта car объект person. Присвойте полю car объекта персон объект car.  
 
Почему person.car === car ? Почему person === car.owner ? Почему person === person.car.owner ? */

const car = {
    type: 'спорт',
    picking: 'базовая',
    color: 'черный глянец',
    wheels: 4,
    headlights: 4,
    sittings: 2,
    owner: person
}

person.car = car;

msg (14, person);
console.log (car);
console.log (`person.car === car => ${person.car === car}`); // свойтво person.car является ссылкой на объект car
console.log (`person === car.owner => ${person === car.owner}`); // свойтво car.owner является ссылкой на объект person
// свойтво car.owner объекта person является ссылкой на объект car, поэтому свойтво person.car.owner также содержит ссылку на объект person
console.log (`person === person.car.owner => ${person === person.car.owner}`);
console.log ('');

/* №15 (*) 

Создайте объект user как копию объекта person. Для этого используйте Object.keys и цикл for-of. 
 
Почему person.car === user.car ? 
 
Доработайте скрипт так чтобы поле car было и в объекте person и в объекте user, но чтобы 1. car !== person.car 2. car !== user.car 3. person.car !== user.car */

delete car.owner;

const user = JSON.parse (JSON.stringify (person));
person = JSON.parse (JSON.stringify (user));

msg (15, user);
console.log (`person.car === user.car => ${person.car === user.car}`);
console.log (`car !== person.car => ${car !== person.car}`);
console.log (`car !== user.car => ${car !== user.car}`);
console.log (`person.car !== user.car => ${person.car !== user.car}`);
console.log ('');

/* №16 (*) 

Создайте объект building. Самостоятельно выберите и заполните различные поля для это объекта. 
 
Как лучше всего связать объект building и объект person? Как лучше всего связать объект building и объект car? Удалите все ссылки на объекты, кроме ссылки на объект person. */

const building = {
	floors: '21',
	address: 'Проспект Просвещения, 31',
	tenants: 500,
	parking: 50
}
building.main_tenant = person;
building.parking_access = car;

delete building.parking_access;
delete building;
delete person.car;
delete user.car;
delete car;
delete user;

msg (16, building);
console.log (person);
console.log (car);
console.log (user);