
//CREAR NUEVO USUARIO|
export const createUserFirebase = (email, password, name, surname, country, city) =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    emailVerification();
  })
  .catch(function(error) {
  console.log("usuario se esta creando") 

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//enviar correo de verificacion al nuevo usuario
export function emailVerification() {
  let user = firebase.auth().currentUser;
  if(!user) return;
  user.sendEmailVerification().then(function () {
     console.log("enviamos un correo");
    // Update successful.
  }).catch(function (error) {
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
      console.log('hola')
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
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    let user = firebase.auth().currentUser;
      if (user.emailVerified) {
        window.location.hash = '#/post';  
  // User is signed in.
} else 
alert("Necesitas confirmar tu email")
   console.log("no haz verificado tu email")
  // No user is signed in.
})
  .catch(function(error) {
    alert("Usuario incorrecto")
    console.log("SignInWithUsernameAndPassword not OK");
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //...
  });
};
   


//onAuthStateChanged metodo Observador

export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);

      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      console.log(user.emailVerified);
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;

      // if(emailVerified) {
      //   console.log("Mail esta verificado");
      //   window.location.hash = '#/post'
      } else {
        // alert('debes confirmar tu email')
        console.log("No esta logeado");
        window.location.hash = '#/home';
      // User is signed out.
      // ...
    }
  })};
//const para que deje pasar si verifica el email
    //  const enter = (user)=>{
    //    let userEmail = user;
    //   if(userEmail.emailVerification){
    //     window.location.hash = '#/post'
    //     return true;
    //    console.log("email esta verificado ctm")
    //   }
    //   if(!userEmail.emailVerification){
    //     console.log("verificate tu email parrrfavar")
    //     window.location.hash = '#/home'
    //   }
    // }
      
//

  // if(!user.emailVerification){
      //   console.log("no verifcado")
      //   window.location.hash = "#/home";
      // }
      // else{
      //   window.location.hash = "#/post";
      // }
      // if(emailVerified === true){
      //   window.location.hash = "#/post";
      // }else {
      //   alert("confirma tu email")
      // }

//     // if(user.emailVerifed){
//     //    console.log("el usuario verifico su mail");
//     //    window.location.hash = '#/post'
//     //   // else{
//     //   //   window.location.hash = '#/home'; 
//     //   // }
//     //   // window.location.hash = '#/';
//     //   // User is signed in.
//     // }else {
//     //   console.log("No existe usuario logueado")
//     //   window.location.hash = '';
//       // No user is signed in.
//     }
    
//     });
// }


/*Función signOut(), que sirve para que cuando el usuario cierre sesión, lo dirigia a la pantalla de inicio*/

export const signOut = () => {
  firebase.auth().signOut()
    .then(function () {
      //swal("Chao!");
      window.location.hash = '';
    }).catch(function (error) {
      // An error happened.
    });
 };

