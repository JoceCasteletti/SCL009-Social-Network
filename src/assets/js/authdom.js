import { createUserFirebase } from './firebaseAuth.js';
import {validateNewUser} from './validate.js';
import {validateEmail} from './validate.js';

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
      createUserFirebase(validateEmail(email),password);
      document.getElementById("error-create").innerHTML = "";
} document.getElementById("error-create").innerHTML = "Faltan campos";
console.log(result)
};

