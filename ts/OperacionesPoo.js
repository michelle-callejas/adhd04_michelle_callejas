var OperacionesPoo = /** @class */ (function () {
    function OperacionesPoo() {
        //atributos(caracteristicas=variables)
        //métodos (funciones)
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultados = 0;
    }
    //this permite utilizar métodos o elementos privados, de la misma clase
    //método que permite asignar valor al atributo
    OperacionesPoo.prototype.asignarNumero1 = function (valor) {
        this.numero1 = valor;
    };
    OperacionesPoo.prototype.asignarNumero2 = function (valor) {
        this.numero2 = valor;
    };
    OperacionesPoo.prototype.sumar = function () {
        this.resultados = this.numero1 + this.numero2;
        return "La suma es: " + this.resultados;
    };
    OperacionesPoo.prototype.restar = function () {
        this.resultados = this.numero1 - this.numero2;
        return "La resta es: " + this.resultados;
    };
    return OperacionesPoo;
}());
//finaliza clase, un archivo por clase
//crear objetos, de preferencia en otro archivo. 
//instanciar= crear un objeto
//clases con mayúscula
var operacionesPoo = new OperacionesPoo();
function realizarSuma() {
    operacionesPoo.asignarNumero1(10);
    operacionesPoo.asignarNumero2(20);
    console.log(operacionesPoo.sumar());
    console.log(operacionesPoo.restar());
}
