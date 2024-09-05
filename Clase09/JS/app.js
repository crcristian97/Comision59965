//DOM

//es una estructura de objetos generada por el navegador,
//la cual representa la página HTML actual. 

//Existe nodos padres y nodos hijos (mirar el html)
//Existes nodos elementos (</p>) o el nodo texto (el texto que incluye el p)

//Para acceder al dom usamos 3 metodos
//getElementById => si o si tiene que haber un id en el dom

let div = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);

// let user = 'cristian'
// if(user === "cristian"){
//   let parrafo = document.getElementById("parrafo1");
//   parrafo = `Hola ${user}`;
// }

//2do metodo: getElementByClassName
//te permite seleccionar las clases que tengan ese nombre
// let paises = document.getElementsByClassName("paises");
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// for (const pais of paises) {
//   console.log(pais.innerHTML);
// }

// let contenedores = document.getElementsByTagName("div");
// contenedores.innerHTML = "HOOOOOOOOOOOLAAAAAAAAAAAAAAAAAAAA"

// let mensajeDOM = document.getElementById('mensajeAlerta')
// console.log(mensajeDOM.innerHTML)
// console.log(mensajeDOM.innerText)
// debugger
// //const mensajeAlerta = 'Algunos de los datos que ingresaste son incorrectos. Intentá de nuevo.';

// const mensajeAlerta = () => {
//   //VALIDACION DE USUARIO
// }
// mensajeDOM.innerText = mensajeAlerta;

const productos = [
  { id: 1,  producto: "Arroz", precio: 125 , description: "comidita barat", img: "/"},
  {  id: 2,  producto: "Fideo", precio: 70 , description: "comidita barat", img: "/"},
  {  id: 3,  producto: "Pan"  , precio: 50, description: "comidita barat", img: "/"},
  {  id: 4,  producto: "Flan" , precio: 100, description: "comidita barat", img: "/"}
]

let productoModal = [];

function renderProduct(productos){
  let container = document.getElementById('container');
  let content = '';
  let etiquetasection = document.createElement('section');
  productos.map(elemento => {
  let etiquetadiv = document.createElement('div');
    content += `
      <img alt="" title="" src=${elemento.img}>
      <h1 class="container">${elemento.producto}</h1>
      <p>${elemento.description}</p>
      <p>${elemento.precio}</p>
      <button class="btn-danger">Agregar al carrito</button>
    `;
  document.body.appendChild(etiquetadiv);
  });

  //aca llaman al localStorage
  localStorageProducto()
  container.innerHTML = content;
  document.body.appendChild(etiquetasection);
}

function localStorageProducto(){
  localStorage.setItem('carritoModal', productoModal);
}

renderProduct(productos);


// let inputName = document.getElementById('nombreUsuario').value;

// function validarUsuario(inputName = ""){
//   if(inputName === "" ){
//     container.innerHTML = "DATO INCORRECTO";
//   }
// }

// validarUsuario(inputName)

// //ES5 
// let nameUsuario = "lucas";
// let apellidoUsuario = "Marchena";
// const dataUsuario = "Bienvenido" + nameUsuario + " " + apellidoUsuario;
// //ES6
// let nombreUser = "Cristian";
// let apellidoUsuer = "Cabrera";
// const resultado = `Bienvenido ${nombreUser} ${apellidoUsuer}`

