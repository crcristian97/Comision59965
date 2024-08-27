// const pi = Math.PI // 3.141592653589793

// // CEIL: devuelve el entero mayor o igual más próximo
// console.log( Math.ceil(pi) ) // 4

// // FLOOR: devuelve el entero más cercano redondeado hacia abajo
// console.log( Math.floor(pi) ) // 3

// // ROUND: retorna el valor de un número redondeado al entero más cercano
// console.log( Math.round(pi) ) // 3

// // números entre 0 y 10
// console.log( Math.random() * 100 );
// // números entre 0 y 50
// console.log( Math.random() * 50);
// // números entre 20 y 50
// console.log( Math.random() * 30 + 20 );

// // numeros entre 150 y 200
//                   //cant numeros   //Apartir de tal numero
// console.log( Math.random() * 50 + 150 );

// // numeros entre 5 a 25
// console.log( Math.random() * 20 + 5 );

// //////////////////////////////////////////////////
// const movies = [
//   { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
//   { title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 },
//   { title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
//   { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
//   { title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 },
//   { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
//   { title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
//   { title: 'Fight Club', director: 'David Fincher', year: 1999 },
//   { title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994 },
//   { title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001 },
// ];

// function obtenerPeliculaAleatoria(peliculas){
//   //genero el indice
//   const randonIndex = Math.round( Math.random() * peliculas.length ); // yo tengo en indice 0, 3 ,4 ,5 ,9
//   const peliculaRandom = peliculas[randonIndex];
//   debugger
//   console.log(peliculaRandom.title);
  
// }
// obtenerPeliculaAleatoria(movies)

// console.log(new Date(1997, 0, 19))

// //1976/3/3 
// console.log(new Date(1976, 2, 3))

// const hoy = new Date("December 17, 2021")

// console.log( hoy.toDateString() ) // Fri Dec 17 2021
// console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
// console.log( hoy.toLocaleDateString() ) // 17/12/2021
// console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina


const fechaBackEnd = '17/12/2021'
//crear una funcion para convertir la fecha
//asi la quiero mostrar en el front
12-17-2021

//la envio al back end
//crear otra funcion para convertir de 
// 12/17/2021 ----> 17/12/2021
17/12/2021

function transformDate(date){
  // date '17/12/2021'
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const partes = date.split('/');
  debugger
  //ES5
  const fechaeeuu = partes[1] + "-" + partes[0] + "-" + partes[2]
  //ES6
  const fechaEEUU = `${partes[1]}-${partes[0]}-${partes[2]}`
  debugger
}

  // if(regex.test(date)){
  //   // yo aca tengo que convertirlo
  //   return date.replace('/', '-').replace('/', '-')
  // }
  // date '17-12-2021'
  // date '3-12-2021'
  // date '03-12-2021'
  /////// 12-17-2021 
  

const fechaTransfomada = transformDate(fechaBackEnd)
debugger