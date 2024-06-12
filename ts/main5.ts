document.addEventListener('DOMContentLoaded', () => {
    const numeroOperar = document.getElementById('numero') as HTMLInputElement;
    const potenciaOperar = document.getElementById('potencia') as HTMLInputElement;
    const btnPotencia = document.getElementById('btnPotencia') as HTMLButtonElement;
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    function recibirValores(base: number, exponente: number) {
        return base ** exponente;
    }

    function elevarNumero(event: Event) {
        event.preventDefault();
        const base = parseFloat(numeroOperar.value);
        const exponente = parseFloat(potenciaOperar.value);

        if (isNaN(base) || isNaN(exponente)) {
            resultado.textContent = "Ingrese valores numéricos válidos";
        } else {
            const elevado = recibirValores(base, exponente);
            resultado.textContent = "El número " + base + " elevado a la " + exponente + " potencia es: " + elevado;
        }
    }

    btnPotencia.addEventListener('click', elevarNumero);
});
