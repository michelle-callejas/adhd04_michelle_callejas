document.addEventListener('DOMContentLoaded', function () {
    var cTexto = document.getElementById('cadenaTexto');
    var btnReves = document.getElementById('mostradorTexto');
    var imprimirTextoVolteado = document.getElementById('resultado');
    function reves(cTexto) {
        var reverso = '';
        for (var i = cTexto.length - 1; i >= 0; i--) {
            reverso += cTexto.charAt(i);
        }
        return reverso;
    }
    function invertirTexto(event) {
        event.preventDefault();
        var texto = cTexto.value;
        if (texto === '') {
            imprimirTextoVolteado.textContent = "Por favor ingrese un texto.";
        }
        else {
            var textoVolteado = reves(texto);
            imprimirTextoVolteado.textContent = "Su nuevo texto es: " + textoVolteado;
        }
    }
    btnReves.addEventListener('click', invertirTexto);
});
