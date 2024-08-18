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

// EJERCICIO 25
function eliminarEstudiante(a = [], b){
    return a.filter(Estudiante => Estudiante.nombre != b);
}

console.log(arregloEstudiantes); // ANTES DE ELIMINAR
console.log(eliminarEstudiante(arregloEstudiantes, "Mariano")); // DESPUES DE ELIMINAR

// EJERCICIO 26
function totalCarrito(a = []){
    let total = 0;
    a.forEach(element => {
        if(element instanceof Producto){
            total += element.precio;
        }
    });
    return total;
}

let prod1 = new Producto("Manzana", 200, 15);
let prod2 = new Producto("Naranja", 400, 25);
let prod3 = new Producto("Pera", 30, 5);
let prod4 = new Producto("Uva", 20, 60);
let prod5 = new Producto("Sandia", 100, 21);

let carritox = [prod1, prod2, prod3, prod4, prod5];
console.log(totalCarrito(carritox));

// EJERCICIO 27
function crearCalculadora(a,b){
    const calculadora = {
        num1 : a,
        num2 : b,
        sumar(){
            return a + b;
        },

        restar(){
            return a - b;
        },

        multiplicar(){
            return a * b;
        },
        dividir(){
            return a / b;
        }
    }
    return calculadora;
}

let calculadora = crearCalculadora(2, 5);
console.log(calculadora.sumar());

// EJERCICIO 28
function crearBancaria(nombre, total){
    const bancaria = {
        nombre : nombre,
        total : total,

        depositar(a){
            total += a;
        },

        retirar(a){
            total -= a
        },

        saldo(){
            return total;
        }
    }
    return bancaria;
}

let cuentaBancaria = crearBancaria("Luciano", 20);
cuentaBancaria.depositar(200);
cuentaBancaria.retirar(50);
console.log(cuentaBancaria.saldo());

// EJERCICIO 29
function Libro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;

    this.detalles = function(){
        console.log(`Titulo: ${titulo}, Autor: ${autor}, Paginas ${paginas}`);
    }
}

let libro1 = new Libro("Harry Potter", "Deique Robuin", 200);
libro1.detalles();

// EJERCICIO 30
function Tarea(nombre, fecha){
    this.nombre = nombre;
    this.fecha = fecha;
    this.completada = false;
    this.pendiente = true;

    this.detalles = function(){
        console.log(`Nombre: ${this.nombre} Fecha: ${this.fecha} Completada: ${this.completada} Pendiente: ${this.pendiente}`);
    }

    this.completar = function(){
        this.completada = true;
        this.pendiente = false;
    }
    this.marcarPendiente = function(){
        this.pendiente = true;
        this.completada = false;
    }
}

function gestionTareas(){
    this.tareas = [];

    this.agregar = function (a){
        this.tareas.push(a);
    }

    this.eliminar = function (eliminar){
        this.tareas = this.tareas.filter(b => b.nombre != eliminar);
    }

    this.mostrarTareas = function (){
        this.tareas.forEach(element => {
            if(element instanceof Tarea){
                element.detalles();
            }
        });
    }
}

let tarea1 = new Tarea("Ordenar", "17/08");
let tarea2 = new Tarea("Limpiar", "21/09");
let tarea3 = new Tarea("Masajear", "15/08");
let tarea4 = new Tarea("Barrer", "7/08");

let gestor = new gestionTareas();
gestor.agregar(tarea1);
gestor.agregar(tarea2);
gestor.agregar(tarea3);
gestor.agregar(tarea4);

gestor.mostrarTareas();
gestor.eliminar("Limpiar");
tarea1.completar();
tarea1.marcarPendiente();
console.log("ASSSHEEEE");
gestor.mostrarTareas();

