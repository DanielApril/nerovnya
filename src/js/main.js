let $main = document.querySelector('main');
let $pageHeader = document.querySelector('.page-header');
let $pageFooter = document.querySelector('.page-footer');
let $menuOpenBtn = document.querySelector('.menu-open-button');
let $asideEl = document.querySelector('aside');
let $asideCloseEl = document.querySelector('.aside-close');
let $bodyEl = document.querySelector('body');

function openMenu() {
	$asideEl.classList.add('_active');
	$asideCloseEl.classList.add('_active');
	$bodyEl.classList.add('_no-scroll');
}
function closeMenu() {
	$asideEl.classList.remove('_active');
	$asideCloseEl.classList.remove('_active');
	$bodyEl.classList.remove('_no-scroll');
}

// SLIDERS
const indexSlider = new Swiper('.index-slider', {
	// direction: 'vertical',
	speed: 400,
	centeredSlides: true,
	slidesPerView: 2,
	spaceBetween: 32,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	lazy: {
		loadPrevNext: true
	},
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 30,
		slideShadows: false,
	},
});
