/*
MERGE SORT

No processo de ordenação este algoritmo "desmonta" o valor original
contendo N elemnetos até obter N vetores de apenas um elemento cada um.
Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
dessa vez com os elementos já em ordem.

*/

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
        }
        // FALTA PROCESSAR A SOBRA
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
        
        console.log({vetEsq, vetDir})

        // Chamadas recursivas à própria função para continuar o processo de desmontagem,
        // volta o processo da linha 13
        mergeSort(vetEsq)
        mergeSort(vetDir)

    }
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

mergeSort(nums)
