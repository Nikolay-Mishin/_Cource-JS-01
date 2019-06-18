// https://repl.it/@chl9252/DZ-6-7-8
// https://repl.it/@Kocherov_M/06-07-08

/* №7 (**)

  - Менять цвета `div` элемента по нажатию на случайный цвет.
  - Цвет должен менять только нажатый `div` элемент.
  
  №8 (**)

  - Если при клике на `div` была прожата клавиша `ctrl`, то цвет элемента не меняется, но должны поменять все дочерние `div` элементы на цвет прожатого `div`.
  - При наведение на какой-то из `div` элементов его заливка становится картинкой (на ваше усмотрение). */

const divElements = document.querySelectorAll('div')
for (const divElement of divElements) {
    divElement.addEventListener('click', (event) => {
        console.log(event)
        event.stopPropagation()
        if (event.ctrlKey) {
            const divChildren = divElement.querySelectorAll('div')
            for ( const child of divChildren) {
                child.style.backgroundColor = divElement.style.backgroundColor
            }
            return
        } 
        divElement.style = `background-color: ${getRandom()};`
    })

    divElement.addEventListener('mouseover', (event) => {
        // console.log('hover', divElement)
        event.stopPropagation()
        divElement.style = `background-image: url(https://avatars.mds.yandex.net/get-pdb/1365420/816eda99-b0e2-4c69-bbc9-a728122a078b/s1200);`
    } )
}
function getRandom(){
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}