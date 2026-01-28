import { initBurger } from './modules/burger.js';
import { initSwiper } from './modules/swiper.js';
import { initTabs } from './modules/tabs.js';
import { initTableTabs } from './modules/table.js';
import { initAccordion } from './modules/accordion.js';


document.addEventListener('DOMContentLoaded', () => {
	initBurger();
	initSwiper();
	initTabs();
	initTableTabs();
	initAccordion();
});