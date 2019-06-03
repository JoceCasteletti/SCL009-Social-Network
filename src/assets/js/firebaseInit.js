export const firebaseInit = () =>{

let firebaseConfig = {
    apiKey: "AIzaSyBkN8Tj0PnSgohRCLSHmwAJnNUlj2Vh9jg",
    authDomain: "prueba-df0bd.firebaseapp.com",
    databaseURL: "https://prueba-df0bd.firebaseio.com",
    projectId: "prueba-df0bd",
    storageBucket: "prueba-df0bd.appspot.com",
    messagingSenderId: "393301103298",
    appId: "1:393301103298:web:c2b9ed3d2073eba5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
};