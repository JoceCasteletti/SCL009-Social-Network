import { templateNewUser } from './templateNewUser.js'
import { templatePost } from './templatePost.js'
import { signInGmail } from '../js/firebaseAuth.js';
import { observer } from '../js/firebaseAuth.js';
export const templateHomeSingIn = () => {
   observer()
   document.getElementById('root').innerHTML =

      `<div class="containerSingIn"> 
         <div id="titulo-signIn">
            <img src="" id="" alt=""/> 
            <h1>Patria Comunidad</h1>
            <h3>Tips para facilitar tu viaje</h3>
         </div>
         <div class="inputs">
            <input type="text" id="email" class="caja-texto form-control" placeholder="Ingresa tu mail" required></input>
            <input type="text" id="password" class="caja-texto form-control" placeholder="Ingresa tu contraseña" required></input>
         </div>
         <div class="btns-option">
            <button type="submit" id="btn-go" >Entrar</button>
            <button type="button" id="sign-in-gmail" >Iniciar con Google</button>
         </div>
      
         <div id="createAcc">
            <h4>¿Aún no tienes cuenta?</h4>
            <button id="btn-new-user" type="button">Crear Cuenta</button>
         </div>
      </div>`

   document.getElementById('btn-new-user').addEventListener('click', () => {
      templateNewUser();
      window.location.hash = '#/new-user'
   });

   document.getElementById('btn-go').addEventListener('click', () => {
      templatePost();
      window.location.hash = '#/post'
   });
   
   document.getElementById('sign-in-gmail').addEventListener('click', () => {
      signInGmail();
   })
}