function validar(form, evt) {
	let user = document.getElementById('usuario').value
	let pass = document.getElementById('password').value

	if(user === ''|| pass === ''){
		alert('Debe completar todos los campos.');
		evt.preventDefault() 
	} else {
		if(validarMail(user) != true){
			alert(validarMail(user));
			evt.preventDefault() 	
		} 

	}
}

function validarMail(e) {
	if(!e.includes('@')){
		return 'Falta el arroba';
	} else {
		var filtro = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
		if(String(e).search (filtro) === -1){
		    return 'Formato incorrecto. El e-mail debe tene el siguiente formato: ejemplo@tumail.com';    
		} else {
			return true;
		}
	}
}