document.addEventListener('DOMContentLoaded', function () {
    var numeroOperar = document.getElementById('numero1');
    var btnNumeroPerfecto = document.getElementById('btnNumeroPerfecto');
    var Resultado = document.getElementById('resultado');
    var numeroCandidato = parseFloat(numeroOperar.value);
    function recibirValores(event) {
        event.preventDefault();
        var numeroCandidato = parseFloat(numeroOperar.value);
        if (isNaN(numeroCandidato) || numeroCandidato <= 0) {
            Resultado.textContent = "Ingrese un número válido y positivo.";
            return;
        }
        var sumador = 0;
        for (var i = numeroCandidato - 1; i > 0; i--) {
            if (numeroCandidato % i === 0) {
                sumador += i;
            }
        }
        if (numeroCandidato === sumador) {
            Resultado.textContent = "El número es PERFECTO";
        }
        else {
            Resultado.textContent = "El número es IMPERFECTO";
        }
    }
    btnNumeroPerfecto.addEventListener('click', recibirValores);
});
