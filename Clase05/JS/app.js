//El objecto es una coleccion de datos que tiene par clave-valor
//Te permita manipular datos y hacer que JS sea escalable

/////////////ANTES SIN OBJECTO/////////////////
// let nombreUsuario = prompt('Cual es tu nombre');
// let edadUsuario = prompt('Cual es tu edad');
// let dniUsuario = prompt('Cual es tu dni');

// if(edadUsuario >= 18){
//   //LOGICA PARA QUE EL USUARIO PUEDA ENTRAR
// }else {
//   //LOGICA PAR QUE NO PUEDA ENTRAR
// }

// /////////////VARIABLES CON FUNCIONES/////////

// let nombreUsuario2 = prompt('Cual es tu nombre');
// let edadUsuario2 = prompt('Cual es tu edad');
// let dniUsuario2 = prompt('Cual es tu dni');

// function validarEdad(nombreUsuario2, edadUsuario2, dniUsuario2){
//   if(edadUsuario2 >= 18){
//     console.log('bienvenido '+ nombreUsuario2 + 'DNI: ' + dniUsuario2 );
//   }else {
//     //LOGICA PAR QUE NO PUEDA ENTRAR
//   }
// }

// validarEdad(nombreUsuario2, edadUsuario2, dniUsuario2);

///////////OBJECTOS//////////////
/*
let nombreUsuario3 = prompt('Cual es tu nombre');
let edadUsuario3 = prompt('Cual es tu edad');
let dniUsuario3 = prompt('Cual es tu dni');

const usuarioDigital3 = {
  nombre: nombreUsuario3,
  edad : edadUsuario3,
  dni: dniUsuario3
}

function validarEdad(usuarioDigital){
  debugger
  if(usuarioDigital.edad >= 18){
    console.log('bienvenido '+ usuarioDigital['nombre'] + 'DNI: ' + usuarioDigital.dni );
  }else {
    //LOGICA PAR QUE NO PUEDA ENTRAR
  }
}

validarEdad(usuarioDigital3);
*/
/////////////////////CONSTRUCTORES//////////////////

//ANTES DE ES2015
 /*
 function Podcast(title, date, duration){
  this.title = title;
  this.date = date;
  this.duration = duration;
}*/
///////////////////////

//ESTO ES LO NUEVO 
/*
class Podcast {
  constructor(title, date, duration) {
    this.title = title;
    this.date = date;
    this.duration = duration;
  }
}

const podcastTunstall = new Podcast('KT Tunstall', '1/03/2019', '14:00');
const podcastLaCruda = new Podcast('Ciego', '21/05/2023', '40:00');
const podcastEstoicismo = new Podcast('La vida del estoicismo', '18/10/2021', '57:00');

class RopaMG {
  constructor(title, descripction, talle, envioFree) {
    this.title = title;
    this.descripction = descripction;
    this.talle = talle;
    this.envioFree = envioFree
  }
}

const buzoAdidasOver = new RopaMG('Buzo Adidas Lebron', 'Buzo traido de EEUU copado para jugar al basquet', ['X', 'M', 'XL'], true);


function freeSend(ropaMG){
  if(ropaMG.envioFree === true){
    //LE MANDO EL ESTILO CREADO DESDE  CSS PARA QUE VEA EL FREE SEND
  }

}
freeSend(buzoAdidasOver)


console.log(podcastTunstall);
console.log(podcastLaCruda);
console.log(podcastEstoicismo);
*/
debugger
class Producto {
  constructor(nombre = '', precio = 0, marca = 'Peleador') {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.marca = marca.toUpperCase();
      this.vendido = false;
  }

}
const producto1 = new Producto("arroz", "125", 'Luqetti');
const producto2 = new Producto("fideo", "50", 'Luqetti');
const producto3 = new Producto("Pollo", "50", 'Luqetti');

producto3.colorFerrar();
// CAMBIO DE HTML

producto3.tapizadoFerrari();
producto1.sumaIva();
producto2.sumaIva();
producto3.sumaIvaPollo();
console.log(producto1.vender());

//METODO EN LA CLASE 09
// innerHTML, innerText, appendChild





