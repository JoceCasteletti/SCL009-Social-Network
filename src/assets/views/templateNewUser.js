import { validateNewUser} from '../js/validate.js';
import { createUserFirebase } from '../js/firebaseAuth.js';
import { validateEmail } from '../js/validate.js';

export const templateNewUser = () => {

   document.getElementById('root').innerHTML =
      `<div>
         <div class="flex-center">
          
            <h1> Viajeros Chilenos </h1>
            <h3> Nuevo Usuario </h3>
         </div>
    
         <form id="form-new-user" class="">
            <div class="flex-center">
               <div class="form-group">
                  <input id="name" type="text" class="info-new" placeholder="Nombre">
                  <div id="error-create-name" class="error"></div>
               </div>
               <div class="form-group">
               <input id="surname" type="text" class="info-new" placeholder="Apellido"/>
                  <div id="error-create-surname" class="error"></div>
               </div>
               <div class="form-group">
               <input id="email-new-user" type="email" class="info-new" placeholder=" Email"/>                  
               <div id="error-create-email" class="error"></div>
               </div>
               <div class="form-group">
               <input id="password-new.user" type="password" class="info-new" placeholder=" Contraseña 6 dígitos"/>
                  <div id="error-create-password" class="error"></div>
               </div>
               <div class="form-group">
               <input id="confirm-pass" type="password" class="info-new" placeholder=" Confirmar contraseña 6 dígitos"/>
                  <div id="error-create-confirm" class="error"></div>
               </div>
               <div class="form-group">
               <input id="country" type="text" class="info-new" placeholder=" Pais"/>                 
                <div id="error-create-country" class="error"></div>
               </div>
               <div class="form-group">
               <input id="city" type="text" class="info-new" placeholder=" Ciudad"/>                  
               <div id="error-create-city" class="error"></div>
               </div>
               <div class="form-group">
                  <button id="create-acc" type="submit" class="">Crear Cuenta</button>
               </div>
               <div class="form-group">
                  <button id="volver-home" type="button" class="">Volver</button>
               </div>
            </div>
         </form>
         </div>`

   document.getElementById('create-acc').addEventListener('click', (e) => {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let surname = document.getElementById('surname').value;
      let email = document.getElementById('email-new-user').value;
      let password = document.getElementById('password-new.user').value;
      let confirmPass = document.getElementById('confirm-pass').value;
      let country = document.getElementById('country').value;
      let city = document.getElementById('city').value;

      // Limpiar errores
      document.getElementById('error-create-name').innerHTML = ''
      document.getElementById('error-create-surname').innerHTML = ''
      document.getElementById('error-create-email').innerHTML = ''
      document.getElementById('error-create-password').innerHTML = ''
      document.getElementById('error-create-confirm').innerHTML = ''
      document.getElementById('error-create-country').innerHTML = ''
      document.getElementById('error-create-city').innerHTML = ''

      console.log(name, surname, email, password, confirmPass, country, city);

      if (name === '' || name.length < 3) {
         document.getElementById('error-create-name').innerHTML = 'Ingresa nombre válido'
      }
      if (surname === '' || surname.length < 3) {
         document.getElementById('error-create-surname').innerHTML = 'Ingresa apellido válido'
      }
      if (email === '' || !validateEmail(email)) {
         document.getElementById('error-create-email').innerHTML = 'Ingresa email válido'
      }
      if (password === '' || password.length < 6) {
         document.getElementById('error-create-password').innerHTML = 'Ingresa contraseña válida'
      }
      if (confirmPass === '' || password != confirmPass) {
         document.getElementById('error-create-confirm').innerHTML = 'Contreaseña no coinciden'
      }
      if (country === '' || country.length < 3) {
         document.getElementById('error-create-country').innerHTML = 'Ingresa país valido'
      }
      if (city === '' || city.length < 3) {
         document.getElementById('error-create-city').innerHTML = 'Ingresa ciudad válida'
      };


      //validar nuevo usario 
      let result = validateNewUser(name, surname, email, password, confirmPass, country, city);
      if (result === true) {
         createUserFirebase(email, password)
         alert("te enviamos un email para verificar tu cuenta")
         console.log(result);
      };
   });

   document.getElementById('volver-home').addEventListener('click', () => {
      console.log('sahdahd')
      window.location.hash = '#/home'
   });
}; 