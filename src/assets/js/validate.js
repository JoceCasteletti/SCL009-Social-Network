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

// export const validateSingIn = (email, password) => {
// 	if(!validateEmail(email),password || email === "" || password === ""){
// 		return false;
// 	}else {
// 		return true;
// 	}
// }



	
