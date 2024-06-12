document.addEventListener('DOMContentLoaded', function () {
    var numeroObtenido = document.getElementById('numeroIngresado');
    var btnTipoNumero = document.getElementById('btnTipoNumero');
    var resultado = document.getElementById('resultado');
    function identificarNumero(event) {
        event.preventDefault();
        var numeroDeterminar = parseFloat(numeroObtenido.value);
        if (isNaN(numeroDeterminar)) {
            resultado.textContent = "Ingrese un número válido.";
            return;
        }
        if (numeroDeterminar % 2 === 0) {
            resultado.textContent = "El número: " + numeroDeterminar + " es par.";
        }
        else {
            resultado.textContent = "El número: " + numeroDeterminar + " es impar.";
        }
    }
    btnTipoNumero.addEventListener('click', identificarNumero);
});
