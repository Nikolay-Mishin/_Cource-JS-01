// https://repl.it/@chl9252/DZ-6-4-6
// https://repl.it/@Kocherov_M/06-04-06

/* №4 (*)

  - При нажатии на кнопку `Отправить` должно происходить следующее:
      - в начало списка сообщений должно быть добавлено  новое сообщение из `textarea` по примеру. В новом сообщение должна быть указанна служебная информация: время и автор,
      - `textarea` должно очиститься,
      - пустое сообщение нельзя отправить в добавленные.
      
    №5 (*)

  - Доработать программу из задания 4 следующим образом: при нажатии на уже существующее сообщение его содержимое должно вставляться в конец `textarea`.
  - Примечание: содержимое без служебной информации.
    
    №6 (*)

  - Доработать программу из задания 4 следующим образом: можно отправить сообщение в добавленные не только нажатием на кнопку `Отправить`, но и комбинацией клавиш `ctrl+Enter`. */

const inputElement = document.querySelector('textarea')
const buttonElement = document.querySelector('button')
const ulElement = document.querySelector('ul')

const liElements = ulElement.querySelectorAll('li')
    liElements.forEach(liElement => {
        liElement.addEventListener('click', clickHandler)
    })

inputElement.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === "Enter") {
        addText()
    }
})
buttonElement.addEventListener('click', () => {
    addText()
})
function clickHandler() {
    inputElement.value += this.textContent.split(': ', 2)[1]
}
function addText() {
    if (!inputElement.value) {
        return
    }
    const liElement = document.createElement('li')
    const date = new Date
    liElement.innerHTML = `<strong>${date.getHours()}:${(date.getMinutes()<10?'0':'')+date.getMinutes()} User:</strong> ${inputElement.value}`
    ulElement.insertBefore(liElement, ulElement.firstElementChild)
    inputElement.value = ''

    const liElements = ulElement.querySelectorAll('li')
    liElements.forEach(liElement => {
        liElement.addEventListener('click', clickHandler)
    })
}