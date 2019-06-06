// import { templatePost } from './templatePost.js'
import { templateHomeSingIn } from './templateHomeSingIn.js';
import { validateNewUser } from '../js/validate.js';
import { createUserFirebase } from '../js/firebaseAuth.js';
import { validateEmail } from '../js/validate.js';



export const templateNewUser = () =>{

    document.getElementById('root').innerHTML =
    ` <div
    <h1> Nuevo Usuario Patria </h1>
    <form id="form-new-user">
    <p id="error-create"></p>
    <p id="error-create-name">
    <div id="create-name"><input id="name" type="text" class="info-new" placeholder="Nombre"/></div>
    <p id="error-create-surname"></p>
    <div id="create-surname"><input id="surname" type="text" class="info-new"" placeholder="Apellido" /</div>
    <p id="error-create-email"></p>
    <div id="create-email"><input id="email-new-user" type="email" class="info-new"" placeholder="Email" /</div>
    <p id="error-create-password"></p>
    <div id="create-password"><input id="password-new.user" type="password" class="info-new"" placeholder="Contraseña 6 dígitos" /</div>
    <p id="error-create-confirm"></p>
    <div id="create-confirm"><input id="confirm-pass" type="password" class="info-new"" placeholder="Confirmar contraseña 6 dígitos" /</div>
    <p id="error-create-country"></p>
    <div id="error-create-country"><input id="country" type="text" class="info-new"" placeholder="Pais" /</div>
    <p id="error-create-city"></p>
    <div id="error-create-city"><input id="city" type="text" class="info-new"" placeholder="Ciudad" /</div>
    <button id="create-acc" type="submit" class="">Crear Cuenta </button>
    <button id="volver-home" type="button" class="">Volver</button>
    </form>
    </div>`

document.getElementById('create-acc').addEventListener('click', (e) => {   
    e.preventDefault();
    let name= document.getElementById('name').value;
    let surname= document.getElementById('surname').value;
    let email= document.getElementById('email-new-user').value;
    let password= document.getElementById('password-new.user').value;
    let confirmPass= document.getElementById('confirm-pass').value;
    let country= document.getElementById('country').value;
    let city= document.getElementById('city').value;

    console.log(name,surname,email,password,confirmPass,country,city);

    if (name === "" || name.length <3 ){
        document.getElementById("error-create-name").innerHTML = "Ingresa nombre válido"
    }
     if(surname === "" || surname.length <3){
        document.getElementById("error-create-surname").innerHTML = "Ingresa apellido válido"
     }
     if(email === ""  || !validateEmail(email)){
        document.getElementById("error-create-email").innerHTML = "Ingresa email válido"
     }
      if(password === ""  || password.length < 6 ){
        document.getElementById("error-create-password").innerHTML = "Ingresa contraseña válida"
     }
     if(confirmPass === "" || password != confirmPass ){
        document.getElementById("error-create-confirm").innerHTML = "Contreaseña no coinciden"
    }
     if(country === "" ||  country.length <3 ){
        document.getElementById("error-create-country").innerHTML = "Ingresa país valido"
    }
     if(city === "" ||  city.length <3 ){
        document.getElementById("error-create-city").innerHTML = "Ingresa ciudad válida"
    };
 

  //validar nuevo usario 
  let result = validateNewUser(name,surname,email,password,confirmPass,country,city);
  if(result === true){
  createUserFirebase(email,password);
  console.log(result);

  }

 document.getElementById('volver-home').addEventListener('click', () => {
    templateHomeSingIn();
    window.location.hash = '#/home'
 })
})};


   
