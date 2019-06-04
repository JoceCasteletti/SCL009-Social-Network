//import { templateNewUser} from'./assets/views/templateNewUser.js';

//CREAR NUEVO USUARIO

export const firebaseAuth = firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
