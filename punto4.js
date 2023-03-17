// 4. PROBLEMA: QUI-GON JINN está encargado de revisar n sables
// de luz y contabilizar la cantidad de energía de sables que tienen
// negativa en Joules.
// Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
// defectuosos con energía negativa fue de 2 sables.

//*** Funcion Tradicional****
// function calcularCantidad(sables){
//      let filtro=sables.filter(nro => nro < 0)
//      return filtro;
// }

//*** Funcion Flecha***
let calcularCantidad=(sables)=>sables.filter(nro => nro < 0)

     
//***llama funcion quemando valores de entrada
console.log(calcularCantidad([2,-1,-2,3,4,-6]))