import { firebaseInit } from './assets/js/firebaseInit.js';
import { initRouter } from './route.js';


   const init = ()=>{
        initRouter();
        firebaseInit();
   }

   window.addEventListener('load', init);
