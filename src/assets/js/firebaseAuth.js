 import { templateHomeSingIn } from './assets/views/templateHomeSingIn.js';
//CREAR NUEVO USUARIO
 const newUser = document.getElementById("form-new-user");
 newUser.addEventListener('submit', (e) => {
 e.preventDefault();

//GET infor user
const name = newUser['name'].value;
const surname = newUser['surname'].value;
const emailNewUser = newUser['email-new-user'].value;
const password = newUser['password'].value;
const confirmPassword = newUser['confirm-password'].value;
const country = newUser['country'].value;
const city = newUser['city'].value;

 
 console.log(name,surname,emailNewUser,password,confirmPassword,country,city);
 
 })



// handleSignUp() => {
//   let email = document.getElementById('email').value;
//   let password = document.getElementById('password').value;
//   if (email.length < 4) {
//     alert('Please enter an email address.');
//     console.log(email);
//     return;
//   }
//   if (password.length < 4) {
//     alert('Please enter a password.');
//     console.log(password);
//     return;
//   }





firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
