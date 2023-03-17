// 10. Grogu ha iniciado su entrenamiento Jedi y debe activar un
// software que permita clasificar su dieta:
// alimento = {
//     nombre,
//     tipo (Puede ser vegetal, animal, insecto),
//     nivel de energía aportado (números entre 1 00-500)
// }
// Cree un programa que permita recibir 300 alimentos y mediante una
// función primaria después de 5 segundos se pueda obtener solo los
// alimentos de tipo vegetal que entreguen más de 200 unidades de
// energía. Finalmente, una función callback debe permitir entregar la
// sumatoria de niveles de energía entregados por los alimentos vegetales
// consumidos en la dieta de Grogu.


let alimentoAleatorio=(longitud)=> {
        let codigos="marungayabno"
        let nombre = ""
        for (i = 0; i < longitud; i++) {
            nombre += codigos.charAt(Math.random() * codigos.length);//El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
        }
        return nombre
    };
let generarTipo=()=>{
    let tipos=["animal","vegetal","insecto"]
    const tipoAleatorio= Math.floor(Math.random()*tipos.length)

   return tipos[tipoAleatorio];
}

console.log("Esta es toda la dieta de nuestro amigo Gogru")
 
    let alimentos = [];
    for (let i = 0; i < 300; i++) {
        alimento={}
        alimento["nombre"]=alimentoAleatorio(5)
        alimento["tipos"]=generarTipo()
        alimento["nivelEnergia"]=Math.floor(Math.random()*100)
        alimentos.push(alimento)
    }
    console.log(alimentos)



function clasificarAlimentos(alimentos,sumatoriadeNiveles){
    console.log("Clasificaremos los alimentos de tipo vegetal")
    setTimeout(function(){
        let filtro=alimentos.filter(function(alimento){
            return alimento.tipos=="vegetal" && alimento.nivelEnergia
        });
        sumatoriadeNiveles(filtro)
    },5000)
};
clasificarAlimentos(alimentos,function(Niveles){
    let resultado=0
    console.log(Niveles)
    Niveles.forEach(alimento => {
        resultado=resultado+alimento.nivelEnergia
        
    });
    console.log("Los niveles de energia que nos aportan los alimentos de tipo Vegetal son un total de: "+resultado)
})
// alimentoAleatorio(5)
// generarTipo()


// function generarAlimentos(){
//     let alimentos = [];
//     for (let i = 0; i < 300; i++) {
//       alimentos.push({
//         nombre: ["nombre"]=alimentoAleatorio(5)
//         tipo: Math.floor(Math.random() * 30),
//         nivelEnergia: Math.floor(Math.random()*600),
//       });
//     }
//     console.log(alimentos)
//     return alimentos;
//   }
//   generarAlimentos()

//***Funciones tradicionales
// function alimentoAleatorio(longitud){
//     let codigos="marungayabno"
//     let nombre = ""
//     for (i = 0; i < longitud; i++) {
//         nombre += codigos.charAt(Math.random() * codigos.length);//El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
//     }
//     return  console.log(nombre);
// };

// function ContarNivelEnergia(){
//     let nivelEnergia = [];
//     for (let i = 0; i < 300; i++) {
//         nivelEnergia.push(Math.floor(Math.random()*100));
//     }
//     return console.log(nivelEnergia)
// }

// function generarTipo(){
//     let tipos=["animal","vegetal","insecto"]
//     const tipoAleatorio= Math.floor(Math.random()*tipos.length)
//     return tipos[tipoAleatorio]
// }