//CICLO FOR
//-Palabra reservada FOR, luego ()

//ESTRUCTURA INCIAL
//  for(){

//  }

//-3 condiciones dentro del () --> SI O SI
//1- "Desde" es la zona donde inicia la variable / ciclo 
//2- "Hasta" El ciclo corre hasta que se cumpla la condicion puesta
//3- "Actualizacion" Actualiza la variable de inicializacion ("DESDE")

// Ejemplo 1 : BASICO para entender la estructura
//La variable index en el inicio es "0";

// for(let index = 0; index < 10; index++){
//   const IVA = 0.21
//   //console.log(index); // ---> 0 --> que hace el index ++? le suma 1 al 0 entonces = 1
//    // ---> 1 --> que hace el index ++? le suma 1 al 1 entonces = 2
//    // ---> 2 --> que hace el index ++? le suma 1 al 2 entonces = 3
//    // ...
//    //Cuando index es 10 ---> se corta el ciclo
   
//    //simular la explicacion del ciclo con un if
// }

//2ejemplo: mejor interpretacion
//let ingresarNumero = parseInt(prompt("Ingrese un numero"));



// console.time();
// for(let index = 1; index <= 10; index++){
//   let resultado = ingresarNumero * index;
//   console.log(ingresarNumero + " X " + index + " = " + resultado);
// }


// for (let i = 1; i <= 20; i++) {
//   // En cada repetición solicitamos un nombre.
//   //varible scope local = ingresarNombre
//   let ingresarNombre = prompt("Ingresar nombre");
//   // Informamos el turno asignado usando el número de repetición (i).
//   alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
// }

//PALABRA RESERVADA BREAK
//Te interrumpe tu codigo cuando JS llega a esa linea
// for (let i = 1; i <= 7; i++) {
//   debugger
//   if( i === "ultimo registro"){
//     //aca te registro al ultimo
//   }
// }
// console.log("Esto es despues del ciclo")


//PALABRA RESERVADA CONTINUE
// permite saltar la ejecución del código

//CICLO WHILE
// permite que se ejecuten 0, 1 o mas veces dependiendo de la condicion indicada
// mientras se cumpla la condicion indicada 
// entrada != "ESC" ---> Condicion indicada 
// el bucle va a seguir funcionando
// let entrada = prompt("Ingrese un dato");
// debugger

// while(entrada != "ESC"){
//   //scope local 
//   // scope local : es el alcance que tiene las variables
//   // yo puedo usar variables que estan en el mismo scope
// alert("El usuario ingreso "+ entrada);
//   if(entrada === "lapiz"){
//   }
//   entrada = prompt("Ingresa otro dato");
// }

//DO - WHILE
//BUCLE: que se ejecuta SI O SI una vez 

// let entrada2 = prompt("Ingrese un dato");

// do {
//   console.log("ESTO SE EJECUTA SI O SI");
//   //queres sumar los puntos de la comision
//   //queres sabe cuantos alumnos son de esta comision --- SI O SI 
// }while(entrada2)

// let numero = 0;

// do{
//   //ESTO SE VA HACER SI O SI
//   numero = prompt("Ingresa un numero");
//   console.log(numero);
//   debugger
//   //si el parseo no es un numero se interrumple
// }while(parseInt(numero));
// console.log("Salida del ciclo");

//SWITCH
// Reemplazo al if else if... eterno
// Cuando --> si tenemos 4 else if
// Palabras reservadas para la estructura (SI O SI)
// 1 - swicth
// 2- case
// 3- break
// 4- default

const diaNumero = prompt("Decime que dia estas");
let diaNombre;

switch (diaNumero) {
 case 1:
  diaNombre = "Lunes";
  break;
 case 2:
  diaNombre = "Martes";
  break;
 case 3:
  diaNombre = "Miercoles";
  break;
 case 4:
  diaNombre = "Jueves";
  console.log("GENIAL YA CASI TERMINAS LA SEMANA");
  break;
 case 5:
  diaNombre = "Viernes";
  break;
 case 6:
  diaNombre = "Sabado";
  break;
 case 7:
  diaNombre = "Domingo";
  break;
 default:
  diaNombre = "El numero ingresado no existe";
  break;
}

const diaNombreFecha = "Lunes";
let diaFechaNumero;
debugger
switch (diaNombreFecha) {
  case "Lunes":
   diaFechaNumero = 1;
   break;
  case "Martes":
   diaFechaNumero = 2;
   break;
  case "Miercoles":
   diaFechaNumero = 3;
   break;
  case "Jueves":
   diaFechaNumero = 4;
   break;
  case "Viernes":
   diaFechaNumero = 5;
   break;
  case "Sabado":
   diaFechaNumero = 6;
   break;
  case "Domingo":
   diaFechaNumero = 7;
   break;
  default:
   diaFechaNumero = "El numero ingresado no existe";
   break;
 }

console.log("El dia es " + diaFechaNumero);


if (diaNumero === 1) {
  diaNombre = "Lunes";
} else if (diaNumero === 2) {
  diaNombre = "Martes";
} else if (diaNumero === 3) {
  diaNombre = "Miércoles";
} else if (diaNumero === 4) {
  diaNombre = "Jueves";
} else if (diaNumero === 5) {
  diaNombre = "Viernes";
} else if (diaNumero === 6) {
  diaNombre = "Sábado";
} else if (diaNumero === 7) {
  diaNombre = "Domingo";
} else {
  diaNombre = "Número de día inválido";
}

console.log(`El día seleccionado es: ${diaNombre}`);
