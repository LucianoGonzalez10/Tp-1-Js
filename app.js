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

// EJERCICIO 17
function filtrarPorLongitud(a, b){
    let nuevoArray = [];
    a.forEach(element => {
        if(typeof element === "string"){
            if(element.length >= b){
                nuevoArray.push(element);
            }
        }
    });
    return nuevoArray;
}
let arregloPalabras = ["Juan", "Longitud", "Palabra", "Mariano", "Auto", "casa", "Estupefaciente"];
console.log(filtrarPorLongitud(arregloPalabras, 7));

// EJERCICIO 18
function Estudiante(nombre, edad, promedio){
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
}

let est1 = new Estudiante("Juan", 15, 8, 8.2);
let est2 = new Estudiante("Mariano", 15, 9.3);
let est3 = new Estudiante("Messi", 15, 7.6);
let est4 = new Estudiante("Lupo", 15, 6.8);

// EJERCICIO 19
let arregloEstudiantes = [est1, est2, est3, est4];

function buscarEstudiante(a, b){
    let estudiante = "No encontrado";
    a.forEach(element => {
        if(element instanceof Estudiante){
            if(typeof element.nombre === "string"){
                if(element.nombre == b){
                    estudiante = element;
                }
            }
        }
    });
    return estudiante;
}

console.log(buscarEstudiante(arregloEstudiantes, "Juan"));

// EJERCICIO 20
function promedioClase(a){
    let suma = 0;
    let alumnos = 0;
    a.forEach(element => {
        if(element instanceof Estudiante){
            if(typeof element.promedio === "number"){
                suma += element.promedio;
                alumnos++;
            }
        }
    });
    return (suma / alumnos);
}

console.log(promedioClase(arregloEstudiantes));

// EJERCICIO 21
function coche(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;

    this.arrancar = function(){
        console.log("Arrancando...");
    }
    this.detener = function(){
        console.log(`Deteniendo...${this.modelo}`);
    }
}

let auto1 = new coche("Renault", "Kangoo", 2010);
auto1.arrancar();

// EJERCICIO 22
const Personitax = {
    nombrex : "Thiago",
    edadx : 20,
    saludarx(){
        console.log(`Hola, soy ${this.nombrex}`)
    }
};

// EJERCICIO 23
function carrito(nombre){
    this.nombre = nombre;

    this.agregar = function(){
        console.log(`${this.nombre} fue agregado.`);
    }
}
let carro = new carrito("Mario");
carro.agregar();

// EJERCICIO 24
function ordenarNumeros(a = []){
    return a.sort((num1, num2) => num1 - num2);
}

let numerosArr = [1,6,2,8,9,3,4,0,1,2,7,80,20,54,21];
console.log(ordenarNumeros(numerosArr));

function eliminarEstudiante(a = [], b){
    return a.filter(Estudiante => Estudiante.nombre != b);
}

console.log(arregloEstudiantes); // ANTES DE ELIMINAR
console.log(eliminarEstudiante(arregloEstudiantes, "Mariano")); // DESPUES DE ELIMINAR