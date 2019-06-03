import { templateHomeSingIn } from './assets/views/templateHomeSingIn.js'
import { templateNewUser } from './assets/views/templateNewUser.js'
import { templatePost } from './assets/views/templatePost.js'

const changeRoute = (hash) =>{
    if(hash ==='.#/new-user' || hash==='.#/post'|| hash==='.#/home' || hash=== '' || hash ==='./#' || hash ==='.#/'){
        return showTemplate(hash)
    }
}

const showTemplate = (hash) =>{
 
const router = hash.substring(2);

const containerTemplate = document.getElementById('dinamicTemplates');
containerTemplate.innerHTML='';

switch (router) {          
    case 'home':
        templateHomeSingIn();
        break;
        case 'new-user':
        templateNewUser();
        break;
        case 'post':
        templatePost();
        break;
        case '':
        templateHomeSingIn();
        break;
    default:
        containerTemplate.innerHTML = `<h1>Error 404</h1>`
}};

export const initRouter = () => {
    //evento load cuando se cargue nuestra ventana)
    window.addEventListener('load', changeRoute(window.location.hash));
//detecta los cambios en html y saca el # y asi va cambiando templates
    if('onhashchange' in window) {
        window.onchange =() =>{
      changeRoute(window.location.hash);
}}};
