export function initModal() {
    const PressTheButton = document.querySelector('.protein__info');
    if (!PressTheButton) return;
    
    const proteinLink = PressTheButton.querySelector('.protein__link');
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    const modalImg = modal.querySelector('.modal__img');
    const modalDescription = modal.querySelector('.modal__description');
    const modalClose = modal.querySelector('.modal__close');
    
    // Открытие модалки
    proteinLink.addEventListener('click', (event) => {
        event.preventDefault();
        
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (!activeSlide) {
            console.log('Активный слайд не найден');
            return;
        }
        
        const imgElement = activeSlide.querySelector('.protein__img img');
        if (!imgElement) {
            console.log('Изображение не найдено');
            return;
        }
        
        const descriptionElement = activeSlide.querySelector('.protein__description');
        if (!descriptionElement) {
            console.log('Описание не найдено');
            return;
        }
        
        modalImg.src = imgElement.src;
        modalImg.alt = imgElement.alt;
        modalDescription.innerHTML = descriptionElement.innerHTML;
        
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');  // ← добавляем класс
        
        console.log('Модальное окно открыто');
    });
    
    // Закрытие по крестику
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');  // ← убираем класс
        document.body.style.overflow = '';
    });
    
    // Закрытие по клику на фон
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active');  // ← убираем класс
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие по Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.classList.remove('active');  // ← убираем класс
            document.body.style.overflow = '';
        }
    });
}