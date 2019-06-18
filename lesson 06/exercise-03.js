// https://repl.it/@chl9252/DZ-6-3
// https://repl.it/@Kocherov_M/06-03

/* №3 (*)

  - Сделайте страничку с живыми часами показывающие точное время.
  - Подсказка: используйте `setInterval` */

const timeDiv = document.querySelector('#time')
    timeDiv.style = 'font-size: 60px;'

setInterval(() => {
    const time = new Date()
    timeDiv.textContent = `${time.getHours()}:${(time.getMinutes()<10?'0':'')+time.getMinutes()}:${(time.getSeconds()<10?'0':'')+time.getSeconds()}`
}, 1000)