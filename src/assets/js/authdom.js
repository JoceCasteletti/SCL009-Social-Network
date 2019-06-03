// import {firebaseAuth} from './firebaseAuth.js';
// import {validNewUser} from './validate.js';

export const createNewUser = () => {

    let name= document.getElementById('name').value;
    let surname= document.getElementById('surname').value;
    let email= document.getElementById('email-new-user').value;
    let password= document.getElementById('password').value;
    let confirmPass= document.getElementById('confirm-pass').value;
    let country= document.getElementById('country').value;
    let city= document.getElementById('city').value;

    console.log(name,surname,email,password,confirmPass,country,city);
};
