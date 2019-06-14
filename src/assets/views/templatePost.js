<<<<<<< HEAD
import {
    signOut
} from '../js/firebaseAuth.js';
=======

import { signOut } from '../js/firebaseAuth.js';
>>>>>>> 7702983b13561bc3ab16e7d76a36567d2e0a2846

export const templatePost = () => {

    document.getElementById('root').innerHTML =
<<<<<<< HEAD
    
        `<div class="flex-center">
<h1>Página en construcción</h1>
<img id="working" class="flex-center" src="assets/img/workingprogress.jpg" alt="imagen seguimos trabajando">
<div id="salir-pagina">
<h3>Haz click aqui para cerrar sesion</h3>
<button id="signout" class="form-group">Cerrar sesión</button>
</div>
=======
        `
<button id="signout">Cerrar sesión</button>
<div>
<div id="profile">
<img src="" id="" alt=""/> 
<h2>Tu Nombre </h2>
<h3>Tu email </h3>
<h3>Pais, ciudad </h3>
</div>
<div class="posts">
<img src="" id="" alt=""/> 
<span> <button>Nombre Usuario</button></span>
<input type"text" class="form-control" placeholder="Escribe aquí tu comentario </input>
<button class"btn-like">Like</button>

<div class="wall">
<form>
<div class="posts">
<img src="" id="" alt=""/> 
<span> <button>Nombre Usuario</button></span>
<input type"text" class="form-control" placeholder="Escribe aquí tu comentario </input>
<button class"btn-like">Like</button>
</div>
<div class="posts">
<img src="" id="" alt=""/> 
<span> <button>Nombre Usuario</button></span>
<input type"text" class="form-control" placeholder="Escribe aquí tu comentario </input>
<button class"btn-like">Like</button>
<div class="posts">
<img src="" id="" alt=""/> 
<span> <button>Nombre Usuario</button></span>
<input type"text" class="form-control" placeholder="Escribe aquí tu comentario </input>
<button class"btn-like">Like</button>
<div class="posts">
<img src="" id="" alt=""/> 
<span> <button>Nombre Usuario</button></span>
<input type"text" class="form-control" placeholder="Escribe aquí tu comentario </input>
<button class"btn-like">Like</button>
</form>
>>>>>>> 7702983b13561bc3ab16e7d76a36567d2e0a2846
</div>`

    document.getElementById('signout').addEventListener('click', () => {
        signOut();
    })


}