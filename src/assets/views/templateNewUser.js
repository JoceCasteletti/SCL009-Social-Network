import { templatePost } from './templatePost.js'
import { templateHomeSingIn } from './templateHomeSingIn.js'


export const templateNewUser = () =>{

    document.getElementById('dinamicTemplates').innerHTML =
` <div
<h1> Nuevo Usuario Patria </h1>
<form>
<div id="name">
<input type="text" class="info-new" placeholder="Nombre">
</div>
<div id="surname">
<input type="text" class="info-new"" placeholder="Apellido">
</div>
<div id="email-new-user">
<input type="text" class="info-new"" placeholder="Email">
</div>
<div id="password-new.user">
<input type="text" class="info-new"" placeholder="Contraseña 6 dígitos">
</div>
<div id="confirm-password">
<input type="text" class="info-new"" placeholder="Confirmar contraseña 6 dígitos">
</div>
<div id="pais">
<input type="text" class="info-new"" placeholder="Pais">
</div>
<div id="ciudad">
<input type="text" class="info-new"" placeholder="Ciudad">
</div>
<div id="create-acc"
<button type="" class="">Crear Cuenta </button>
</div>
</form>
</div>`
}

// document.getElementById('btn-crear').addEventListener('click', () => {
//     templatePost();
//     window.location.hash = '#/post'
//  })

//  document.getElementById('btn').addEventListener('click', () => {
//     templateHomeSingIn();
//     window.location.hash = '#/home'
//  })