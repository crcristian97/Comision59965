// let boton = document.getElementById("btnPrincipal");


// //1 forma - a
// boton.addEventListener("click", respuestaClick);

// function respuestaClick(){
//      console.log("Respuesta evento");
// }

// //1 forma - b
// boton.addEventListener("click", () => {
//   console.log("Respuesta eventooo");
// });

// // 2 forma es poniendole el ON
// boton.onclick = () => {
//   console.log("Respuestitaaa");
// };

// function saludar(){
//   //la logica para saludar
// }

// let boton = document.getElementById("btnMain");

// boton.onclick = () => {console.log("Click")};

// boton.onmouseover = () => {console.log("Move")};


// let input1 = document.getElementById("nombre")

// let input2 = document.getElementById("edad")

// input1.onkeyup = () => {console.log("keyUp")}

// input2.onkeydown = () => {console.log("keyDown")}

let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");

// input1.onchange = () => {
//   if(input1.value){
//     console.log("Ingrese un usuario correcto")
//   }
// };

// input1.oninput = () =>{
//   console.log(input1.value)
// }

// input2.onchange = () => {
//   console.log("valor2")
// };

let miFormulario  = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
  deb
    e.preventDefault();
    console.log("Formulario Enviado");    
}

