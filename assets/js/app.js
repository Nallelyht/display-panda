var restaurar  = document.getElementById("restaurar");
var imagen = document.getElementsByClassName("imagen");
var cerrar = document.getElementsByClassName("cerrar");
var longitud = imagen.length;
var texto1 = document.getElementById("lorem1");
var texto2 = document.getElementById("lorem2");
var origen = document.getElementById("origen");


restaurar.addEventListener("click",restaurarImagen);

for (var i = 0; i < cerrar.length; i++){
		cerrar[i].addEventListener("click",cerrarImagen);
	}

function restaurarImagen(){
	
	
	for (var i = 0; i < longitud; i++){
		cerrar[i].style.visibility = "visible";
	}
	console.log(longitud);
	console.log(imagen);
}

function cerrarImagen(){
		this.style.visibility = "hidden";
	
}
