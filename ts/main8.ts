document.addEventListener('DOMContentLoaded', () => {
    const numeroOperar = document.getElementById('numero1') as HTMLInputElement;
    const btnNumeroPerfecto = document.getElementById('btnNumeroPerfecto') as HTMLButtonElement;
    const Resultado = document.getElementById('resultado') as HTMLParagraphElement;
    let numeroCandidato: number = parseFloat(numeroOperar.value);

    function recibirValores(event: Event) {
        event.preventDefault();
        const numeroCandidato: number = parseFloat(numeroOperar.value);
        if (isNaN(numeroCandidato) || numeroCandidato <= 0) {
            Resultado.textContent = "Ingrese un número válido y positivo.";
            return;
        }
        
        let sumador: number = 0;

        for (let i = numeroCandidato - 1; i > 0; i--) {
            if (numeroCandidato % i === 0) { 
                sumador += i;
            }
        }

        if (numeroCandidato === sumador) {
            Resultado.textContent = "El número es PERFECTO";
        } else {
            Resultado.textContent = "El número es IMPERFECTO";
        }
    }

    btnNumeroPerfecto.addEventListener('click', recibirValores);
});