// https://repl.it/@chl9252/DZ-5-1-3
// https://repl.it/@Kocherov_M/05-01-03

/*
№1 (*)

  - Написать для класса `Point` метод `moveTo`.
  - `dx` и `dy` - это не новые координаты, это смещение текущих координат.
  
№2 (*)

  - Написать для класса `Point` статический метод `getDistBetween`, возвращающую расстояние между 2-мя точками.
  - [Справочный материал](https://0oq.ru/reshebnik-onlajn/ru.onlinemschool.com/math/library/analytic_geometry/point_point_length/default.htm) (По ссылке нажать колесиком мыши)
  
№3 (*)

  - Написать для класса `Point` метод `distTo`, возвращающую расстояние до точки.
  - Метод `distTo` должен вызывать статический метод `getDistBetween`.
*/

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    
    // Перемещает точку на (dx, dy) по координатной плоскости.
    moveTo (dx, dy) {
    	this.x = this.x + dx;
    	this.y = this.y + dy;
    	return this;
    }
    
    // Возвращается расстояние до точки.
    distTo (point) {
		return Point.getDistBetween(this, point);
    }
    
    // Возвращает расстояние между точками pointA и pointB
    static getDistBetween (pointA, pointB) {
    	return ((pointA.x - pointB.x)**2 + (pointA.y - pointB.y)**2)**0.5;
    }
}
const pointA = new Point(100, 200);
const pointB = new Point(150, 150);

console.log(pointA);
console.log(pointB);
console.log(pointA.moveTo(10, 20));
console.log(pointA.distTo(pointB));
console.log(Point.getDistBetween(pointA, pointB));