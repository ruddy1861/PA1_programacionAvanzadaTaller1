// 8. PROBLEMA: Para descubrir la ubicación de un listado con los
// últimos guerreros jedi de la galaxia se debe recibir un listado de
// 15 mapas los cuales tienen la siguiente información
// {nombrePlaneta, latitud, longitud, nivel de oxígeno en el
// planeta, volumen total del agua del planeta}. Diseñe una
// solución para:
// • Sumar la cantidad total de agua de los 15 planetas
// • Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
// • Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
// negativo y de ser así mostrar la información general de este
// • Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
// información general de este

let mapaPlanetas = [
  {
    nombrePlaneta: "Endon",
    latitud: 12,
    longitud: 40.075,
    nivelOxigeno: 30,
    volumenAgua: 1300,
  },
  {
    nombrePlaneta: "Polus",
    latitud: 34,
    longitud: 20.065,
    nivelOxigeno: 12,
    volumenAgua: 3000,
  },
  {
    nombrePlaneta: "Kuat",
    latitud: 23,
    longitud: 30.12,
    nivelOxigeno: 9,
    volumenAgua: 0,
  },
  {
    nombrePlaneta: "Jablin",
    latitud: 14,
    longitud: 40.322,
    nivelOxigeno: -89,
    volumenAgua: 1782,
  },
  {
    nombrePlaneta: "Yavin",
    latitud: 90,
    longitud: 12.34,
    nivelOxigeno: 32,
    volumenAgua: 405,
  },
  {
    nombrePlaneta: "Taris",
    latitud: 86,
    longitud: 17.543,
    nivelOxigeno: 56,
    volumenAgua: 239,
  },
  {
    nombrePlaneta: "Hoth",
    latitud: 28,
    longitud: 95.304,
    nivelOxigeno: -12,
    volumenAgua: 300,
  },
  {
    nombrePlaneta: "Chola",
    latitud: 45,
    longitud: 12.345,
    nivelOxigeno: 29,
    volumenAgua: 0,
  },
  {
    nombrePlaneta: "Naboo",
    latitud: 82,
    longitud: 53.245,
    nivelOxigeno: 34,
    volumenAgua: 1304,
  },
  {
    nombrePlaneta: "Bestine",
    latitud: 73,
    longitud: 75.092,
    nivelOxigeno: 50,
    volumenAgua: 3049,
  },
  {
    nombrePlaneta: "Alderaan",
    latitud: 67,
    longitud: 12.945,
    nivelOxigeno: 21,
    volumenAgua: 1400,
  },
  {
    nombrePlaneta: "Coruscant",
    latitud: 39,
    longitud: 45.867,
    nivelOxigeno: 40,
    volumenAgua: 390,
  },
  {
    nombrePlaneta: "Arvala7",
    latitud: 29,
    longitud: 78.098,
    nivelOxigeno: 45,
    volumenAgua: 1300,
  },
  {
    nombrePlaneta: "Dagobaa",
    latitud: 83,
    longitud: 87.094,
    nivelOxigeno: 58,
    volumenAgua: 2490,
  },
  {
    nombrePlaneta: "Ilum",
    latitud: 55,
    longitud: 13.456,
    nivelOxigeno: 20,
    volumenAgua: 2000,
  },
];

//*** Funcion flecha***

// let OperacionTotal=(mapaPlanetas)=>{
//     let sumar = 0;
//     let multiplicar=0;
//     mapaPlanetas.forEach((sumarTotal) => {
//       sumar = sumar + sumarTotal.volumenAgua;
//       multiplicar = sumar+sumarTotal.nivelOxigeno*100;

//     });
//     console.log("El volumen del agua de todos los planetas es de: "+sumar)
//     console.log("El nivel de oxigeno de todos los planetas es de: "+multiplicar)
//   }

//   OperacionTotal(mapaPlanetas);

//*** Funcion tradicional Agua***
function sumarAguaTotal(mapaPlanetas, calcularVolumenAgua) {
  let sumar = 0;
  mapaPlanetas.forEach(function (sumarTotal) {
    sumar = sumar + sumarTotal.volumenAgua;
  });
  console.log("la suma es de total agua es de : " + sumar);
  calcularVolumenAgua(mapaPlanetas);
}
sumarAguaTotal(mapaPlanetas, function (mapaPlanetas) {
  let filtro = mapaPlanetas.filter(function (Calcular) {
    return Calcular.volumenAgua == 0;
  });
  console.log("los planetas con 0% de agua  son: ");
  console.log(filtro);
});

//*** Funcion tradicional Oxigeno***
function calcularNivelOxigeno(mapaPlanetas, calcularOxigenoNegativo) {
  let sumar = 0;
  mapaPlanetas.forEach(function (sumarTotal) {
    sumar = sumar + sumarTotal.nivelOxigeno * 100;
  });
  console.log("la suma es de total oxigeno es de : " + sumar);
  calcularOxigenoNegativo(mapaPlanetas);
}
calcularNivelOxigeno(mapaPlanetas, function (mapaPlanetas) {
  let filtro = mapaPlanetas.filter(function (Calcular) {
    return Calcular.nivelOxigeno < 0;
  });
  console.log("los planetas con nivel de oxigeno negativo son:  ");
  console.log(filtro);
});
