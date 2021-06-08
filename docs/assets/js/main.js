'use strict';

var $main = document.querySelector('main');
var $pageHeader = document.querySelector('.page-header');
var $pageFooter = document.querySelector('.page-footer');
var $menuOpenBtn = document.querySelector('.menu-open-button');
var $asideEl = document.querySelector('aside');
var $asideOpenEl = document.querySelector('.open-menu');
var $asideCloseEl = document.querySelector('.aside-close');
var $bodyEl = document.querySelector('body');

function openMenu() {
	$asideEl.classList.add('_active');
	$asideOpenEl.classList.add('_hidden');
	$asideCloseEl.classList.add('_active');
	$bodyEl.classList.add('_no-scroll');
}
function closeMenu() {
	$asideEl.classList.remove('_active');
	$asideOpenEl.classList.remove('_hidden');
	$asideCloseEl.classList.remove('_active');
	$bodyEl.classList.remove('_no-scroll');
}

// SLIDERS
var indexSlider = new Swiper('.index-slider', {
	// direction: 'vertical',
	speed: 400,
	centeredSlides: true,
	slidesPerView: 2,
	spaceBetween: 32,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	lazy: {
		loadPrevNext: true
	},
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 30,
		slideShadows: false
	}
});