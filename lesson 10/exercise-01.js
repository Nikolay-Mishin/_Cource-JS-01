/* 
https://repl.it/@Kocherov_M/10-01

https://repl.it/@chl9252/DZ-10-1
*/

const onloadElement = document.querySelector('[data-onload]')
const callbackElement = document.querySelector('[data-callback]')
const promiseElement = document.querySelector('[data-promise]')
const asyncElement = document.querySelector('[data-async]')
const urlSun = 'https://img.fonwall.ru/o/e3/solnce-afrika-trava.jpg' 
const urlSea = 'https://million-wallpapers.ru/wallpapers/0/16/9798760211563246965.jpg' 
const urlRoad = 'https://avatars.mds.yandex.net/get-pdb/1345038/7df4295a-e6de-4066-a20a-b46f205304cf/s1200' 
const urlDesert = 'http://www.countrydetail.com/wp-content/uploads/2016/04/Arabian-Desert-top-ten-largest-deserts-in-the-world.jpg' 
let imgSunElement
let imgSeaElement
let imgRoadElement
let imgDesertElement

// ONLOAD
imgSunElement = new Image()
imgSunElement.src = urlSun
imgSunElement.style = 'width: 300px; margin-bottom: 30px;'
imgSunElement.onload = () => {
	onloadElement.append(imgSunElement)
 }

// CALLBACK
loadImage1(urlSea, img => callbackElement.append(img))

// PROMISE
loadImg2(urlRoad).then(img => promiseElement.append(img))

// ASYNC/AWAIT
loadImgDesert()
async function loadImgDesert () {
	const img = await loadImg2(urlDesert)
	asyncElement.append(img)
}


function loadImage1(url, callback) {
	const imageElement = new Image()
	imageElement.src = url
	imageElement.style = 'width: 300px; margin-bottom: 30px;'
	imageElement.onload = () => callback(imageElement)
}

function loadImg2(url) {
	return new Promise( resolve => {
		const imageElement = new Image()
		imageElement.src = url
		imageElement.style = 'width: 300px; margin-bottom: 30px;'
		imageElement.onload = () => resolve(imageElement)
	})
}