// 5. PROBLEMA: Watto paga a su personal de ventas un salario de
// 3500000 mensuales, más una comisión de 1500000 por cada
// licencia de software vendida menos el 5% de deducciones por
// impuestos sobre el total devengadp. Codifica un programa que
// calcule e imprima el salario mensual de un vendedor dado

//**** Funcion tradicional****
// function Calcularsalario (licencia){
//     let salarioMin=3500000,comisión=1500000
//     let salarioNeto=salarioMin+comisión*licencia-100/5
//     console.log(salarioMin)
//     console.log(comisión)
//     console.log(licencia)
//     return console.log("su salario es de: "+salarioNeto)
// }
//**** Funcion flecha***
let Calcularsalario = (licencia) => {
  let salarioMin = 3500000;
  let comisión = 1500000;
  let ventascomisión = comisión * licencia;
  let porcentaje = ventascomisión * (5 / 100);
  let salarioNeto = salarioMin + ventascomisión - porcentaje;
  console.log("su salario es de: " + salarioNeto);
};
//****llama funcion***
Calcularsalario(3);
