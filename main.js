const container = document.querySelector('.container')
const boxContainer = document.querySelector('.middle')
const modal = document.querySelector('.modal')

const dataButton = [
	{
		title: 'Thông tin cá nhân',
		icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2',
		description: 'Thông tin cơ bản của user',
		back: false,
	},
	{
		title: 'Các kỹ năng',
		icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
		description: `
				<div class="modal_content_box">
					<button class="modal_content_box_button">Javasctip</button>
				</div>
				<div class="modal_content_box">
					Là một bật thầy trong Javasctip, chúa tể bất đồng bộ, ông hoàng callback, thánh nhân WebAPI, truyền nhân củ chuối 0.7 + 0.1 = 0.799999999999
					
					<marquee style="margin-top: 5rem;">
					Mình là Toàn đây
					<marquee/>
				</div>
			`,
		back: true,
	},
	{
		title: 'Các sản phẩm',
		icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
		description: `<div class="modal_content_box">
						<button class="modal_content_box_button">Html</button>
					</div>
					<div class="modal_content_box">
					HTML tạm dịch là ngôn ngữ đánh dấu siêu văn bản. Người ta thường sử dụng HTML trong việc phân chia các đoạn văn, heading, links, blockquotes,…
					Một Website thường chứa nhiều trang con và mỗi trang con này lại có một tập tin HTML riêng. Lưu ý, HTML không phải là ngôn ngữ lập trình. Điều này có nghĩa là nó không thể thực hiện các chức năng “động”. Hiểu một cách đơn giản hơn, cũng tương tự như phần mềm Microsoft Word, HTML chỉ có tác dụng bố cục và định dạng trang web. HTML khi kết hợp với CSS và JavaScript sẽ trở thành một nền tảng vững chắc cho thế giới mạng.
					</div>`,
		back: true,
	},
	{
		title: 'Thông tin liên hệ',
		icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
		description: 'Thông tin liên hệ của user',
		back: false,
	},
]

function renderToHtml() {
	// Open modal and close
	let htmlBox = dataButton.map((item) => {
		return `<div class="box">
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
}

function handleOpenModal() {
	let showBoxContent = false
	let modalContentBox, button, backButton
	const openBtns = Array.from(document.querySelectorAll('.box'))

	openBtns.forEach((btn, index) => {
		btn.onclick = () => {
			let htmlModal = `<div class="modal_heading">
								<button id="back" class="modal_heading_btn btn_back">
									<svg style="width:24px; height:24px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
									</svg>
								</button>
								<div class="modal_heading_title">
									${dataButton[index].title}
								</div>
								<button onclick="closeModal()" class="modal_heading_btn btn_close">hủy</button>
							</div>
							<div class="modal_content">
								<div class="modal_content_container">
									${dataButton[index].description}
								</div>
							</div>`
			modal.innerHTML = htmlModal
			container.classList.add('active')
			modal.classList.add('active')
			modalContentBox = modal.querySelector('.modal_content_container')
			modal.style.transition = `all 0.2s cubic-bezier(0.06, 0.04, 1, 1)`
			setTimeout(() => {
				modal.style.transition = ''
			}, 200)
			button = modal.querySelector('.modal_content_box_button')
			backButton = modal.querySelector('#back')

			if (button) {
				button.onclick = () => {
					modalContentBox.classList.add('active')
					backButton.style.display = 'block'
				}
			}
			if (backButton) {
				backButton.onclick = () => {
					modalContentBox.classList.remove('active')
					backButton.style.display = 'none'
				}
			}
		}
	})

	let isClose,
		touchPosition,
		screenHeight = window.screen.height

	const handleTouchStart = (e) => {
		touchPosition = e.touches[0].clientY
	}

	const handleTouchMove = (e) => {
		let touch = touchPosition
		if (touch == null) return
		let currentTouch = e.touches[0].clientY
		let difference = currentTouch - touch

		if (difference > 0) {
			container.style.transform = `scale(${
				difference / screenHeight / 25 + 0.96
			})`
			modal.style.marginTop = `${Math.floor(difference)}px`
		}
		if (difference < screenHeight / 2.5) {
			isClose = false
		} else {
			isClose = true
		}
	}

	const handleTouchEnd = () => {
		container.style.transform = ``
		if (isClose) {
			closeModal()
		} else {
			modal.style.transition = `all 0.2s cubic-bezier(0.06, 0.04, 1, 1)`
			modal.style.marginTop = ''
			setTimeout(() => {
				modal.style.transition = ``
			}, 200)
		}
	}

	modal.addEventListener('touchstart', handleTouchStart)
	modal.addEventListener('touchmove', handleTouchMove)
	modal.addEventListener('touchend', handleTouchEnd)
}

function closeModal() {
	modal.style.transition = `all 0.2s cubic-bezier(0.06, 0.04, 1, 1)`
	container.classList.remove('active')
	modal.classList.remove('active')
	setTimeout(() => {
		modal.innerHTML = ''
		modal.style.transition = ''
		modal.style.marginTop = ''
	}, 500)
}

renderToHtml()

handleOpenModal()
