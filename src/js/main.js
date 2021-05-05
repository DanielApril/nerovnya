let $main = $('main');
let $pageHeader = $('.page-header');
let $pageFooter = $('.page-footer');
let $menuOpenBtn = $('.menu-open-button');
let $asideEl = $('aside');

function openMenu() {
	$main.addClass('_menu-opened');
	$pageHeader.addClass('_menu-opened');
	$pageFooter.addClass('_menu-opened');
	$asideEl.addClass('_active');
}

function closeMenu() {
	$main.removeClass('_menu-opened');
	$pageHeader.removeClass('_menu-opened');
	$pageFooter.removeClass('_menu-opened');
	$asideEl.removeClass('_active');
}

$(document).ready( function() {
	$asideEl.addClass('_show');
});
