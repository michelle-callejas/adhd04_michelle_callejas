# ADHD04
### INTECAP

- Fecha 03/06/2024
- Carrera: Desarrollador Fullstack
- Módulo 2 - Resultado de aprendizaje 1

|Carnet|Nombre|
|-----|-----|
|2024-005140|Michelle Callejas|

### _TypeScript_

- **1. ¿Qué es TypeScript?**
Lanzado en 2012 por Microsoft, TypeScript es un lenguaje de programación que fue creado a partir de JavaScript. Su fin es desarrollar aplicaciones a mayor escala, incluir todas las herramientas que JS no posee y trabajar de manera más estructurada. TypeScript es de código abierto y orientado a la programación de objetos. 


- **2.	¿Qué ventajas ofrece TypeScript frente a JavaScript puro?**
•	Su lenguaje es de tipo estático, por lo que detecta errores en tiempo de compilación y previene comportamientos inesperados.
•	Tiene una alta compatibilidad con otros frameworks y bibliotecas
•	Genera un código estándar, por lo que sus errores son menores
•	Tiene características de EcmaScript
•	Permite manejar grandes cantidades de código más fácil y rápido.
•	Sus herramientas de desarrollo son más avanzadas.


- **3.	¿Cómo se instala TypeScript en VSCode?**
Se realiza desde “Extensiones”, se busca TypeScript, y se realiza la instalación, y al finalizar la instalación, se reinicia el dispositivo. 


- **4.	¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?**
Puede ser a través de un archivo TypeScript y luego se ejecuta el comando “tsc main.ts”, el cual generará un archivo Javascript con todo el código.
O bien, se puede realizar por medio de un IDE, en donde la compilación se puede hacer de forma rápida y automatizada. 

- **5.	¿Qué extensión de archivo se utiliza para los archivos TypeScript?**
Se utiliza la extensión “.ts”


- **6.	¿Cómo se define un tipo de dato en TypeScript??**
Se declara de la siguiente manera: let variable: tipo de dato = "valor";

- **7.	¿Qué son los tipos de unión y cómo se declaran?**
Los tipos de unión, son la forma de combinar varios tipos de datos, de esta manera, una variable puede contener distintos tipos de datos con diferentes valores. Su declaración se trabaja con el operador pipe ( | ), por ejemplo: 
 type RegisteredUser = { username: string };
type Visitor = { visitDate: Date };
type User = RegisteredUser | Visitor; 

- **8.	¿Qué es un tipo literal en TypeScript y para qué se utiliza?**
Los literales se utilizan para definir los posibles valores que tomará una variable, al trabajar con literales, la seguridad y claridad del código mejora y tiene valores más precisos. Se declaran de la siguiente manera:
const variableName = value as Type;


- **9.	¿Qué son los tipos enumerados (Enums) y cómo se crean?**
Este tipo de datos, permite almacenar y definir un conjunto de valores dentro de un stack. Existen Enum numéricas, de cadenas, constantes, heterogéneas entre otras, un ejemplo es:
enum CarType {
	Honda,
	Toyota,
	Subaru,
	Hyundai
}

- **10.	¿Cómo se define un tipo alias y cuándo es útil?**
Es útil para definir un nuevo nombre para un tipo de dato, permitiendo que el código sea más fácil de entender y de manejar.  Para definirlo se utiliza la palabra “type”, ejemplo: 
type Nombre = string;
type Edad = number;
let nombre: Nombre = "Juan";
let edad: Edad = 30;



- **11.	¿Cómo se definen las funciones con tipos en TypeScript?**
Para las funciones en TypeScript, se utiliza la palabra clave “function”, seguido del nombre y del cuerpo de la función. Algunas funciones también se pueden combinar con la palabra “shout”. Las funciones en TS son muy similares a JS, también se puede trabajar con funciones asíncronas, de flecha, entre otras. 


- **12.	¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?**
Los parámetros opcionales, son los que no siempre son necesarios para que una función se pueda ejecutar, se definen con un signo de interrogación ?.
Mientras que los parámetros predeterminados, son necesarios para poder definir y ejecutar una función.
Además, los parámetros pueden ser combinados.



- **13.	¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?**
•	Definir correctamente la estructura de datos
•	Crear funciones claras y concisas
•	Identar el código
•	Hacer los comentarios que sean necesarios para que el código sea entendible
•	Evitar el uso del tipo “any” para evitar confusiones
•	Utilizar la convención de nombres

### _Problemas a resolver_
>#1. Calcular el promedio de tres números ingresados.

>#2. Calcular el área de un triángulo, el usuario debe ingresar el valor para la base y altura.

>#3. Determinar si un número es par o impar.

>#4. Encontrar el mayor y menor de tres números ingresados.

>#5. Elevar un número a una potencia, los valores deben ser ingresados por el usuario.

>#6. Mostrar de forma inversa un texto ingresado por el usuario

>#7. Calcular el factorial de un número ingresado.

>#8. Indicar si un valor ingresado es un número perfecto.

>#9. Verificar si un valor ingresado es un número primo

>#10. Contar las vocales existentes en un texto ingresado.






