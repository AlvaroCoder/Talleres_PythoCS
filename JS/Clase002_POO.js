'use strict';
// Los arreglos son objetos
// Tanto arreglos como objetos se pueden albergar mutuamente
var point = [
    {x : 0, y : 1},     //Una lista con dos elementos
    {x : 1, y : 2}      //Cada elemento es un objeto
]
console.log("🤖 ~ file: Clase002_POO.js:6 ~ point:", point)
var longi = point.length
console.log("🤖 ~ file: Clase002_POO.js:8 ~ longi:", longi)

point[6] = {x : 5, y : 2}
longi = point.length
console.log("🤖 ~ file: Clase002_POO.js:9 ~ point:", point)
console.log("🤖 ~ file: Clase002_POO.js:10 ~ longi:", longi)

var data = {
    a1 : [[1,2],[3,4]],     // El valor de cada llave es un arreglo
    a2 : [[2,3],[4,5]]      // Los elementos de la lista son listas
}

// Ways looping an array
let numbers = [1,2,3,5,8]
for(const num of numbers){
    console.log(num);
}

// A function is always executed when entering its scope,
// regardless of where it is located within that scopes
console.log(foo());
function foo() {
    return 123
}

/*
    If you declared a function with const or let, then it is not
    activate early

    Even if a function g() is not activated early, it can be called
    by a preceding function f(). F must be invoked after the 
    declaration of g()
    */

const f = ()=> g();
const g = ()=> 123;
console.log("🤖 ~ file: Clase002_POO.js:41 ~ f:", f())

// Clases are not activated early
class MiPrimeraClase{

}
/*
    What is a closure
    A closure is a function plus a connection to the variables that
    exist at its "brth place"
*/

function funFactory(value) {
    return ()=>{
        return value
    }
}
const fun = funFactory('abc')
console.log("🤖 ~ file: Clase002_POO.js:64 ~ fun:", fun())

// Ejemplo de incrementor
function createInc(startValue) {
    return (step)=>{
        startValue+=step; // Almacena el valor de manera local
        return startValue;
    }
}
const inc = createInc(5)
console.log("🤖 ~ file: Clase002_POO.js:73 ~ inc:", inc(2))

function createInc2(startValue) {
    let index = -1;
    return (step)=>{
        startValue += step;
        index ++;
        return [index, startValue]
    }
}
// El valor de index persiste a través de los llamados de las funciones
const inc2 = createInc2(5)
console.log("🤖 ~ file: Clase002_POO.js:86 ~ inc2:", inc2(10));
console.log("🤖 ~ file: Clase002_POO.js:86 ~ inc2:", inc2(7));

// Los objetos pueden ser usados como valores
const a = {}
const b = a;

// Si cambiamos un valor de a, eso también afectará a b
a.foo = 'bar';
// Tanto a como b están apuntando al mismo objeto
console.log(b);

// Operadores 
let seven = '7' * 3
console.log(seven);

let li = [1,4,5]
let li2 = [4,5,6]
console.log(li+li2);

// Diferencia entre == y ===
