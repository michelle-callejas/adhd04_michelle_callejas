class OperacionesPoo{
    //atributos(caracteristicas=variables)

    //métodos (funciones)

    private numero1: number=0;
    private numero2: number=0;
    private resultados: number=0;
//this permite utilizar métodos o elementos privados, de la misma clase
//método que permite asignar valor al atributo
    public asignarNumero1(valor: number){
        this.numero1=valor;
    }

    public asignarNumero2(valor: number){
        this.numero2=valor;
    }

    public sumar():string{
        this.resultados=this.numero1+ this.numero2;
        return "La suma es: "+ this.resultados;
    }

    public restar():string{
        this.resultados=this.numero1-this.numero2;
        return "La resta es: "+this.resultados;
    }

}

//finaliza clase, un archivo por clase
//crear objetos, de preferencia en otro archivo. 

