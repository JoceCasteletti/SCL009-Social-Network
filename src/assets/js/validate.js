/* función chequear que los datos para el ingreso no estan vacios */
export const validateNewUser = (name, surname, email, password, confirmPass, country, city) => {
    if (name === "" || surname === "" || email === "" || password === "" 
    || confirmPass === ""     || country === "" || city === ""
	|| password.length < 6 || password != confirmPass ) {
		//return false;
		console.log('dddd');
	}
	return true;
}

//Validación de @ en email
//export const checkAtEmail = (email) => {
	//let checkAt = /\S+@\S+\.\S+/;
	//return checkAt.test(email);
  
//}

	