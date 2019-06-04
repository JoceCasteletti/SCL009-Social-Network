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

export const checkAtEmail = (email) => {
	let checkAt = /\S+@\S+\.\S+/;
	return checkAt.test(email);
  
}

/*b)Función que valida que el usuario debe ingresar un @ cuando ingresa un correo*/

	/*expresión regular que simula el patron de búsqueda del correo electrónico*/
	