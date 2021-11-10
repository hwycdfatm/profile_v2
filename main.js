const data = [
	{
		title: 'Thông tin cơ bản',
		icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
		description: 'Thông tin cơ bản của user',
	},
	{
		title: 'Các kỹ năng',
		icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
		description: 'Các kỹ năng của user',
	},
	{
		title: 'Sở thích',
		icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
		description: 'Các sở thích của user',
	},
	{
		title: 'Thông tin liên hệ',
		icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
		description: 'Thông tin liên hệ của user',
	},
]

const container = document.querySelector('.container')
const boxContainer = document.querySelector('.middle')
const modal = document.querySelector('.modal')

// Open modal and close
let htmlBox = data.map((item) => {
	return `<div class="box" onclick=>
		<div class="box_icon">
		<svg style="width:24px; height:24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
		d="${item.icon}"></path>
		</svg>
		</div>
		<p class="box_title">
		${item.title}
		</p>
		</div>`
})
boxContainer.innerHTML = htmlBox.join('')
const openBtns = Array.from(document.querySelectorAll('.box'))
openBtns.forEach((btn, index) => {
	btn.onclick = () => {
		let htmlModal = `<div class="modal_heading">
							<button id="back" class="modal_heading_btn btn_back">
								<svg style="width:24px; height:24px" fill="none" stroke="currentColor" viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${data[index].icon}">
									</path>
								</svg></button>
							<div class="modal_heading_title">
								${data[index].title}
							</div>
							<button onclick="closeModal()" class="modal_heading_btn btn_close">hủy</button>
						</div>
						<div class="modal_content">
							${data[index].description}
						</div>`

		modal.innerHTML = htmlModal
		container.classList.add('active')
		modal.classList.add('active')
		modal.style.transition = `transform 0.2s ease-in-out`
		document.body.classList.add('active')
		setTimeout(() => {
			modal.style.transition = ''
		}, 500)
	}
})

let isClose
const handleTouchStart = (e) => {
	console.log(e.touches[0].clientY)
}
const handleTouchMove = (e) => {
	modal.style.marginTop = `${Math.floor(e.touches[0].clientY) - 35}px`
	// console.log(`touchmove:${e.touches[0].clientY}`)
}

const handleTouchEnd = () => {
	if (isClose) {
		closeModal()
	} else {
		modal.style.marginTop = ''
		container.style.transform = ''
	}
}

function closeModal() {
	modal.style.transition = `transform 0.2s ease-in-out`
	container.classList.remove('active')
	modal.classList.remove('active')
	document.body.classList.remove('active')
	modal.style.transform = ``
	setTimeout(() => {
		modal.innerHTML = ''
		modal.style.transition = ''
	}, 500)
}

modal.addEventListener('touchstart', handleTouchStart)
modal.addEventListener('touchmove', handleTouchMove)
modal.addEventListener('touchend', handleTouchEnd)
