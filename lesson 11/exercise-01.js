/* №1 (*)

  - Разработать свой интерфейс для взаимодействия с объектами типа `Storage`. Описать его в комментариях к коду.
  - Реализовать адаптер для с вашим интерфейсом для объектов `sessionStorage`, `localStorage`, `coockieStorage`. */

// https://repl.it/@chl9252/DZ-11-1
// https://repl.it/@Kocherov_M/11-01

// localStorage
;(function () {
	window.localBarrel = {
		dry () {
			// clear
			localStorage.clear()
		},

		pourItem (name) {
			// getItem
			return JSON.parse(localStorage.getItem(name))
		},

		dryItem (name) {
			// removeItem
			localStorage.removeItem(name)
		},

		floodItem (name, value) {
			// setItem
			localStorage.setItem(name, JSON.stringify(value))
		}		
	}
})();

// sessionStorage
;(function () {
	window.sessionBarrel = {
		dry () {
			// clear
			localStorage.clear()
		},

		pourItem (name) {
			// getItem
			return JSON.parse(localStorage.getItem(name))
		},

		dryItem (name) {
			// removeItem
			localStorage.removeItem(name)
		},

		floodItem (name, value) {
			// setItem
			localStorage.setItem(name, JSON.stringify(value))
		}		
	}
})();

// cookie
;(function () {
	window.cookieBarrel = {
		dry () {
			// clear
			document.cookie = ''
		},

		pourItem (name) {
			// getItem
			const raw = getCookie(name)

			if (raw) {
				return JSON.parse(raw).data
			}
		},

		dryItem (name) {
			// removeItem
			deleteCookie(name)
		},

		floodItem (name, value) {
			// setItem
			const params = {
				expires: 1 * 365 * 24 * 60 * 60, // 1 year
				path: '/',
				domain: 'yoursite',
				secure: false
			}

			const raw = JSON.stringify({ data: value })

			setCookie(name, raw, params)
		}		
	}
})();

basket = []
basket.push({ type: 'Футболка', price: 15000, count: 2 })
basket.push({ type: 'Куртка', price: 650000, count: 0 })
basket.push({ type: 'Носки', price: 4500, count: 9 })

 localBarrel.dry()

localBarrel.floodItem('basket', basket)
console.log(localStorage)

 basket = localBarrel.pourItem('basket')

console.log({basket})