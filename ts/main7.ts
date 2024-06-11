var numeroOperar = document.getElementById('numero1') as HTMLInputElement;
var btnFactorial = document.getElementById('btnFactorial') as HTMLButtonElement;
const Resultado = document.getElementById('resultado') as HTMLParagraphElement;
let numeroFactorial: number = 0;

function recibirValores() {
    let respuesta: number = 0;
    numeroFactorial = parseFloat(numeroOperar.value);
    if (numeroFactorial === 0 || numeroFactorial === 1) {
        Resultado.textContent = "Ingrese un número mayor que 0";
        return 1;
    }
    else if (numeroFactorial < 0) {
        Resultado.textContent = "Ingrese un número positivo";
        return -1;
    }

    else if (isNaN(numeroFactorial)) {
        Resultado.textContent = "Ingrese un valor numerico";
    }
    else {
        numeroFactorial = parseFloat(numeroOperar.value);
        let factorial: number = 1;
        for (let i= 1; i<=numeroFactorial; i++ ){
            factorial*=i;
            console.log (factorial);
            Resultado.textContent= "El factorial es: " + factorial + "*"+ "i"+ "="+ factorial;
    }
    return respuesta
}

}
btnFactorial.addEventListener('click', recibirValores);
