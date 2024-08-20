//Arrays
//Conjunto de datos
//Que puede almacenar distintos valores...
//Que valores???
//Boolean, string, number, object, arrays
//Los arrays tienen longitud que arracan SIEMPRE SIEMPRE de 0 hasta el ultimo

//Como lo declaramos? Con los corchetes
let arrayProductos = [];
let arrayNumbers = [1, 2, 3, 4, 5];
let alumnosCoder = ['Lucas', 'Joel', 'Fara', 'Federico'];
let combinacionArrays = [1, "Cristian", ['Cabrera', 'Rodriguez'], false, alumnosCoder];

//Recorrer el array
//SIN ESCALABILIDAD
//Porque? Porque si agrego un elemento al array, para seguir la logica del for
//tengo que modificar manualmente el 5
const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}

//CON ESCALABILIDAD
//1metodo:Usando el .lenght que nos da la longitudad del array

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i= 0; i < numeros2.length; i++) {
    alert(numeros[i]);
}


//2metodo: .push()---> te agrega un elemento al final del array
const tutoresComision599965 = ['Facundo Casal', 'Vanina'];
console.log("Antes de que vani se vaya", tutoresComision599965)
const nuevoTutor = 'Nicolas';
tutoresComision599965.push(nuevoTutor);
console.log("Luego de que vani se fue", tutoresComision599965);

//3metodo: .unshift()----> Te agrega elementos al principio
//Si utlizas el metodo, el elemento que se agrega pasa a tener el indice 0
//Si lo utilizas de nuevo, el nuevo elemento que se agrega pasa a tener el indice 0

const alumnosTop = ['Lucas', 'Joel', 'Fara', 'Federico'];
console.log('Antes del unshift', alumnosTop);
//Se puede mandar 2 elementos
const alumnoAgustin = 'Agustin';
const alumnoEmiliano = 'Emiliano';
alumnosTop.unshift(alumnoAgustin, alumnoEmiliano);
console.log('Despues del unshift', alumnosTop);

//4metodo: .pop(): elimina el ultimo elemento del array
//5metodo: .shift(): elimina el primer elemento del array 
//No hace falta mandarle ningun parametro

//6metodo: splice(2 parametros): elimina elementos dentro del array
                //0       1         2       3         4
//metodo DESTRUCTIVO, porque te modifica el array original
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 3);
console.log(nombres);

//7metodo: join te modifica el array en string y con el valor del parametro te los divide

const nombresAlum = ["Luis", "Ana", "Julia", "Juan"];

console.log( nombresAlum.join(", ") ); 
// Luis, Ana, Julia

console.log( nombresAlum.join("*") );

// 20/08/2024
// 20-08-2024

//concat: te fusciona 2 arrays en uno solo
const perros   = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas);

//slice: es similar al splice, pero mantiene la inmutabilidad

const nombresSlice = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombresSlice.slice(1, 3);
console.log(masculinos);

//indexof: nos permite conocer el indice de un elemento.
//IMPORTANTE: si el indice no se encuentra nos devuelve -1

//includes: nos permite saber si existe un elemento dentro del array 
//nos devuelve true || false

const nombresComisionNueva = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
console.log( nombresComisionNueva.includes('Rita') ) // ⇒ true
console.log( nombresComisionNueva.includes('Miguel') ) // ⇒ true
console.log( nombresComisionNueva.includes('Julieta') ) // ⇒ false

//reverse: nos da vuelta el array original
//ES METODO DESTRUCTIVO
const nombresS = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres.reverse()
console.log( nombres ) 



const nombres2    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos2 = nombres2.slice(1, 3); 
console.log(masculinos2)

/*
const eliminar = (nombre) => {
  // busco su índice en el array
  let index = nombres.indexOf(nombre)

   // si existe, o sea es distinto a -1, lo borro con splice
  if (index != -1 ) {
      nombres.splice(index, 1)
  } 
}

function eliminarElemento(nombre){
  let index = nombres.indexOf(nombre)

  // si existe, o sea es distinto a -1, lo borro con splice
 if (index != -1 ) {
     nombres.splice(index, 1)
 } 
}
eliminar('pedro')
eliminarElemento('pedro')
*/

//MAL
const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });

//BIEN
const objetoProducto = { id: 1, producto: "Arroz" };
const objetoProducto2 = { id: 2, producto: "Fideo" };
const arrayProductosComercio   = [ objetoProducto, objetoProducto2 ];
const objectoProducto3  = { id: 3, producto: "Pan" };
arrayProductosComercio.push(objectoProducto3);



const productos = [
  { id: 1, producto: "Arroz" }, // 0
  { id: 2,  producto: "Fideo" },// 1
];

let productoUser = prompt('que producto te llevas')
const nuevoProducto = {
  id: 3,
  producto: productoUser
}

productos.push(nuevoProducto);

function agregarAlCarrito(productos){
  for (const producto of productos) {
    //ACA HAGO LA LOGICA PARA QUE SE ME MUESTRE EN EL FRONT
    //EN EL MODAL
  console.log(producto.id); //---> 1
  console.log(producto.producto); //---> arroz
  }
}

agregarAlCarrito(productos);
///OBTENER EL BOTON DEL FRONT Y ASIGNARLE ESTA FUNCION


class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}

const nameProduct = prompt('que producto llevas');
const priceProduct = 125;
//Declaramos un array de productos para almacenar objetos
const productosClase = [];
const product1 = new Producto(nameProduct, priceProduct);
productosClase.push(product1);
productosClase.push(new Producto("fideo", "70"));
productosClase.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productosClase)
  producto.sumaIva();