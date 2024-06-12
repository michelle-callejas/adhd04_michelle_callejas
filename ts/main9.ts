document.addEventListener('DOMContentLoaded', () => {
    const numeroOperar = document.getElementById('numero1') as HTMLInputElement;
    const btnPrimo = document.getElementById('btnPrimo') as HTMLButtonElement;
    const Resultado = document.getElementById('resultado') as HTMLParagraphElement;
    let numeroObtenido: number = 0;

    function recibirValores(event: Event) {
        event.preventDefault(); 
        let respuesta: number = 0;
        numeroObtenido = parseFloat(numeroOperar.value);
        let num: number = 0;

        if (numeroObtenido === 0 || numeroObtenido === 1) {
            Resultado.textContent = "Ingrese un número mayor que 1";
            return 1;
        } else if (numeroObtenido < 0) {
            Resultado.textContent = "Ingrese un número positivo";
            return -1;
        } else if (isNaN(numeroObtenido)) {
            Resultado.textContent = "Ingrese un valor numérico";
            return -1;
        } else {
            if (esPrimo(numeroObtenido)) {
                Resultado.textContent = "El número " + numeroObtenido + " es primo";
            } else {
                Resultado.textContent = "El número " + numeroObtenido + " es compuesto";
            }
        }

        return respuesta;
    }

    function esPrimo(numero: number): boolean {
        if (numero <= 1) return false;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }

    btnPrimo.addEventListener('click', recibirValores);
});
