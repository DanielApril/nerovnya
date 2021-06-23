let $main = document.querySelector('main');
let $pageHeader = document.querySelector('.page-header');
let $pageFooter = document.querySelector('.page-footer');
let $asideEl = document.querySelector('aside');
let $asideOpenEl = document.querySelector('.open-menu');
let $asideCloseEl = document.querySelector('.overlay-aside-close');
let $menuCloseBtn = document.querySelector('.close-menu');
let $bodyEl = document.querySelector('body');
let $projectsListEl = document.querySelector('.projects-list .inner');

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


// init Isotope
var iso = new Isotope($projectsListEl, {
	itemSelector: '.project',
	layoutMode: 'fitRows',
	fitRows: {
		gutter: 20
	}
});

// filter functions
var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function (itemElem) {
		var number = itemElem.querySelector('.number').textContent;
		return parseInt(number, 10) > 50;
	},
	// show if name ends with -ium
	ium: function (itemElem) {
		var name = itemElem.querySelector('.name').textContent;
		return name.match(/ium$/);
	}
};

// bind filter button click
var filtersElem = document.querySelector('.project__filters');
filtersElem.addEventListener('click', function (event) {
	// only work with buttons
	if (!matchesSelector(event.target, 'button')) {
		return;
	}
	var filterValue = event.target.getAttribute('data-filter');
	// use matching filter function
	filterValue = filterFns[filterValue] || filterValue;
	iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.project__filters');
for (var i = 0, len = buttonGroups.length; i < len; i++) {
	var buttonGroup = buttonGroups[i];
	radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
	buttonGroup.addEventListener('click', function (event) {
		// only work with buttons
		if (!matchesSelector(event.target, 'button')) {
			return;
		}
		buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
		event.target.classList.add('is-checked');
	});
}
