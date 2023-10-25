function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#modalOpen');
	const navBtnClose = document.querySelector('#modalClose');

	const overlay = document.querySelector('.mobile-nav__overlay');
	const nav = document.querySelector('.mobile-nav');

	navBtnOpen.onclick = toggleMobileNav
	navBtnClose.onclick = toggleMobileNav
	overlay.onclick = toggleMobileNav
	
	// function () {
	// 	nav.classList.toggle('mobile-nav--open');
	// 	menuIcon.classList.toggle('nav-icon--active');
	// 	document.body.classList.toggle('no-scroll');
	// };

	function toggleMobileNav () {
		overlay.classList.toggle('mobile-nav__overlay--open')
		nav.classList.toggle('mobile-nav--open')
		document.body.classList.toggle('no-scroll')
	}
}

export default mobileNav;