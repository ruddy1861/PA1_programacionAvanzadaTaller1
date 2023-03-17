// 6. PROBLEMA: Para habilitar la guerra de los clones es necesario
// clasificar la edad de estos, elabore un programa que permita
// recibir 20 edades y 20 códigos diferentes generadas
// aleatoriamente y determine cual de esas edades es la mayor. Si
// se repite la misma edad se debe contar el número de
// repeticiones

//creo funcion para generear las edades y los codigos dentro de un for que indica que deben ser 20 datos.
function generarClones(){
  let clones = [];
  for (let i = 0; i < 20; i++) {
    clones.push({
      edad: Math.floor(Math.random() * 18),
      codigo: Math.floor(Math.random() * 30),
    });
  }
  console.log(clones)
  return clones;
}

//en esta funcion clasifico solo las edades con ayuda de un forEach  creando un arreglo llenandolo con .push
function clasificarClones() {
  let clones = generarClones();
  let edadesClones = [];
  clones.forEach((clon) => {
    edadesClones.push(clon.edad);
  });
// identifico la edad mayor con math.max buscando en el arreglo creado anteriormente(edadesClones)
  let edadMayor = Math.max(...edadesClones);
  let edadRepetidad = 0;
  edadesClones.filter((edad) => {
    if (edad == edadMayor) {
      edadRepetidad++;
    }
  });
  console.log("edad " + edadMayor + " se repite " + edadRepetidad);
}
//****llama funcion***
clasificarClones();



// let recibirEdades = (edad) => {
//   let edadMayor = Math.max(...edad);
//   // let duplicados=[]
//   // let edadesRepetidas = [...edad].sort()
//   // for (i = 0; i < edadesRepetidas.length; i++) {
//   //     if (edadesRepetidas[i + 1] === edadesRepetidas[i]) {
//   //       duplicados.push(edadesRepetidas[i]);
//   //     }
//   //   }
//   var repetidos = {};
//   edad.forEach(function (numero) {
//     repetidos[numero] = (repetidos[numero] || 0) + 1;
//   });

//   console.log(repetidos);
//   console.log("edad mayor es: " + edadMayor);
//   // console.log("edades repetidas son: "+duplicados)
// };
// //recibirEdades([2, 2, 29, 10, 48, 30, 48, 22, 89, 36, -15, 29, 36, 90, -30]);

// let codigoAleatorio=(longitud)=> {
//     let codigos="123456789abcdfghijklmnopqrstuvwxyz"
//     let aleatorio = ""
//     for (i = 0; i < longitud; i++) {
//         aleatorio += codigos.charAt(Math.random() * codigos.length);//El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
//     }
//     console.log(aleatorio);

// };
// codigoAleatorio(10)
