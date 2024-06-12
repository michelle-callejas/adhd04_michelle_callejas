document.addEventListener('DOMContentLoaded', function () {
    var AreaTriangulo = /** @class */ (function () {
        function AreaTriangulo() {
            this.area = 0;
            this.base = 0;
            this.altura = 0;
        }
        AreaTriangulo.prototype.obtenerBase = function (base) {
            this.base = base;
        };
        AreaTriangulo.prototype.obtenerAltura = function (altura) {
            this.altura = altura;
        };
        AreaTriangulo.prototype.calcularArea = function () {
            this.area = (this.base * this.altura) / 2;
            return "El área es: " + this.area;
        };
        return AreaTriangulo;
    }());
    // Crear objeto de la clase AreaTriangulo
    var areaT = new AreaTriangulo();
    function calcularA(event) {
        event.preventDefault();
        // Obtener valores de los inputs
        var baseInput = document.getElementById('txtBase');
        var alturaInput = document.getElementById('txtAltura');
        var resultadoElement = document.getElementById("resultado");
        if (baseInput && alturaInput && resultadoElement) {
            var baseValue = parseFloat(baseInput.value);
            var alturaValue = parseFloat(alturaInput.value);
            if (isNaN(baseValue) || isNaN(alturaValue) || baseValue <= 0 || alturaValue <= 0) {
                resultadoElement.textContent = "ünicamente se aceptan valores positivos mayores que 0";
                return;
            }
            areaT.obtenerBase(baseValue);
            areaT.obtenerAltura(alturaValue);
            resultadoElement.textContent = areaT.calcularArea();
        }
    }
    var btnCalcularArea = document.getElementById('btnCalcularArea');
    btnCalcularArea.addEventListener('click', calcularA);
});
