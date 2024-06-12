document.addEventListener('DOMContentLoaded', function () {
    var number1 = document.getElementById('numero1');
    var number2 = document.getElementById('numero2');
    var number3 = document.getElementById('numero3');
    var btnOrdenamiento = document.getElementById('ordenarNumeros');
    var resultadoP = document.getElementById('resultado');
    function ordenarNumeros(event) {
        event.preventDefault();
        var numero1 = parseFloat(number1.value);
        var numero2 = parseFloat(number2.value);
        var numero3 = parseFloat(number3.value);
        var mayor, medio, menor;
        if (numero1 >= numero2 && numero1 >= numero3) {
            mayor = numero1;
            if (numero2 >= numero3) {
                medio = numero2;
                menor = numero3;
            }
            else {
                medio = numero3;
                menor = numero2;
            }
        }
        else if (numero2 >= numero1 && numero2 >= numero3) {
            mayor = numero2;
            if (numero1 >= numero3) {
                medio = numero1;
                menor = numero3;
            }
            else {
                medio = numero3;
                menor = numero1;
            }
        }
        else {
            mayor = numero3;
            if (numero1 >= numero2) {
                medio = numero1;
                menor = numero2;
            }
            else {
                medio = numero2;
                menor = numero1;
            }
        }
        var resultado = " El n\u00FAmero menor es:   ".concat(menor, "   El n\u00FAmero del medio es:   ").concat(medio, "  El n\u00FAmero mayor es:   ").concat(mayor);
        resultadoP.textContent = resultado;
    }
    btnOrdenamiento.addEventListener('click', ordenarNumeros);
});
