import { initRouter } from './route.js';
import { firebaseInit } from './assets/js/firebaseInit.js';


   const init = ()=>{
        initRouter();
        firebaseInit();
   }

   window.addEventListener('load', init);
