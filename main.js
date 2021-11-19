const container = document.querySelector('.container')
const boxContainer = document.querySelector('.box_container')
const modal = document.querySelector('.modal')
let modalContainer
let modalHeading
let modalHeadingTitle
const timeOut = 200

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
				<div class="modal_content_container_box">
					<p>HTML</p>
				</div>
				<div class="modal_content_container_box">
					<p>CSS</p>
				</div>
				<div class="modal_content_container_box">
					<p>JAVASCRIPT</p>
				</div>
				<div class="modal_content_container_box">
					<p>NODEJS</p>
				</div>
				<div class="modal_content_container_box">
					<p>REACTJS</p>
				</div>
				
			`,
		back: false,
	},
	{
		title: 'Các sản phẩm',
		icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
		description: [
			{
				title: 'L1rf Store',
				image: './images/l1rf-store.jpg',
				url: 'https://l1rf.online',
			},
			{
				title: 'Landing Page of Store',
				image: './images/l1rf-store.jpg',
				url: 'https://likeoneringfake.github.io/l1rf_dev_v1/',
			},
		],
		back: true,
	},
	{
		title: 'Thông tin liên hệ',
		icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
		description: `<div class="social">
						<a href="https://facebook.com/mai.tritoann" 
						target="_blank"
						class="social-item">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
							</svg>
							<span>/mai.tritoann</span>
						</a>
						<a href="https://instagram.com/hwycdfatm" 
						target="_blank"
						class="social-item">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
							</svg>
							<span>/hwycdfatm</span>
						</a>
						<a href="#"
						target="_blank"
						class="social-item">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
							</svg>
							<span>/like1ringfake</span>
						</a>
					</div>`,
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
	if (window.screen.width >= 555) return

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
			modal.style.transition = `all 0.2s cubic-bezier(0.06, 0.04, 1, 1)`
			setTimeout(() => {
				modal.style.transition = ''
			}, timeOut)
			modalContainer = document.querySelector('.modal_content_container')
			modalHeading = document.querySelector('.modal_heading')
			modalHeadingTitle = document.querySelector('.modal_heading_title')
		}
	})
}

function handleTouchModal() {
	if (window.screen.width >= 555) return
	let isClose = false,
		touchPosition,
		isScroll = false,
		screenHeight = window.screen.height

	const handleTouchStart = (e) => {
		if (e.target == modalHeading || e.target == modalHeadingTitle) {
			isScroll = false
		} else {
			if (modalContainer.scrollTop > 0) {
				isScroll = true
			}
		}

		touchPosition = e.touches[0].clientY
	}

	const handleTouchMove = (e) => {
		let touch = touchPosition
		if (touch == null) return
		let currentTouch = e.touches[0].clientY
		let difference = currentTouch - touch
		if (!isScroll) {
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
			}, timeOut)
		}
		isClose = false
		isScroll = false
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
	}, timeOut)
}

renderToHtml()
handleOpenModal()
handleTouchModal()
