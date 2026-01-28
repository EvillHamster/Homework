export function initTableTabs() {
	const tabTable = document.querySelector('.timetable__nav-list');
	if (!tabTable) return;

	tabTable.addEventListener('click', function (e) {
		const tabControlTable = e.target.closest('.timetable__nav-link');
		if (!tabControlTable) return;
		e.preventDefault();

		document.querySelectorAll('.timetable__nav-link').forEach(tab => {
			tab.classList.remove('timetable__nav-link--active');
		});

		tabControlTable.classList.add('timetable__nav-link--active');

		document.querySelectorAll('.table__box').forEach(box => {
			box.classList.remove('table__box--active');
		});

		const tableID = tabControlTable.getAttribute('href').replace('#', '');
		const targetTable = document.getElementById(tableID);
		if (targetTable) {
			targetTable.classList.add('table__box--active');
		}
	});
}