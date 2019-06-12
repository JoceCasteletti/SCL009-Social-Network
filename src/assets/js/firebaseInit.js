export const firebaseInit = () =>{

let firebaseConfig = {
    apiKey: "AIzaSyCb_-zonn7G_Db4bjvgxR0Z_rp_VWMPuV0",
    authDomain: "patria-red-social.firebaseapp.com",
    databaseURL: "https://patria-red-social.firebaseio.com",
    projectId: "patria-red-social",
    storageBucket: "patria-red-social.appspot.com",
    messagingSenderId: "954139806218",
    appId: "1:954139806218:web:9521e124bf38c8e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
};


  // Initialize Cloud Firestore through Firebase
//   let db = firebase.firestore();
  