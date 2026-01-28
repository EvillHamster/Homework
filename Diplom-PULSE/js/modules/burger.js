export function initBurger() {
	document.addEventListener('click', (e) => {
		const burgerIcon = e.target.closest('.burger__icon');
		const burgerNavLink = e.target.closest('.nav__link');

		if (!burgerIcon && !burgerNavLink) return;
		if (document.documentElement.clientWidth > 1200) return;

		document.body.classList.toggle('body--opened-menu');
	});
}