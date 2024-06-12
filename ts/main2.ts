document.addEventListener('DOMContentLoaded', () => {
    class AreaTriangulo {
        private area: number = 0;
        private base: number = 0;
        private altura: number = 0;

        public obtenerBase(base: number) {
            this.base = base;
        }

        public obtenerAltura(altura: number) {
            this.altura = altura;
        }

        public calcularArea(): string {
            this.area = (this.base * this.altura) / 2;
            return "El área es: " + this.area;
        }
    }

    // Crear objeto de la clase AreaTriangulo
    const areaT = new AreaTriangulo();

    function calcularA(event: Event) {
        event.preventDefault();
        // Obtener valores de los inputs
        const baseInput = document.getElementById('txtBase') as HTMLInputElement;
        const alturaInput = document.getElementById('txtAltura') as HTMLInputElement;
        const resultadoElement = document.getElementById("resultado") as HTMLParagraphElement;

        if (baseInput && alturaInput && resultadoElement) {
            const baseValue = parseFloat(baseInput.value);
            const alturaValue = parseFloat(alturaInput.value);

            if (isNaN(baseValue) || isNaN(alturaValue) || baseValue <= 0 || alturaValue <= 0) {
                resultadoElement.textContent = "ünicamente se aceptan valores positivos mayores que 0";
                return;
            }

            areaT.obtenerBase(baseValue);
            areaT.obtenerAltura(alturaValue);
            resultadoElement.textContent = areaT.calcularArea();
        }
    }
    const btnCalcularArea = document.getElementById('btnCalcularArea') as HTMLButtonElement;
        btnCalcularArea.addEventListener('click', calcularA);
    
});
