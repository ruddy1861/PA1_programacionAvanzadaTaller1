// 3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
// hay que hacer un monitoreo constante, Cree una función de flecha que
// permita calcular la temperatura media de la luna a partir de la
// temperatura máxima y mínima de cada día

//******Funcion Flecha********

// let calcularTemperatura = (temperatura) => {
//     let temperaturaMaxima = Math.max(...temperatura);
//     let temperaturaMinima = Math.min(...temperatura);
//     let temperaturaIntermedia = (temperaturaMaxima + temperaturaMinima) / 2;
//     console.log("La tempertura promedio fue de: " + temperaturaIntermedia);

// }
//***** Funcion Tradicional****
function calcularTemperatura(temperatura){
    let temperaturaMaxima = Math.max(...temperatura);
    let temperaturaMinima = Math.min(...temperatura);
    let temperaturaIntermedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return console.log("La tempertura promedio fue de: " + temperaturaIntermedia);

}
//******llamo funcion******
calcularTemperatura([214,184]);