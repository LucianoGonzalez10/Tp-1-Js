// EJERCICIO 1
let nombre = "Luciano";
console.log(nombre);

// EJERCICIO 2
let num1 = 20;
let num2 = 10;
console.log(num1 + num2);

// EJERCICIO 3
const PI = 3.14159;
console.log(PI);

// EJERCICIO 4
function saludar(){
    console.log("Hola " + nombre);
}

saludar();

// EJERCICIO 5
function esPar(a){
    let resultado = a % 2;
    let esPar = false;
    if(resultado == 0){
        esPar = true;
    }
    return esPar;
}

console.log(esPar(2));

// EJERCICIO 6
function sumarArray(a){
    let resultado = 0;
    a.forEach(element => {
        resultado += element;
    });
    return resultado;
}
let ar = [1,5,6,8];
console.log(sumarArray(ar));

// EJERCICIO 7
const Persona = {
    nombre : "Luciano",
    edad : 20,
    profesion: "Estudiante",
}
console.log(Persona);

// EJERCICIO 8
function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const producto1 = new Producto("Caramelo", 200, 10);
console.log(producto1);

// EJERCICIO 9
function Pelicula(titulo, director, anio){
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}

const peli1 = new Producto("Creed 1", "Juan", 2024);
console.log(peli1);

// EJERCICIO 10
let fruteria = ["Pera", "Manzana", "Sandia", "Mango", "Naranja"];
console.log(fruteria[2]);

// EJERCICIO 11
fruteria.push("Mandarina");
console.log(fruteria[5]);

// EJERCICIO 12
function filtrarPares(a){
    let arregloPares = [];
    a.forEach(element => {
        if(element % 2 == 0){
            arregloPares.push(element);
        }
    });
    return arregloPares;
}

let a = [1,2,3,4,5,6,7,10,12,13,16];
console.log(filtrarPares(a));

// EJERCICIO 13
function Personita(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

const persona1 = new Personita("Lucho", 20);
const persona2 = new Personita("Abru", 20);

// EJERCICIO 14
function mostrarInfo(p){
    if(p instanceof Personita){
        console.log("Nombre: " + p.nombre + " Edad: " + p.edad);
    }
}

mostrarInfo(persona1);

// EJERCICIO 15
function duplicarArray(a){
    let arregloDuplicado = [];
    a.forEach(element => {
        arregloDuplicado.push(element);
        arregloDuplicado.push(element);
    });
    return arregloDuplicado
}

// EJERCICIO 16
function invertirCadena(cadena){
    let separar = cadena.split("");
    separar = separar.reverse();
    return separar.join("");
}

console.log(invertirCadena("Hola"));