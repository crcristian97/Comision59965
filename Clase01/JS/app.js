// 2 formas de comentar 

//1 forma es con "//" que te comenta la linea sola
//2 forma de comentar es iniciamos con "/* y terminamos con */"
/* 

*/
// const iva = 0.1 // Esto es el iva del producto
// const Iva = 0.1 // Esto es el iva del producto
//TODO: Refactorizar este codigo porque se usa en las notas y en el header 


//Que es una variable?
//Es un espacio reservado en la memoria de la PC
//Que pasa si nosotros creamos variables y no la usamos?
//1-Ocupamos memoria
//Hay que eliminar todas las variables,funciones,metodos,que no usamos
//Si la comentas a la variable , no te ocupa memoria, pero si recurso del servidor
//Que es recurso del servidor? Podes tardar segundas cuando se renderiza el DOM
//Como la creamos? 2 formas

// let nombreUsuario = "Cristian"; //string
// let apellidoUsuario = "Cabrera"; //string
// const emailUsuario = "crcrc@gmail.com";
// const montoPrestamo = 90000; //number
// const porcentajePrestamo = 4; //number
// const aniosPagar = 4; //number
//Creo una variable (mala practica)
// let telefono; 

//Creando y Asignando una variable (buena practica)
// let telefono2 = "samsungs300";

//Diferencai entre let y const?
//con let vos podes declarar y asignar. PJ:
let edad;
//Pasan 20 lineas de codigo
edad = 18;

//con const SI O SI tenes que declarar y asignar al mismo tiempo. PJ:
//const nombre;
//Pasan 20 lineas de codigo 
// nombre = cristian.
// NO SE PUEDE HACER
const nombre = "cristian";


//Operaciones basica
//con numeros
//Esto esta mockeado es decir YO declaro su valor
let camisaProduct = 50000;
let iva = 0.21; 

let resultadoProductoIVA = camisaProduct * iva;
let precioFinalProducto = camisaProduct + resultadoProductoIVA;
console.log("Resultado del IVA", resultadoProductoIVA);
console.log("Resultado del producto FINAL con IVA", precioFinalProducto);

//STRING
//Esto esta mockeado es decir YO declaro su valor
// let nameUser = "Cristian";
// let lastNameUser = "Cabrera";

// let completeUser = nameUser + " " + lastNameUser;
// console.log(completeUser)

// let nameUser = prompt("Me decis tu nombre"); //string
// let lastNameUser = prompt("Me decis tu apellido"); //string
// let edadUser = prompt("Decime tu edad"); //string

// console.log("Este es el nombre ", nameUser);
// console.log("Este es el apellido ",lastNameUser);

//Cual es el metodo para convertir number a string? (parse)
let prestamoUsuario = parseInt(prompt("Cuanto queres para el prestamo?"));
let intereses = 4
let pagarDeuda = prompt("A cuantos anios");
let interesesAPagar = prestamoUsuario * intereses;
console.log("Los intereses son", interesesAPagar);

//Que es el debugger?
//Buenas practicas
//Nombre acorde a nuestro proyecto, o a su finalidad
//camelCase o snake_case
let es_mayor = "si"; //snakeCase
let esMayor = "si"; //camelCase
//Cual esta bien?
//La que use su proyecto
let menor = "si";
let esMenor = "si";

//Se puede, no es buena practica declarar variables ocn la primera mayuscula
let AvionesProductos = "Hercules";

let tasaInteres = 30;
let tasaInteresBBVA = 33;

let ivaInsumosInformativos = 10.5;



