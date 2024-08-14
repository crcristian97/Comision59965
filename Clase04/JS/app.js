//PRINCICIO DRY
// Cuando creamos la funcion tiene que tener una unica funcionalidad y se puede utilizar en cualquier parte del codigo

//Entonces PRINCIPIO KISS
// Keep It Simple, Stupid
// Cuando creamos una funcion , hay que hacerla sencilla (bien el nombre de las variables, entendible, identable)

//Entonces PRINCIPIO YAGNI
//No crear codigo a futuro
//Yo voy a crearlo pero lo voy a comentar (si es tu propio proyecto ok, sino se elimina)
//Crear codigo a futuro 
// TO DO: hacer test del boton Comprar
// TO DO: cambiar el color cuando llegue el techlider

//Para declarar
// Palabra reservada function
// Seguido del nombre en MINUSCULA
// SI O SI PARENTESIS ()
// Por ultimo llaves
// alert("Bienvenido, entra a mi hogar");

// function saludar(){
//   alert("Bienvenido, entra a mi hogar");
// }
// //PARA EJECUTAR LA FUNCION SI O SI HAY QUE LLAMARLA
// saludar(); // Asi se llama
// /////////////

// //Ejemplo avanzado
// function agregarAlCarrito(){
//   //LOGICA PARA AGREGAR EL PRODUCTO AL CARRITO
// }

// function comprarAhora(){
//   //hace la logica para comprar
// }

// function validarFomulario(){
//   //aca hacen la logica del if lse
//   //logica del swich
//   // enviar estilos desde js al html para que lo vea el usuario
// }
// //agregarAlCarrito ---> Se llama cuando el usuario aprete click en el boton agregar al carrito



// let nombreIngresado = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);

// //Ahora si yo quiero repetirlo 2 veces mas 
// nombreIngresado = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);
// nombreIngresado = prompt("Ingresar nombre");
// alert("El nombre ingresado es " + nombreIngresado);


// //CON FUNCIONES//

// function solicitarNombre(){
//   let nombreIngresado   = prompt("Ingresar nombre");
//   alert("El nombre ingresado es " + nombreIngresado);
// } 

// solicitarNombre() // -->1 
// solicitarNombre() // -->2 
// solicitarNombre() // -->3

// //QUE SON LOS PARAMETROS
// //Los parametros son informacion que le enviamos a la funcion para que pueda tener mas logica

// let nombreUsuario = 'Cristian';
// let nombreAlumno = 'Facundo';
// function saludarUsuario(nombrePersona){
//   console.log('Hola ' + nombrePersona);
// }
// saludarUsuario(nombreUsuario);
// saludarUsuario('Vanina');
// saludarUsuario('Guillermo');
// saludarUsuario(nombreAlumno);

// //Cuantos parametros puede haber? N10
// //Cuantos parametros debe haber? entre 1 y 5
// //El parametro puede ser cualquier valor --> string, number, funcion, array , objecto
// //HAY QUE RESPETAR EL ORDEN DE LOS PARAMETROS

// let usuarioArma = prompt('Piedra Papel o tijera');
// let usuarioComputador = 'papel';

// function ganador(armaUser){
//   if (armaUser === 'Piedra') {
//     console.log('Perdiste, la maquina gano con el papel');
//     //mostrar el resultado en la pantalla ----> clase 09
//     //innerhtml,appendCHILD
//   }else if( armaUser === 'Papel'){
//     console.log('Empataron, la maquina gano con el papel');
//   }else{
//     console.log('ganaste')
//   }
// }
// ganador(usuarioArma)


// function mostrarMensaje(mensaje = ''){
//   console.log(mensaje) // undefined
// }
// mostrarMensaje();

// function mostrar(){
//   console.log(mensaje) // Esto me dice mensaje is not defined
// }

// mostrar('Holaaaa')

// //1 forma funcion comun

// function sumar( a, b){

// }

// let resultado = sumar( a, b) //--> 15

// // 2 funciones nuevas (el cerebro aca me explota)

// //Funcion anonima
// //No se le declara el nombre despues de la palabra funcion
// //SI O SI declaramos una variable y se la asignamos
// const suma1  = function (a, b) { 
//   return a + b 
// } // ---> 35
// const resta2 = function (a, b) { 
//   return a - b 
// } // ---> 5
// suma(15,20);
// resta(15,20)

// //SI SI , SE TIENE QUE LLAMAR IGUAL QUE LA PRIMERA FUNCION

// //Funcion

// const sumaFlecha = (a, b) => { 
//   return a + b 
// }
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const restaFlecha = (a, b) =>  a - b ;
// console.log( sumaFlecha(15,20) )
// console.log( restaFlecha(20,5) )

///////////////////EJEMPLO APLICADO///////////////

const suma  = (a,b) => {  a + b }
const resta = (a,b) => {  a - b }

//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()

const iva = x => { x * 0.21}
let precioProducto = 500; // ---> tiene que venir desde un input
let descuento = 50; 
//Calculo el precioProducto + IVA - descuento
                                          //valor del resultado105
                          //el resultado de suma 605 - 50
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); 
//nuevoprecio = 555;
console.log(nuevoPrecio)


