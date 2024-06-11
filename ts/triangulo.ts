class AreaTriangulo{
    private area:number=0;
    private base: number=0;
    private altura:number=0;
    public obtenerBase(base:number){
        //thsi es para indicar con qué elemento se va a trabajar
        this.base=base;
    }
        public obtenerAltura(altura:number){
            this.altura=altura;
        }

    public calcularArea():string{
        this.area=(this.base*this.altura)/2;
        return "el area es: "+ this.area;
    }
    
}

//para crear objetos:
//otro archivo
const areaT=new AreaTriangulo();

function calcularA(){
    areaT.obtenerBase(parseFloat(document.getElementById('txtBase') as HTMLInputElement).value);
    areaT.obtenerAltura(parseFloat(document.getElementById('txtAltura') as HTMLInputElement).value);
    const resultado= document.getElementById("Resultado");
    resultado.textContent=areaT.calcularArea();
    }

