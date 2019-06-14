//Funcion que checkea que todos se ingresen todos los campos, con cantidad de letras necesarias, 
//que contraseñas coincidadn y que sea un mail con parametros validos.
export const validateNewUser = (name, surname, email, password, confirmPass, country, city) => {
    if (name === "" || surname === "" || email === "" || password === "" 
    || confirmPass === "" || country === "" || city === ""
	|| name.length <3 || password.length < 6 || password != confirmPass || !validateEmail(email)) {
		return false;
	}else {
	return true;
}};

//Checkea que los emails tengas patrones de emails como el @
export const validateEmail = (email) => {
 let emailpattern = /\S+@\S+\.\S+/;
	return emailpattern.test(email);
};

//checkea que los campos tengas datos ingresados que cumplan con el min de letras y que sea un 
//usuario valido para inciar sesion
export const validateSignInWithEmailAndPassword = (emailUser,passwordUser) => {
	if(emailUser === ""|| passwordUser === "" || !validateEmail(emailUser)){
	  return false;
	}else{
	  return true;
	};
};



	
