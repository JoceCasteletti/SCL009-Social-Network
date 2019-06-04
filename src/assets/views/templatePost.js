
import { templateNewUser } from './templateNewUser.js'
import { templateHomeSingIn } from './templateHomeSingIn.js'

export const templatePost = () => {

    document.getElementById('root').innerHTML =
`
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
</div>`
}
// document.getElementById("btn-home").addEventListener('click', () => {
//     templateHomeSingIn();
//     window.location.hash = '#/home'
//  })

//  document.getElementById("btn-crear").addEventListener('click', () => {
//     templateNewUser();
//     window.location.hash = '#/new-user'
//  })