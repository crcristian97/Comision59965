let dolarOficialCompra = 914.50; //camelcase
let dolarCriptoVenta = 1352.65;//camelcase
let dolarTarjeta = 1527.20; //camelcase

//Tema nuevo: Condicional = IF 
//Condicional nos ayuda a programar nuestra logica
//Es un bloque de instruccion hecho en JS para que el sistema
//actue de una forma u otra
//Que necesitamos?
//1-palabra reservado (IF) 
//2-La variable
//3-La condicion para la variable
//4-el bloque de codigo a ejecutar

//Nuevo tipo de valor = boolean (true || false)

////////Estructura modelo///////////////
if(true){
  console.log("Este mensaje se ve");
}
////////////////////////////////////////

//Ejemplo:
let alumnoMateriaComunicacion = 5;
//Para que entre al mensaje la condicion tiene que ser true
if(alumnoMateriaComunicacion == 5){
  console.log("Aprobado");
}

// 2do Ejemplo : carnet conducir
let carnetConducionCristian = true
if(carnetConducionCristian){
  console.log("Tenes carnet");
}

// 3 ejemplo: validacion de usuario
const usuarioName = "";
//usuarioName =  "";
//ususarioName = "Leonardo"
if(usuarioName == ""){
  console.log("Erro, debe escribir un nombre");
}

//Que diferencia hay entre = y == y ===
//El primer "=" ASIGNA
//El segundo "==" compara valor
//El tercero "===" compara valor y tipo de dato

//Que es valor?
// Es el nombre de usuarioName, o es el tipo de dolar de dolarTarjeta

//Que es el tipo de dato?
//El tipo de dato es number, string, boolean, array, object,etc etc

//SIEMPRE SIEMPRE SIEMPRE USAMOS EL TRIPLE ===
let notaPrimerParcial = prompt("Que te sacaste en el primer parcial?");
let notasegundoParcial = prompt("Que te sacaste en el segundo parcial?");

//Aca comparamos el valor del dato
if(notaPrimerParcial == 5){
  console.log("Aprobaste el primer parcial");
}else {
  console.log("Desaprobaste");
}


//Aca compramos el tipo de dato y el valor.
//Tenemos en cuenta que prompt siempre nos da string
if(notasegundoParcial === 5){
  console.log("Aprobaste el segundo parcial");
}

//Como averiguo el tipo de dato? Usamos typeof y la variable
typeof notasegundoParcial;


//Cuando hay mas de una condicion
//if elseif...
const apellidoUsuario = "";

if(apellidoUsuario === ""){
  console.log("Erro, debe escribir un nombre");
}else if(apellidoUsuario === null){
  console.log("Erro, debe escribir un nombre");
}else if(apellidoUsuario === undefined){
  console.log("Erro, debe escribir un nombre");
}

if(apellidoUsuario === "" || apellidoUsuario === undefined || apellidoUsuario === null){
  console.log("Erro, debe escribir un nombre");
}

if(!apellidoUsuario){
  console.log("Erro, debe escribir un nombre");
}

switch(apellidoUsuario){
  case (apellidoUsuario === undefined):
    console.log("Erro, debe escribir un nombre");
    break;
   case (apellidoUsuario === null):
    console.log("Erro, debe escribir un nombre");
    break;
   case (apellidoUsuario === ""):
    console.log("Erro, debe escribir un nombre");
    break;
    default:
      //LOGICA PARA QUE INGRESE TRANQUILAMENTE
    break;
}

const height = "172";
if(height === 172){
  console.log("Entras en la categoria de nadadaores");
  //queres hacer la logica para calcular el IMC
}


////OPERADORES LOGICOS
// mayor
// mayor o igual
// menor
// menor o igual
// igual 
// distinto
// y 
// o
// not

//NO SIEMPRE SE VAN A USAR TODOS
//NO SIEMPRE COMBINAN TODOS
// CUANDO USO UNO O CUANDO EL OTRO?
// DEPENDE DE LA LOGICA DEL PROGRAMADOR


//Operador logico &&

let nombreIngresado = prompt("Ingresa nombre");
let apellidoIngresado = prompt("Ingresa apellido");

if((nombreIngresado != "") && (apellidoIngresado != "")){
   console.log("Bienvenido "+ nombreIngresado + " " + apellidoIngresado);
}else {
   console.log("Ingresa tu noombre");
 }

//IMPORTANTE - es que cuando usamos && ambas condiciones tienen que ser true

//Operador logico ||
//
if((nombreIngresado != "") || (apellidoIngresado != "")){
  console.log("Bienvenido "+ nombreIngresado + " " + apellidoIngresado);
}else {
  console.log("Ingresa tu noombre");
}
//Con una condicion que sea true, el resultado final es true;
//En general no esta bueno concatenar muchos operadores

let nuevoNombre = prompt("Decime tu nombre nuevo");

if((nuevoNombre != "") && ((nuevoNombre === "EMA") || (nuevoNombre === "ema"))){
  alert('hola ema');
}else {
  alert("Ingrese un nombre valido")
}
//NO ES LO MISMO
//ATENTOS A LOS PARENTESIS
if(((nuevoNombre != "") && (nuevoNombre === "EMA")) || (nuevoNombre === "ema")){
  alert('hola ema');
}else {
  alert("Ingrese un nombre valido")
}


/////////////////////////////////////////
//= 
//==
//===

//Lo que hacemos con el igual es asignar un valor a una variable
// string





