document.addEventListener('DOMContentLoaded', function () {
    var btnPromedio = document.getElementById('btnPromedio');
    var number1 = document.getElementById('txtNumero1');
    var number2 = document.getElementById('txtNumero2');
    var number3 = document.getElementById('txtNumero3');
    var resultado = document.getElementById('resultado');
    function calcularPromedio(event) {
        event.preventDefault();
        var numero1 = parseFloat(number1.value);
        var numero2 = parseFloat(number2.value);
        var numero3 = parseFloat(number3.value);
        var promedio = (numero1 + numero2 + numero3) / (3);
        resultado.textContent = "El promedio es: " + promedio.toFixed(2);
    }
    btnPromedio.addEventListener('click', calcularPromedio);
});
