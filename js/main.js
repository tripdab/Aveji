import { initBurgerMenu } from './modules/burger.js';
import { projectsData } from './modules/projectsData.js';
import { renderProjects } from './modules/renderProjects.js';

initBurgerMenu();
renderProjects(projectsData, '.projects__container');
