// Tipado Dinámico
let foo = "Hola mundo";
foo = false;
foo = 123;

// Tipos de datos
let numero = 123;
console.log("🚀 ~ file: TiposDatos.js:8 ~ numero:", typeof(numero));

let condicional = true;
console.log("🚀 ~ file: TiposDatos.js:11 ~ condicional:", typeof(condicional));

let texto = "Hola mundo";
console.log("🚀 ~ file: TiposDatos.js:14 ~ texto:", typeof(texto));

let granNumero = 2n**53n;
console.log("🚀 ~ file: TiposDatos.js:17 ~ granNumero:", typeof(granNumero));

let objeto = null;
console.log("🚀 ~ file: TiposDatos.js:20 ~ objeto:", typeof(objeto));

let funcion = function () {
    return;
}
console.log("🚀 ~ file: TiposDatos.js:23 ~  funcion:", typeof(funcion));

let indefinido = undefined;
console.log("🚀 ~ file: TiposDatos.js:28 ~ indefinido:", typeof(indefinido))

/*--------------------- Tipo Number -------------------------*/ 

let a = 123;
let b = 145;
let c = a;


let new_a = new Number(145);
console.log("🚀 ~ file: TiposDatos.js:38 ~ new_a:", new_a)
let new_b = new Number("145");
console.log("🚀 ~ file: TiposDatos.js:40 ~ new_b:", new_b)
let new_c = new Number("A");
console.log("🚀 ~ file: TiposDatos.js:42 ~ new_c:", new_c)

