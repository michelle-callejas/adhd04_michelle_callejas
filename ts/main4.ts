document.addEventListener('DOMContentLoaded', () => {
    
    const number1 = document.getElementById('numero1') as HTMLInputElement;
    const number2 = document.getElementById('numero2') as HTMLInputElement;
    const number3 = document.getElementById('numero3') as HTMLInputElement;
    const btnOrdenamiento = document.getElementById('ordenarNumeros') as HTMLButtonElement;
    const resultadoP = document.getElementById('resultado') as HTMLParagraphElement;

    function ordenarNumeros(event:Event){
        event.preventDefault();
        const numero1: number = parseFloat(number1.value);
        const numero2: number = parseFloat(number2.value);
        const numero3: number = parseFloat(number3.value);

        let mayor: number, medio: number, menor: number;
        if (numero1 >= numero2 && numero1 >= numero3) {
            mayor = numero1;
            if (numero2 >= numero3) {
                medio = numero2;
                menor = numero3;
            } else {
                medio = numero3;
                menor = numero2;
            }
        } else if (numero2 >= numero1 && numero2 >= numero3) {
            mayor = numero2;
            if (numero1 >= numero3) {
                medio = numero1;
                menor = numero3;
            } else {
                medio = numero3;
                menor = numero1;
            }
        } else {
            mayor = numero3;
            if (numero1 >= numero2) {
                medio = numero1;
                menor = numero2;
            } else {
                medio = numero2;
                menor = numero1;
            }
        }

        const resultado = ` El número menor es:   ${menor}   El número del medio es:   ${medio}  El número mayor es:   ${mayor}`;
        resultadoP.textContent = resultado;
    }

    btnOrdenamiento.addEventListener('click',ordenarNumeros);
});
