//Creacion de nuevo usario con parametros necesarios, luego tomo solo email y password para
// crear nuevo usuario y ahi envia email de verificacion para completar la creacion de usuario.
export const createUserFirebase = (email, password, name, surname, country, city) =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    emailVerification();
<<<<<<< HEAD
=======
    window.location.hash='#/home';
  })
  .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
>>>>>>> 7702983b13561bc3ab16e7d76a36567d2e0a2846
  })
  .catch(function(error) {
  console.log("usuario se esta creando") 

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Si el usuario ingreso todos sus datos y queda registrado en el Auth de Firebase
// se envia un mail para confirmar. Si no quedo registrado se devuleve a donde quedo.
export function emailVerification() {
  let user = firebase.auth().currentUser;
<<<<<<< HEAD
  if(!user) return;
=======
>>>>>>> 7702983b13561bc3ab16e7d76a36567d2e0a2846
  user.sendEmailVerification().then(function () {
     console.log("enviamos un correo");
    // Update successful.
  }).catch(function (error) {
  })
};



// Iniciar sesion con Gmail
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

// Iniciar sesion con email y password que tomamos de crear nuevo usario y pedimos que se haya 
//verificado el email que enviamos al crear nuevo usuario.
export const signInWithEmailAndPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    //usamos currentUser para autentificar quien esta usando la pagina
    let user = firebase.auth().currentUser;
    //pedimos verificacion de email enviado al crear sesion para ingresar a Post
      if (user.emailVerified) {
        window.location.hash = '#/post';  
  // User is signed in.
  
  //Si no esta verificado email aparece alerta
} else 
alert("Necesitas confirmar tu email")
   console.log("no haz verificado tu email")
  // No user is signed in.
})
//si se ingresa algun usuario que no esta dentro de registro firebase aparece Usuario Incorrecto
  .catch(function(error) {
    alert("Este usuario no esta registrado")
    console.log("SignInWithUsernameAndPassword not OK");
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    //...
  });
};
   

//Observador; se ejecutra al cargar la pagina y permite acceder o no a los Post dependiendo de si 
//eres usuario o no
export const observer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
<<<<<<< HEAD
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

     
      } else {
        console.log("No esta logeado");
        window.location.hash = '#/home';
      // User is signed out.
      // ...
    }
  })};
=======
      console.log(user)
      window.location.hash = '#/post';
      // User is signed in.
    } else {
      console.log("No existe usuario logueado")
      window.location.hash = '';
      // No user is signed in.
    }
  });
}


/*Función signOut(), que sirve para que cuando el usuario cierre sesión, lo dirigia a la pantalla de inicio*/
>>>>>>> 7702983b13561bc3ab16e7d76a36567d2e0a2846


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

