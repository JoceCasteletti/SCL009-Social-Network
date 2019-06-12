//CREAR NUEVO USUARIO|
export const createUserFirebase = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      emailVerification();
    });

//enviar correo de verificacion al nuevo usuario
export function emailVerification() {
  let user = firebase.auth().currentUser;
  if(!user){
    return;
  }
  user.sendEmailVerification().then(function () {
    console.log("enviamos un correo");
    // Update successful.
  }).catch(function (error) {
    console.log(error);
  })
};

// iniciar sesión con gmail
export const signInGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
      window.location.hash = '#/post';

    }).catch(function (error) {
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

// Iniciar sesión con credencial
export const signInWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

//onAuthStateChanged metodo Observador

export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      console.log("usuario activo");
      if(user.emailVerification){
        window.location.hash = "#/post";
      }
      else{
        alert("verifica tu mail pliss");
      }
    }else{
      console.log("usuario no activo");
      window.location.hash = '#/home'
    // if(user.emailVerifed){
    //    console.log("el usuario verifico su mail");
    //    window.location.hash = '#/post'
    //   // else{
    //   //   window.location.hash = '#/home'; 
    //   // }
    //   // window.location.hash = '#/';
    //   // User is signed in.
    // }else {
    //   console.log("No existe usuario logueado")
    //   window.location.hash = '';
      // No user is signed in.
    }
    
    });
}
/*Función signOut(), que sirve para que cuando el usuario cierre sesión, lo dirigia a la pantalla de inicio*/

export const signOut = () => {
  firebase.auth().signOut()
    .then(function () {
      //swal("Chao!");
      window.location.hash = '';
    }).catch(function (error) {
      // An error happened.
    });
}
