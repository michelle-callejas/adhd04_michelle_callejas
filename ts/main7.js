var numeroOperar = document.getElementById('numero1');
var btnFactorial = document.getElementById('btnFactorial');
var Resultado = document.getElementById('resultado');
var numeroFactorial = 0;
function recibirValores() {
    var respuesta = 0;
    numeroFactorial = parseFloat(numeroOperar.value);
    if (numeroFactorial === 0 || numeroFactorial === 1) {
        Resultado.textContent = "Ingrese un número mayor que 0";
        return 1;
    }
    else if (numeroFactorial < 0) {
        Resultado.textContent = "Ingrese un número positivo";
        return -1;
    }
    else if (isNaN(numeroFactorial)) {
        Resultado.textContent = "Ingrese un valor numerico";
    }
    else {
        numeroFactorial = parseFloat(numeroOperar.value);
        var factorial = 1;
        for (var i = 1; i <= numeroFactorial; i++) {
            factorial *= i;
            console.log(factorial);
            Resultado.textContent = "El factorial es: " + factorial + "*" + "i" + "=" + factorial;
        }
        return respuesta;
    }
}
btnFactorial.addEventListener('click', recibirValores);
