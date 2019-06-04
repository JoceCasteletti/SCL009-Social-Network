
/* función chequear que los datos para el ingreso no estan vacios */
export const checkUser = (name, surname, email, password, confirmPass, country, city) => {
	if (name === "" || surname === "" || email === "" || password === "" || confirmPass === "" || country === "" || city === ""
		|| password.length < 6 || password != confirmPass ) {
		return false;
	}
	return true;
}
