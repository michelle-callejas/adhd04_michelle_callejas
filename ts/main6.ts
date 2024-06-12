document.addEventListener('DOMContentLoaded', () => {
    const cTexto = document.getElementById('cadenaTexto') as HTMLInputElement;
    const btnReves = document.getElementById('mostradorTexto') as HTMLButtonElement;
    const imprimirTextoVolteado = document.getElementById('resultado') as HTMLParagraphElement;

    function reves(cTexto: string): string {
        let reverso = '';
        for (let i = cTexto.length - 1; i >= 0; i--) {
            reverso += cTexto.charAt(i);
        }
        return reverso;
    }

    function invertirTexto(event: Event) {
        event.preventDefault();
        const texto = cTexto.value;
        if (texto === '') {
            imprimirTextoVolteado.textContent = "Por favor ingrese un texto.";
        } else {
            const textoVolteado = reves(texto);
            imprimirTextoVolteado.textContent = "Su nuevo texto es: " + textoVolteado;
        }
    }

    btnReves.addEventListener('click', invertirTexto);
});

