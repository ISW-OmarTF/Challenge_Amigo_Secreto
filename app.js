//Desarrollado por Omar Torres Flores
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let numeroAmigos=0;
function agregarAmigo(){
    const nombreAmigo=inputAmigo.value;
    if(validarNombre(nombreAmigo)==true){    
        console.log("Amigo agregado correctamente "+nombreAmigo);
        insertarAmigo(nombreAmigo, listaAmigos);
    }else{
        console.log("El nombre no es valido y no se inserta");
    }
    inputAmigo.value="";
    numeroAmigos= listaAmigos.children.length;
    console.log("Los lista de amigos es de: "+numeroAmigos)
}
//{}
function validarNombre(nombreAmigo){
    let nombreValido=true;
    var regex = /^[A-Za-záéíóúÁÉÍÓÚ]{2,}$/;
    if (regex.test(nombreAmigo)) {
        nombreValido=true;
        console.log("Nombre válido");
    } else {
        alert("Ingrese un nombre válido");
        nombreValido= false;
    }
    return nombreValido;
}
function insertarAmigo(nombreAmigo, listaAmigos){
    const crearAmigo = document.createElement("li")
    crearAmigo.textContent = nombreAmigo;
    listaAmigos.appendChild(crearAmigo);
}
function sortearAmigo(){
    if (numeroAmigos>0){
        const numeroAleatorio=Math.floor(Math.random() * numeroAmigos);
        const amigoSecreto= listaAmigos.children[numeroAleatorio].textContent;
        //alert("El amigo secreto es: "+amigoSecreto);
        insertarAmigo(`El amigo secreto es: ${amigoSecreto}`, resultado);
        listaAmigos.innerHTML = "";
        numeroAmigos=0;


    }else{
        
        listaAmigos.innerHTML = "";
        resultado.innerHTML = "";
        alert("Aún no hay amigos para sortear");
    }

}




