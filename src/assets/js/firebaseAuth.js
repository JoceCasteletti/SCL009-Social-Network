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

  // iniciar sesión con gmail
export const  signInGmail=()=> {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
      window.location.hash='#/post';

    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    }); 

 
  }