import { initRouter } from './route.js';
import { firebaseInit } from './assets/js/firebaseInit.js';
import { observer} from '../src/assets/js/firebaseAuth.js';

   const init = ()=>{
        initRouter();
        firebaseInit();
        observer();
   }

   window.addEventListener('load', init);
