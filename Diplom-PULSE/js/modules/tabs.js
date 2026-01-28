export function initTabs() {
	const tabList = document.querySelector('.tab__list');
	if (!tabList) return;

	tabList.addEventListener('click', function (e) {
		const tabControl = e.target.closest('.tab__link');
		if (!tabControl) return;
		e.preventDefault();

		document.querySelectorAll('.tab__link').forEach(tab => {
			tab.classList.remove('tab__link--active');
		});

		tabControl.classList.add('tab__link--active');

		document.querySelectorAll('.tab-content__box').forEach(box => {
			box.classList.remove('tab_content--show');
		});

		const tabId = tabControl.getAttribute('href');
		const target = document.getElementById(tabId);
		if (target) {
			target.classList.add('tab_content--show');
		}
	});
}