import { observer } from './assets/js/firebaseAuth.js';
import { initRouter } from './route.js';
import { firebaseInit } from './assets/js/firebaseInit.js';

const init = () => {
  firebaseInit();
  observer();
  initRouter();
}

window.addEventListener('load', init);
