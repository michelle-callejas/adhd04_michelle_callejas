document.addEventListener('DOMContentLoaded', function () {
    var cTexto = document.getElementById('cadenaTexto');
    var btnContadorVocales = document.getElementById('btnContadorVocales');
    var resultado = document.getElementById('resultado');
    function contarVocales(data) {
        return data.replace(/[^aeiouAEIOU]/g, "").length;
    }
    function obtenerDatos(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        if (cTexto.value !== null && cTexto.value.trim() !== "") {
            var result = contarVocales(cTexto.value);
            resultado.textContent = "El número de vocales es: " + result;
        }
        else {
            resultado.textContent = "Por favor ingrese un texto.";
        }
    }
    btnContadorVocales.addEventListener('click', obtenerDatos);
});
