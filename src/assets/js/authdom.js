import { crateUserFirebase } from './firebaseAuth.js'
import {validateNewUser} from './validate.js';

export const createNewUser = () => {

    let name= document.getElementById('name').value;
    let surname= document.getElementById('surname').value;
    let email= document.getElementById('email-new-user').value;
    let password= document.getElementById('password-new.user').value;
    let confirmPass= document.getElementById('confirm-pass').value;
    let country= document.getElementById('country').value;
    let city= document.getElementById('city').value;

    console.log(name,surname,email,password,confirmPass,country,city);
//validar nuevo usario 
let result = validateNewUser(name,surname,email,password,confirmPass,country,city)
if(result === true){
    crateUserFirebase(email,password);
} document.getElementById("error-create-name").innerHTML = "te equivocaste ridicule";
console.log(result)
};
