const registrar = () => {
    let email = document.getElementById('email').value;
    let contrasena = document.getElementById('contrasena').value;
if(email== "" || contrasena==""){
   document.getElementById("error-ingreso").innerHTML = "Tu mail o contraseña son incorrectos"
}
   
   
   
    console.log(email);
    console.log(contrasena);
   
   }