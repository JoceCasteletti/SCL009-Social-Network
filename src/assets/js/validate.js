/* función chequear que los datos para el ingreso no estan vacios */
export const validateNewUser = (name, surname, email, password, confirmPass, country, city) => {
    if (name === "" || surname === "" || email === "" || password === "" 
    || confirmPass === "" || country === "" || city === ""
	|| name.length <3 || password.length < 6 || password != confirmPass || !validateEmail(email)) {
		return false;
	}else {
	return true;
}}

//Validación de @ en email
export const validateEmail = (email) => {
 let emailpattern = /\S+@\S+\.\S+/;
	return emailpattern.test(email);
}


/*validaciones para el inicio de sesion no este vacia*/
export const validateSignInWithEmailAndPassword = (emailUser,passwordUser) => {
	if(emailUser === ""|| passwordUser ==="" ){
	  return false;
	}else{
	  return true;
	};
  };