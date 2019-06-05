// import { templatePost } from './templatePost.js'
import { templateHomeSingIn } from './templateHomeSingIn.js'
import { createNewUser } from '../js/authdom.js';

export const templateNewUser = () =>{

    document.getElementById('root').innerHTML =
    ` <div
    <h1> Nuevo Usuario Patria </h1>
    <form id="form-new-user">
    <p id="error-create"></p>
    <p id="error-create-name>
    <div id="create-name"><input id="name" type="text" class="info-new" placeholder="Nombre" required/></div>
    <p id="error-create-surname></p>
    <div id="create-surname"><input id="surname" type="text" class="info-new"" placeholder="Apellido" required/</div>
    <p id="error-create-email></p>
    <div id="create-email"><input id="email-new-user" type="email" class="info-new"" placeholder="Email" required/</div>
    <p id="error-create-password></p>
    <div id="create-password"><input id="password-new.user" type="password" class="info-new"" placeholder="Contraseña 6 dígitos" required/</div>
    <p id="error-create-confirm></p>
    <div id="create-confirm"><input id="confirm-pass" type="password" class="info-new"" placeholder="Confirmar contraseña 6 dígitos" required/</div>
    <p id="error-create-country></p>
    <div id="error-create-country"><input id="country" type="text" class="info-new"" placeholder="Pais" required/</div>
    <p id="error-create-city></p>
    <div id="error-create-city"><input id="city" type="text" class="info-new"" placeholder="Ciudad" required/</div>
    <button id="create-acc" type="submit" class="">Crear Cuenta </button>
    <button id="volver-home" type="button" class="">Volver</button>
    </form>
    </div>`

document.getElementById('create-acc').addEventListener('click', () => {
    createNewUser();

 });

 document.getElementById('volver-home').addEventListener('click', () => {
    templateHomeSingIn();
    window.location.hash = '#/home'
 })
}