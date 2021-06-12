let $main = document.querySelector('main');
let $pageHeader = document.querySelector('.page-header');
let $pageFooter = document.querySelector('.page-footer');
let $asideEl = document.querySelector('aside');
let $asideOpenEl = document.querySelector('.open-menu');
let $asideCloseEl = document.querySelector('.overlay-aside-close');
let $menuCloseBtn = document.querySelector('.close-menu');
let $bodyEl = document.querySelector('body');

function openMenu() {
	$asideEl.classList.add('_active');
	$asideOpenEl.classList.add('_hidden');
	$asideCloseEl.classList.add('_active');
	$menuCloseBtn.classList.remove('_hidden');
	$bodyEl.classList.add('_no-scroll');
}
function closeMenu() {
	$asideEl.classList.remove('_active');
	$asideOpenEl.classList.remove('_hidden');
	$asideCloseEl.classList.remove('_active');
	$menuCloseBtn.classList.add('_hidden');
	$bodyEl.classList.remove('_no-scroll');
}

// SLIDERS
const indexSlider = new Swiper('.index-slider', {
	// direction: 'vertical',
	speed: 700,
	centeredSlides: true,
	allowTouchMove: false,
	slidesPerView: 2,
	spaceBetween: 32,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
	lazy: {
		loadPrevNext: true
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});
