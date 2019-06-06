// import { createemplateNewUser} from'./assets/views/templateNewUser.js';

//CREAR NUEVO USUARIO|

export const createUserFirebase = (email,password) =>
firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  //enviar correo de verificacion al nuevo usuario
  export function emailVerification() {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      console.log("enviamos un correo");
      // Update successful.
    }).catch(function(error) {
      console.log(error);
  })};