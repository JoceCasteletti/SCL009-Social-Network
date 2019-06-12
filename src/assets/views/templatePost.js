
import { signOut } from '../js/firebaseAuth.js';

export const templatePost = () => {

    document.getElementById('root').innerHTML =
        `

<div class="flex-center">
<h1>Página en construcción</h1>
<h3>haz click aqui para cerrar sesion</h3>
<button id="signout">Cerrar sesión</button>
</div>`

    document.getElementById('signout').addEventListener('click', () => {
        signOut();
    })


}
// document.getElementById("btn-home").addEventListener('click', () => {
//     templateHomeSingIn();
//     window.location.hash = '#/home'
//  })

//  document.getElementById("btn-crear").addEventListener('click', () => {
//     templateNewUser();
//     window.location.hash = '#/new-user'
//  })