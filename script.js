const cookieAlert = document.querySelector(`.cookie-alert`)
const cookieBtn = document.querySelector(`.cookie-alert__btn`)

const showCookiesAlert = () => {
	//check local storage if cookies were accepted
	const cookieLocalStorage = localStorage.getItem(`cookie`)
	if (cookieLocalStorage) {
		cookieAlert.classList.add(`hide`)
	}
}

const handleCookieAlert = () => {
	//hide cookieAlert and add item to localStorage
	localStorage.setItem(`cookie`, `true`)
	cookieAlert.classList.add(`hide`)
}

cookieBtn.addEventListener(`click`, handleCookieAlert)
showCookiesAlert()
