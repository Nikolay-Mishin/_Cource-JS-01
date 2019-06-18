// https://repl.it/@chl9252/DZ-6-9
// https://repl.it/@Kocherov_M/06-09-10

/* №9 (*)

  - Каждая кнопка подсчитывает сколько раз на нее прожали.
  
  №10 (**)

  - Доработать программу из задания 4 следующим образом: если в какой-то строке или столбце находятся кнопки прожатые одинаковое количество раз, то все их счетчики сбрасываются. */

const buttonElem = document.querySelectorAll('button')

for ( let i = 0; i < buttonElem.length; i++ ) {
    
    buttonElem[i].addEventListener('click', () => {

        let count = parseInt(buttonElem[i].textContent.split(' ')[1])
        buttonElem[i].textContent = `Clicked ${count+=1} times.`

        for (let y = 0; y<7; y+=3 ) {
            if ( buttonElem[y].textContent === buttonElem[y+1].textContent && buttonElem[y].textContent === buttonElem[y+2].textContent){
                buttonElem[y].textContent=buttonElem[y+1].textContent=buttonElem[y+2].textContent=`Clicked ${count=0} times.`
            }
        }
        for (let x = 0; x<3; x++ ) {
            if ( buttonElem[x].textContent === buttonElem[x+3].textContent && buttonElem[x].textContent === buttonElem[x+6].textContent){
                buttonElem[x].textContent=buttonElem[x+3].textContent=buttonElem[x+6].textContent=`Clicked ${count=0} times.`
            }
        }
    })
}