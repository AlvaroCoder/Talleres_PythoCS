// Comentarios
/*
Comentarios de varias
líneas
*/

//Datos primitivos
//Booleans
true
false

//Numbers
123
-145

//Strings o cadenas de texto (JS no tiene tipos de caracteres)
'abc'
"abc"

//Imprimir un valor standard
console.log('Hello World!');

//Imprimir un error
console.error("Algo salió mal :(");

//Declarar variables
let x; // declarar x (mutable)
x=3*5; // asignar valores a z

let y = 3*5; // declarar y asignar valores

const z = 8; // declarar z (inmutable)

var w;
w = 8*9;

console.log(x,y,z,w);


// Estructuras de control
if (x<0) {
    x = -x;
}else{
    x=x**2;
}

// Estructura de control de una línea
const edad = 19;
const message = edad>=18 ? "Eres mayor de edad":"Eres menor de edad";
console.log("🚀 ~ file: Clase001_Sintaxis.js:52 ~ message:", message)
// Funciones
// Declarar funciones de manera normal
function suma1(a,b) {
    return a+b
}
// Declarar funciones en forma de flecha
const suma2 = (a,b)=>{return a+b}

const v = suma1(10,12) == suma2(10,12);
console.log("🚀 ~ file: Clase001_Sintaxis.js:66 ~ v:", v)

/*
    TODO: Diferencia en "let" y "var", radica en su alcancé de variable
*/

function rangoVar() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
// rangoVar();
function rangoLet() {
    let y = 1;
    if (true) {
        let y = 2;
        console.log(y);
    }
    console.log(y);
}
// rangoLet();


// Objetos
// Crear objetos de manera plana con un objeto literal
const persona = {
    name : 'Benito Antonio',
    last : 'Martínez',
    nickname : 'Bad Bunny',
    getFullName() { // Método
        return this.name + ' ' + this.last
    },
    edad : ()=>{ // Propiedad
        return 23
    },
    printData(){
        return "\n"+"nombre->"+this.getFullName()+"\n"+"edad->"+this.edad()
    }
}
var nombre = persona.getFullName();
console.log("🚀 ~ file: Clase001_Sintaxis.js:77 ~ nombre:", nombre)
var e = persona.edad();
console.log("🚀 ~ file: Clase001_Sintaxis.js:105 ~ e:", e)
var p = persona['printData']()
console.log("🚀 ~ file: Clase001_Sintaxis.js:109 ~ p:", p)

//Arrays o Listas
const arr = ['a','b',12]
console.log("🚀 ~ file: Clase001_Sintaxis.js:113 ~ arr:", arr)

// Traer valores de listas
var a = arr[0];
console.log("🚀 ~ file: Clase001_Sintaxis.js:117 ~ a:", a)

// Colocar valores en una lista de elementos
arr[1]='c'
arr[3]=16
console.log("🚀 ~ file: Clase001_Sintaxis.js:113 ~ arr:", arr)

console.log();
/*
    Recorrer una lista
    Que devuelva una lista con los cuadrados
*/
const arr_nums = [4,5,6,8,7,9,10,12]

// Forma tradicional
const cuad_nums1 = []
for (let index = 0; index < arr_nums.length; index++) {
    const element = arr_nums[index]**2;
    cuad_nums1.push(element)
}
console.log("🚀 ~ file: Clase001_Sintaxis.js:133 ~ cuad_nums1:", cuad_nums1)

const cuad_nums2 = arr_nums.map((numero)=>{
    return numero**2
});
console.log("🚀 ~ file: Clase001_Sintaxis.js:142 ~ cuad_nums2:", cuad_nums2)

/*
    Recorrer una lista que valide si son pares
*/
const par_num = arr_nums.filter((numero)=>{
    return  numero % 2 == 0 
})
console.log("🚀 ~ file: Clase001_Sintaxis.js:148 ~ par_num:", par_num)

// Buscar nombres similares a una cadena de texto ingresada
const arr_nombres = ["Alvaro","Arturo","María","Mercedes","Alberto","Inés","Ingrid","Luis"]
const query = "a"

function similar(nombre = '') {
    return nombre.toLowerCase().includes(query)
}

const similar_nombres = arr_nombres.filter(similar)
console.log("🚀 ~ file: Clase001_Sintaxis.js:161 ~ similar_nombres:", similar_nombres)

// Calcular la suma de cuadrados de la lista de numeros
const suma_cuadrados = arr_nums.reduce((total, num)=>{
    return total+(num**2)
})
console.log("🚀 ~ file: Clase001_Sintaxis.js:167 ~ constsuma_cuadrados=arr_nums.reduce ~ suma_cuadrados:", suma_cuadrados)

const total = arr_nums.map((_x,i)=>i)
console.log(total);

/**
    Palabras reservadas:
    await break case catch class const continue debugger default delete
    do else export extends finally for function if import in instanceof
    let new return static super switch this throw try typeof var void while
    with yield
 */
