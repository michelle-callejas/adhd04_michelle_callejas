document.addEventListener('DOMContentLoaded', () => {
    
    const cTexto = document.getElementById('cadenaTexto') as HTMLInputElement;
    const btnContadorVocales = document.getElementById('btnContadorVocales') as HTMLButtonElement;
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    function contarVocales(data: string): number {
        return data.replace(/[^aeiouAEIOU]/g, "").length;
    }

    function obtenerDatos(event: Event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        if (cTexto.value !== null && cTexto.value.trim() !== "") {
            let result = contarVocales(cTexto.value);
            resultado.textContent = "El número de vocales es: " + result;
        } else {
            resultado.textContent = "Por favor ingrese un texto.";
        }
    }

    btnContadorVocales.addEventListener('click', obtenerDatos); 
});
