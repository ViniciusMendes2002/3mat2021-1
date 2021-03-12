 function buscaSequencial(vetor, fnComp){
     //Percurso com for Tradicional
     for (let i = 0; i < vetor.length; i++) {
         //if(vetor[i] === valorBusca)
         // Encontrado o valor de busca, retorna-se a posição onde foi encontrado
         //fnComp (função de comparação), represnta a chamada à função externa
         if(fnComp(vetor[i])) 
         return i
     }
     // Retorna-se -1 caso não tenha sido encontrado o valor de busca
     return -1
 }

 // Recebe apenas um objeto de nome e retorna true caso a propriedade
 // first_name seja uma idêntica ao valor de busca
 /*function comparaNome(objNome, valorBusca) {
     return objNome.first_name === valorBusca
 }*/

 const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca


 import { objNomes } from './includes/vetor-obj-nomes.mjs'


 console.time('Buscando ZILMAR')
 console.log(buscaSequencial(objNomes, (objNome) => objNome.first_name === 'ZILMAR'))
 console.timeEnd('Buscando ZILMAR')

 console.time('Buscando KATIUSCIA')
 console.log(buscaSequencial(objNomes, (objNome) => objNome.first_name === 'KATIUSCIA'))
 console.timeEnd('Buscando KATIUSCIA')

 console.time('Buscando Nome ABRAAO')
 console.log(buscaSequencial(objNomes, (objNome) => objNome.first_name === 'ABRAAO'))
 console.timeEnd('Buscando Nome ABRAAO')

 console.time('Buscando group_name ABRAAO')
 console.log(buscaSequencial(objNomes, (objNome) => objNome.group_name === 'ABRAAO'))
 console.timeEnd('Buscando group_name ABRAAO')
 