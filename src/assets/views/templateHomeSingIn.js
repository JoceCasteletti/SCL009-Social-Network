import { observer } from '../js/firebaseAuth.js';
import { templateNewUser } from './templateNewUser.js'
// import { templatePost } from './templatePost.js'
import { signInGmail} from '../js/firebaseAuth.js';


export const templateHomeSingIn = () => {
   observer();
   document.getElementById('root').innerHTML =

`<div class="logo">
  <img src="" id="" alt=""/>
</div>
<div id="text-titulo">
  <h1>Patria Comunidad</h1>
  <h3>Tips para facilitar tu viaje</h3>
</div>
<form>
   <div class="inputs-sing-in">
      <p id="error-user-email">
      <input type="text" id="email-user" class="caja-texto form-control" placeholder="Ingresa tu mail" required></input>
      <p id="error-user-pass">
      <input type="text" id="pass-user" class="caja-texto form-control" placeholder="Ingresa tu contraseña" required></input>
   </div>
   <div class="btns-option-sing-in">
     <button type="submit" id="btn-go" >Entrar</button>
     <button type="button" id="sign-in-gmail" >Iniciar con Google</button>
   </div>
</form>

<div id="createAcc">
  <h4>¿Aún no tienes cuenta?</h4>
  <button id="btn-new-user" type="button">Crear Cuenta</button>
</div>`

 
   document.getElementById('btn-go').addEventListener('click', (e) => {
   e.preventDefault();
   // let userMail = document.getElementById("email-user").value;
   // let userPass = document.getElementById("pass-user").value;

   // console.log(userMail,userPass);

   // if (userEmail === ""){
   //    document.getElementById("error-user-email").innerHTML = "Correo no válido"
   // }
   // if (userPass === "" || userPass < 6){
   //    document.getElementById("error-user-pass").innerHTML = "Contraseña no válida"
   // };

   // let singIn = validateSingIn(userMail,userPass);
   //  if(singIn === true){
   //     singInFireBase(userMail,userPass);
   //     templatePost();
   //     window.location.hash = '#/post'

   //  }});
   
   document.getElementById('sign-in-gmail').addEventListener('click', () => {
      signInGmail();
      
   })

   document.getElementById('btn-new-user').addEventListener('click', () => {
      templateNewUser();
      window.location.hash = '#/new-user'
   });
})};
