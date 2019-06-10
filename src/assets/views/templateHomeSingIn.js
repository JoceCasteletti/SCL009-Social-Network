import { signInWithEmailAndPassword } from '../js/firebaseAuth.js';
import { signInGmail } from '../js/firebaseAuth.js';
import { validateEmail } from '../js/validate.js';

export const templateHomeSingIn = () => {
   document.getElementById('root').innerHTML =

      `<div class="containerSingIn"> 
         <div id="titulo-signIn" class="flex-center">
            <img src="" id="" alt=""/> 
            <h1>Patria Comunidad</h1>
            <h3>Tips para facilitar tu viaje</h3>
         </div>
         <div class="flex-center inputs">
            <form>
               <div class="flex-center">
                  <div class="form-group">
                     <input type="text" id="email-user" class="caja-texto form-control" placeholder="Ingresa tu mail" required></input>
                     <div id="error-email" class="error"></div>
                  </div>
                  <div class="form-group">
                     <input type="password" id="password-user" class="caja-texto form-control" placeholder="Ingresa tu contraseña" required></input>
                     <div id="error-password" class="error"></div>
                  </div>
                  <div class="form-group">
                     <button type="button" id="btn-go" >Entrar</button>
                     <button type="button" id="sign-in-gmail" >Iniciar con Google</button>
                  </div>
               </div>               
            </form>
         </div>
         <div id="createAcc" class="flex-center">
            <h4>¿Aún no tienes cuenta?</h4>
            <button id="btn-new-user" type="button">Crear Cuenta</button>
         </div>
      </div>`

   document.getElementById('btn-new-user').addEventListener('click', () => {
      window.location.hash = '#/new-user'
   });

   document.getElementById('btn-go').addEventListener('click', () => {
      document.getElementById("error-email").innerHTML = '';
      document.getElementById("error-password").innerHTML = '';

      let emailUser = document.getElementById('email-user').value;
      let passwordUser = document.getElementById('password-user').value

   
     
         if (!validateEmail(emailUser)) {
            document.getElementById('error-email').innerHTML = 'Ingresa email válido';
         }
         
         if (passwordUser.length < 6) {
            document.getElementById('error-password').innerHTML = 'La contraseña debe tener al menos 6 caracteres';
         }
      })

    


    //validar nuevo usario 
    let goIn = validateSignInWithEmailAndPassword(emailUser, passwordUser);
    if (goIn === true) {
         signInWithEmailAndPassword(emailUser, passwordUser)
         .catch(() => {
            alert('Tu usuario no es vàlido');
         });
      };
   
   document.getElementById('sign-in-gmail').addEventListener('click', () => {
      signInGmail();
   });
};





