import { initRouter } from './route.js';
import {firebaseInit} from './asserts/js/firebaseInit.js';


   const init = ()=>{
        initRouter();
        firebaseInit();
   }

   window.addEventListener('load', init);
