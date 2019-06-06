// import { createemplateNewUser} from'./assets/views/templateNewUser.js';

//CREAR NUEVO USUARIO

export const createUserFirebase = (email,password) =>
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(() => {
sendVerification();
alert("te enviamos un mail ctm")
})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  //enviar correo de verificacion al nuevo usuario
  function sendVerification() {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      console.log("enviamos un correo");
      // Update successful.
    }).catch(function(error) {
      console.log(error);
  })};