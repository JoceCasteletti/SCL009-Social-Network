import { initRouter } from './route.js';
//import {initFirebase} from './asserts/js/firebaseInit.js;


   const init = ()=>{
        initRouter();
       //initFirebase();
   }

   window.addEventListener('load', init);