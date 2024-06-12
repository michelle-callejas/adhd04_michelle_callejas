document.addEventListener('DOMContentLoaded', function () {
    var numeroOperar = document.getElementById('numero1');
    var btnPrimo = document.getElementById('btnPrimo');
    var Resultado = document.getElementById('resultado');
    var numeroObtenido = 0;
    function recibirValores(event) {
        event.preventDefault();
        var respuesta = 0;
        numeroObtenido = parseFloat(numeroOperar.value);
        var num = 0;
        if (numeroObtenido === 0 || numeroObtenido === 1) {
            Resultado.textContent = "Ingrese un número mayor que 1";
            return 1;
        }
        else if (numeroObtenido < 0) {
            Resultado.textContent = "Ingrese un número positivo";
            return -1;
        }
        else if (isNaN(numeroObtenido)) {
            Resultado.textContent = "Ingrese un valor numérico";
            return -1;
        }
        else {
            if (esPrimo(numeroObtenido)) {
                Resultado.textContent = "El número " + numeroObtenido + " es primo";
            }
            else {
                Resultado.textContent = "El número " + numeroObtenido + " es compuesto";
            }
        }
        return respuesta;
    }
    function esPrimo(numero) {
        if (numero <= 1)
            return false;
        for (var i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
    btnPrimo.addEventListener('click', recibirValores);
});
