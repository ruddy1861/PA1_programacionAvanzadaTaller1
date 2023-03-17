// 7. PROBLEMA: se necesita clasificar 10 números enteros positivos
// o negativos que contienen códigos de naves de guerra. Diseño
// un algoritmo que permita recibir dichos 50 números e indicar
// ¿Cuál fue el más cercano a cero? (Si el número es negativo se
// debe mostrar el resultado del valor absoluto)
// ****Funciones tradicionales*****
// function generarNumeros(){
//     let numeros = [];
//     for (let i = 0; i < 50; i++) {
//         Numeros.push(Math.floor(Math.random()*100)-10);
//     }
//     console.log(Numeros)
//     return Numeros;
//   }

//   function seleccionarNumero(){
//     let Numeros= generarNumeros();
//     let numeroMenor = Math.min(...Numeros);
//     let numeroAbs=0
//     if(numeroMenor<0){
//        numeroAbs = Math.abs(numeroMenor)
//     }
//     console.log("el numero menor es: "+numeroMenor)
//     return console.log(numeroAbs)
//   }
// ****Funciones Flecha****
let generarNumeros = () => {
  let numeros = [];
  for (let i = 0; i < 50; i++) {
    numeros.push(Math.floor(Math.random() * 100) - 10);
  }
  console.log(numeros);
  return numeros;
};

let seleccionarNumero = () => {
  let numeros = generarNumeros();
  let numeroMenor = Math.min(...numeros);
  let numeroAbs = 0;
  if (numeroMenor < 0) {
    numeroAbs = Math.abs(numeroMenor);
  }
  console.log("el numero menor es: " + numeroMenor);
  console.log(numeroAbs);
};

// ****LLamar Funciones ****
//generarNumeros()
seleccionarNumero();
