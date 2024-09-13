const ulEl = document.getElementById('ul-el')
const bars = document.getElementById('bars')

bars.addEventListener('click', function () {
	if (ulEl.classList.contains('show')) {
		ulEl.classList.remove('show')
		ulEl.classList.add('hide')
		setTimeout(() => {
			ulEl.style.display = 'none'
		}, 500)
	} else {
		ulEl.style.display = 'flex'
		setTimeout(() => {
			ulEl.classList.remove('hide')
			ulEl.classList.add('show')
		}, 10)
	}
})
