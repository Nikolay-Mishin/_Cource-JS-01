function msg (n, text = null) {
    console.log (`===== | Задание № ${n} | =====`);
    if (text) console.log (text);
}

/* №10 (**)

  - Реализуйте функцию `sum`
  - Пример:

```javascript
sum(100)(5)(2000)(70) // 2175
sum(1)(2)(3)(4) // 10
``` */

const o = {
    s: 0,
    sum: function (e) {
        this.s += e;
        return this;
    },
    out: function () {
        console.log (this.s);
        this.s = 0;
    }
}

msg (10);
o.sum(100).sum(5).sum(2000).sum(70).out();
o.sum(1).sum(2).sum(3).sum(4).out();