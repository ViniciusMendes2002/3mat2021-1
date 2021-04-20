/*
MERGE SORT

No processo de ordenação este algoritmo "desmonta" o valor original
contendo N elemnetos até obter N vetores de apenas um elemento cada um.
Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
dessa vez com os elementos já em ordem.

*/

let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor){
    
    function mesclar(vetEsq, vetDir){
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length){
            if(vetEsq[pEsq] < vetDir[pDir]){
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Verificando de qual lado houve sobra
        let sobra
        if (pEsq < pDir) sobra = vetEsq.slice(pEsq)     // Sobra à esquerda
        else sobra = vetDir.slice(pDir)                 // Sobra à direita

        // O valor retornado será formado pelo vetor resultado + sobra
        return [...vetRes, ...sobra]        // Concatenando os vetores
    }


    // Desmontando o vetor
    if(vetor.length > 1){ // Para desmontar, são necessários pelo menos 2 elementos
        let meio = Math.floor(vetor.length / 2)
        // slice(): fatia o vetor, desde a posição inicial indicada (inclusive)
        // até a posição final (exclusive - A ÚLTIMA POSIÇÃO ENTRA NA FATIA GERADA)
        let vetEsq = vetor.slice(0, meio)
        // Quando o segundo parâmetro de slice() é omitido são incluídos todos os elementos
        // até o final
        let vetDir = vetor.slice(meio)
        divisoes++
        
        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à própria função para continuar o processo de desmontagem,
        // volta o processo da linha 13
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        //console.log({vetFinal})

        return vetFinal

    }
    return vetor
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

comps = 0, divisoes = 0, juncoes = 0

let numsOrd = mergeSort(nums)
console.log(numsOrd)
console.log({comps, divisoes, juncoes})


import { nomes } from './includes/100-mil-nomes.mjs'

comps = 0, divisoes = 0, juncoes = 0
//console.log('Antes:', nomes)
console.time('Ordenando Nomes:')
let nomesOrd = mergeSort(nomes)
console.timeEnd('Ordenando Nomes:')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({comps, divisoes, juncoes, memoria})
console.log('Depois:', nomesOrd)
//

