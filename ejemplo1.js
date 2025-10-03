let contador = 1;
let boton = document.getElementById("btnbajar");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    contador--;
    numero.textContent = contador;
});