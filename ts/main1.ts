document.addEventListener('DOMContentLoaded', () => {
    const btnPromedio = document.getElementById('btnPromedio') as HTMLButtonElement;
    const number1 = document.getElementById('txtNumero1') as HTMLInputElement;
    const number2 = document.getElementById('txtNumero2') as HTMLInputElement;
    const number3 = document.getElementById('txtNumero3') as HTMLInputElement;
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    function calcularPromedio(event: Event)  {
        event.preventDefault(); 
        const numero1: number = parseFloat(number1.value);
        const numero2: number = parseFloat(number2.value);
        const numero3: number = parseFloat(number3.value);
        const promedio: number = (numero1 + numero2 + numero3) / (3);
        resultado.textContent = "El promedio es: " + promedio.toFixed(2);
    }

    
    btnPromedio.addEventListener('click', calcularPromedio);
});
