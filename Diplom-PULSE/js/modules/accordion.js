export function initAccordion() {
	const boxesAcc = document.querySelectorAll('.accordion_box');

	boxesAcc.forEach((box) => {
		box.addEventListener('click', () => {
			const content = box.querySelector('.accordion__content');
			if (!content) return;

			const isActive = box.classList.contains('accordion_box--active');

			boxesAcc.forEach(otherBox => {
				const otherContent = otherBox.querySelector('.accordion__content');
				otherBox.classList.remove('accordion_box--active');
				if (otherContent) otherContent.style.maxHeight = '0';
			});

			if (!isActive) {
				box.classList.add('accordion_box--active');
				content.style.maxHeight = content.scrollHeight + 'px';

				setTimeout(() => {
					content.style.maxHeight = content.scrollHeight + 'px';
				}, 50);
			}
		});
	});
}