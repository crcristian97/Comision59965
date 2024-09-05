///////LocalStorage////
//Permite almacenar informacion de nuestra app
//Esta informacion persiste aunque reinicie el navegador
//Las unicas formas de eliminarlo es manualmente o con el metodo correspondiente

//Compone el localStorage?
//clave - valor
//Muy parecido al objecto
//Palabra reservda con sus metodos

//Metodo 1: setItem
//PERMITE ALMANEZAR HASTA 5MB
// localStorage.setItem('modalProductos', 'cristian');
// localStorage.setItem('edad', 27);
// localStorage.setItem('sos Profesor', true);
// localStorage.setItem('mail profesor', 'crcristian97c@gmail.com');

// //Metodo 2: getItem
// const edadProfe = localStorage.getItem('edad'); // 27
// const nombreProfe = localStorage.getItem('modalProductos'); // 'cristian

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("Clave: "+ clave);
//   console.log("Valor: "+ localStorage.getItem(clave));
// }

// //Metodo 3: remove o clear
// //Si quiero eliminar un producto en puntual utilizo removeItem
// localStorage.removeItem(clave);
// //Si quiero eliminar todos los productos
// localStorage.clear();

//INFORMACION LOCALSTORAGE
//NUNCA SE GUARDA INFORMACION SENSIBLE

//Que pasa cuando guardamos un objecto en el localStorage
//Se guarda como [object Object]
//Para solucionar este problema, se necesita parsear
//Para parsear un objecto a un archivo json, 
//se utiliza el metodo JSON.PARSE(OBJECTO)

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
  {  id: 2,  producto: "Fideo", precio: 70 },
  {  id: 3,  producto: "Pan"  , precio: 50},
  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { 
  debugger
  localStorage.setItem(clave, valor) 
};
//Almacenar producto por producto
// for (const producto of productos) {
// guardarLocal(producto.id, JSON.stringify(producto));
// }
// o almacenar array completo


guardarLocal("listaProductos", JSON.stringify(productos));
