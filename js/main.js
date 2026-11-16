import { initBurgerMenu } from './modules/burger.js';
import { projectsData } from './modules/projectsData.js';
import { renderProjects } from './modules/renderProjects.js';
import { reviewsData } from './modules/reviewsData.js';
import { renderReviews } from './modules/renderReviews.js';

initBurgerMenu();
renderProjects(projectsData, '.projects__container');
renderReviews(reviewsData, '.reviews__list');
