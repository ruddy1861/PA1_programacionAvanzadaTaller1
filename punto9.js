// 9. PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
// aprendices Padawans 2 actividades dependiendo de la edad de
// ellos:
// • Manejo de la fuerza: Si el aprendiz es menor de 15 años
// • Manejo del sable de luz: Si el aprendiz es mayor de 15 años
// Inicialmente, se debe programar una función que asocie los datos de:
// {nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez
// este objeto sea creado se debe llamar a una función secundaria que
// clasifique y muestre en consola la actividad asignada al Padawan 
//****Funcion tradicional*******
function asocciarEstudiandes(nombre,planeta,edad,estatura,seleccionarActividad){
    setTimeout(function(){
     let estudiante={
        nombreEstuduiante:nombre,
        planetaEstudiante:planeta,
        edadEstudiante:edad,
        estaturaEstudiante:estatura
     }
     seleccionarActividad(estudiante)
    },2000)
}
//****Funcion Flecha*****
// let asocciarEstudiandes=(nombre,planeta,edad,estatura,seleccionarActividad)=>{
//     setTimeout(function(){
//      let estudiante={
//         nombreEstuduiante:nombre,
//         planetaEstudiante:planeta,
//         edadEstudiante:edad,
//         estaturaEstudiante:estatura
//      }
//      seleccionarActividad(estudiante)
//     },2000)
// }
//**** LLamar funcion *****
asocciarEstudiandes("juan","pluton",18,1.55,function(estudiante){
    if (estudiante.edadEstudiante<15){
      console.log("Manejo de la Fuerza")
    }else{
        console.log("Manejo de sable de luz")
    }
})