function calcular(){ 
    let num1 = prompt("Ingresa el primer número:");
    let num2 = prompt("Ingresa el segundo número:");
    let num3 = prompt("Ingresa el tercer número:");
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    let suma = (num1 + num2 + num3) / 3; 
    alert("Resultado: " + suma);
} else {
    alert("Ingrese solo numeros.");
}
}