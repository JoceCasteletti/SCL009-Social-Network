 import { templateHomeSingIn } from './assets/views/templateHomeSingIn.js';
//CREAR NUEVO USUARIO
 const newUser = document.getElementById("form-new-user");
 newUser.addEventListener('submit', )



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
