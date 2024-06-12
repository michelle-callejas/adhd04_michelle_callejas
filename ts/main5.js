document.addEventListener('DOMContentLoaded', function () {
    var numeroOperar = document.getElementById('numero');
    var potenciaOperar = document.getElementById('potencia');
    var btnPotencia = document.getElementById('btnPotencia');
    var resultado = document.getElementById('resultado');
    function recibirValores(base, exponente) {
        return Math.pow(base, exponente);
    }
    function elevarNumero(event) {
        event.preventDefault();
        var base = parseFloat(numeroOperar.value);
        var exponente = parseFloat(potenciaOperar.value);
        if (isNaN(base) || isNaN(exponente)) {
            resultado.textContent = "Ingrese valores numéricos válidos";
        }
        else {
            var elevado = recibirValores(base, exponente);
            resultado.textContent = "El número " + base + " elevado a la " + exponente + " potencia es: " + elevado;
        }
    }
    btnPotencia.addEventListener('click', elevarNumero);
});
