'use strict';

var $main = document.querySelector('main');
var $pageHeader = document.querySelector('.page-header');
var $pageFooter = document.querySelector('.page-footer');
var $menuOpenBtn = document.querySelector('.menu-open-button');
var $asideEl = document.querySelector('aside');

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