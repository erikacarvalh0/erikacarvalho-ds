const menuBtn = document.querySelector('[data-js="menubtn"]')
const closeMenu = document.querySelector('[data-js="closeMenu"]')
const menu = document.querySelector('[data-js="menu"]')
const showInfo = document.querySelector('[data-js="showInfo"]')
const hideInfo = document.querySelector('[data-js="hideInfo"]')
const infoModal = document.querySelector('[data-js="infoModal"]')

const toggleMenu = () => {
	if (menu.classList.contains('active'))
		menu.classList.remove('active')
	else
		menu.classList.add('active')
}

menuBtn.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)

showInfo.addEventListener('click', () => {
	infoModal.showModal()
	toggleMenu()
})

hideInfo.addEventListener('click', () => {
	infoModal.close()
})

infoModal.addEventListener('click', dialogClickHandler)

function dialogClickHandler(e) {
	if (e.target.tagName !== 'DIALOG')
			return

	const rect = e.target.getBoundingClientRect()

	const clickedInDialog = (
			rect.top <= e.clientY &&
			e.clientY <= rect.top + rect.height &&
			rect.left <= e.clientX &&
			e.clientX <= rect.left + rect.width
	)

	if (clickedInDialog === false)
		e.target.close()
}