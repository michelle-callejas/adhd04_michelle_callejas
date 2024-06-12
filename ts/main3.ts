document.addEventListener('DOMContentLoaded', () => {
    const numeroObtenido = document.getElementById('numeroIngresado') as HTMLInputElement;
    const btnTipoNumero = document.getElementById('btnTipoNumero') as HTMLButtonElement;
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    function identificarNumero(event: Event) {
        event.preventDefault();
        const numeroDeterminar: number = parseFloat(numeroObtenido.value);

        if (isNaN(numeroDeterminar)) {
            resultado.textContent = "Ingrese un número válido.";
            return;
        }

        if (numeroDeterminar % 2 === 0) {
            resultado.textContent = "El número: " + numeroDeterminar + " es par.";
        } else {
            resultado.textContent = "El número: " + numeroDeterminar + " es impar.";
        }
    }

    btnTipoNumero.addEventListener('click', identificarNumero);
});
