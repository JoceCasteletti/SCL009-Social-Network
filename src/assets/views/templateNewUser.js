// import { templatePost } from './templatePost.js'
// import { templateHomeSingIn } from './templateHomeSingIn.js'
import { createNewUser } from '../js/authdom.js';

export const templateNewUser = () =>{

    document.getElementById('root').innerHTML =
    ` <div
    <h1> Nuevo Usuario Patria </h1>
    <form id="form-new-user">
    <div id="error-create-name"><input id="name" type="text" class="info-new" placeholder="Nombre"></div>
    <div id="error-create-surname"><input id="surname" type="text" class="info-new"" placeholder="Apellido"></div>
    <div id="error-create-email"><input id="email-new-user" type="text" class="info-new"" placeholder="Email"></div>
    <div id="error-create-password"><input id="password-new.user" type="text" class="info-new"" placeholder="Contraseña 6 dígitos"></div>
    <div id="error-create-confirm"><input id="confirm-pass" type="text" class="info-new"" placeholder="Confirmar contraseña 6 dígitos"></div>
    <div id="error-create-country"><input id="country" type="text" class="info-new"" placeholder="Pais"></div>
    <div id="error-create-city"><input id="city" type="text" class="info-new"" placeholder="Ciudad"></div>
    <button id="create-acc" type="button" class="">Crear Cuenta </button>
    </form>
    </div>`

document.getElementById('create-acc').addEventListener('click', () => {
    createNewUser();

 });

//  document.getElementById('btn').addEventListener('click', () => {
//     templateHomeSingIn();
//     window.location.hash = '#/home'
//  })
}