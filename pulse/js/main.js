(function () {

	document.addEventListener('click', BurgerInit);

	// Function BURGER MENU
	function BurgerInit(e) {

		const BurgerIcon = e.target.closest('.burger__icon');
		const BurgerNavLink = e.target.closest('.nav__link');

		if (!BurgerIcon && !BurgerNavLink) return
		if (document.documentElement.clientWidth > 1200) return

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else { document.body.classList.remove('body--opened-menu') }
	}




	// Function Swiper
	const swiper = new Swiper('.protein__swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: true,
		pagination: {
			el: '.protein__pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}" data-index="${index + 1}"></span>`;
			}
		}
	});




	// Function tab-content
	const tabList = document.querySelector('.tab__list');
	if (!tabList) return;

	tabList.addEventListener('click', function (e) {
		const tabControl = e.target.closest('.tab__link');
		if (!tabControl) return;
		e.preventDefault();

		// убираем активный класс у всех ссылок
		document.querySelectorAll('.tab__link').forEach(tab => {
			tab.classList.remove('tab__link--active');
		});

		// добавляем активный класс к кликнутой ссылке
		tabControl.classList.add('tab__link--active');

		// убираем класс показа у всех блоков контента
		document.querySelectorAll('.tab-content__box').forEach(box => {
			box.classList.remove('tab_content--show');
		});

		// показываем нужный блок
		const tabId = tabControl.getAttribute('href');
		const target = document.getElementById(tabId);
		if (target) {
			target.classList.add('tab_content--show');
		}
	});




	// Function tab-table
	const tabTable = document.querySelector('.timetable__nav-list')

	tabTable.addEventListener('click', function (e) {
		const tabControlTable = e.target.closest('.timetable__nav-link')

		if (!tabControlTable) return // если не оно, то останавливаем
		e.preventDefault() // отменяем дефолтное поведение ссылки

		document.querySelectorAll('.timetable__nav-link').forEach(tab => {
			tab.classList.remove('timetable__nav-link--active')
		}) // проходим по всем элементам. Элементы, которые имеют класс timetable__nav-link--active - удаляем 

		tabControlTable.classList.add('timetable__nav-link--active') // когда происходит клик по tabControlTable то мы добавляем к элементу класс timetable__nav-link--active

		document.querySelectorAll('.table__box').forEach(box => {
			box.classList.remove('table__box--active')
		})

		const tableID = tabControlTable.getAttribute('href').replace('#', '')
		const targetTable = document.getElementById(tableID)
		if (targetTable) {
			targetTable.classList.add('table__box--active')
		}
	})




	// Function accordion
	const boxesAcc = document.querySelectorAll('.accordion_box'); //ищем все селекторы с классом accordion__box

	boxesAcc.forEach((box) => { //проходим по всем элементам с классом accordion__box
		box.addEventListener('click', () => { //обработчие событий по клику
			const content = box.querySelector('.accordion__content'); //клик по классу accordion__content
			if (!content) return; // если нет, то останавливаем

			const isActive = box.classList.contains('accordion_box--active'); //проверяем содержится ли класс accordion_box--active

			// Закрываем все остальные блоки
			boxesAcc.forEach(otherBox => {
				const otherContent = otherBox.querySelector('.accordion__content');
				otherBox.classList.remove('accordion_box--active');
				if (otherContent) otherContent.style.maxHeight = 0;
			});

			// Если ранее не был активен — открываем текущий
			if (!isActive) {
				box.classList.add('accordion_box--active');
				content.style.maxHeight = content.scrollHeight + 'px';

				// На случай динамического контента (шрифты, картинки)
				setTimeout(() => {
					content.style.maxHeight = content.scrollHeight + 'px';
				}, 50);
			}
		});
	});
})()