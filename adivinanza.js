function adivinar(){
const numeroAleatorio= Math.floor(Math.random() * 11);
let nume= prompt("Elegi un numero entre el 0 y el 10");
if (nume=numeroAleatorio){
    alert("Haz acertado")
}else{
    alert("No lo adivinaste")
}
}