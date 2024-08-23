//Lo importante de funcion de orden superior
//Abstracion? Refactorizacion de codigo
// Se puede declarar a una variable una funcion
// Una funcion puede recibir como parametros, funciones


let ingreseOperacion = prompt("Que deseas hacer");
let ingresePrimerNumero = prompt("Ingrese 1er numero")
let ingrese2doNumero = prompt("Ingrese 2do numero")

function asignarOperacion(op) {
  if (op === "sumar") {
      return (a, b) => a + b
  } else if (op === "restar") {
      return (a, b) => a - b
  } else if (op === "division") {
    return (a, b) => a / b
  }else {
    return (a, b) => a * b
  }
}

function operacion(operador){
  if(operador === "+"){
    return "sumar";
  }else if(operador === "-"){
    return "restar";
  }else if(operador === "/"){
    return "division";
  }else{
    return "multiplicar";
  }
}

const suma = asignarOperacion(operacion(ingreseOperacion));
console.log(suma(ingresePrimerNumero, ingrese2doNumero));


const ropaTienda = [
  {nombre: 'RemeraOverside', precio: 15000, talle : 'XL'},
  {nombre: 'RemeraOverside', precio: 15000, talle : 'XL'},
  {nombre: 'ReactJS', precio: 22000},
]

let busquedaUsuarioTalle = 'XL'//prompt("Que estas buscando...")

const resultado = ropaTienda.filter((ropa) => ropa.nombre === 'RemeraOverside');
console.log(resultado)


const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'AngularJS', precio: 22000},
  {nombre: 'Desarrollo Web', precio: 16000},
]
let arrayVacio = []
const actualizado = cursos.map((el) => {
  debugger
  arrayVacio.push(el)
});


console.log(arrayVacio);

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];


//acumulador : banana  : frut 2 
// const countFruits = fruits.reduce((accumulator, fruit) => {
//   debugger
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(countFruits); 

const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]
items.sort((a, b) => {
  if (a.name > b.name) {
      return 1;
  }
  if (a.name < b.name) {
      return -1;
  }
  // a es igual a b
  return 0;
})


/*
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
  {  id: 2,  producto: "Fideo", precio: 70 },
  {  id: 3,  producto: "Pan"  , precio: 50},
  {  id: 4,  producto: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === “Harina”)
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);

*/