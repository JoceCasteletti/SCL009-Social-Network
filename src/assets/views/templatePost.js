import {
    signOut
} from '../js/firebaseAuth.js';

export const templatePost = () => {

    document.getElementById('root').innerHTML =
    
        `<div class="flex-center">
<h1>Página en construcción</h1>
<img id="working" class="flex-center" src="assets/img/workingprogress.jpg" alt="imagen seguimos trabajando">
<div id="salir-pagina">
<h3>Haz click aqui para cerrar sesion</h3>
<button id="signout" class="form-group">Cerrar sesión</button>
</div>
</div>`

    document.getElementById('signout').addEventListener('click', () => {
        signOut();
    })


}