/*

    1) Observe a árvore binária representada na figura "arvore.png". Responda:
        a) Quantos níveis essa árvore possui? Esta árvore possui 5 níveis.
        b) Qual a altura da subárvore cuja raiz é 16?
        c) Qual a profundidade do nodo de valor 29? A profundidade é 6.


    2) Monte em código, neste arquivo, a árvore representada na figura.

    3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

    4) Anote, abaixo, os percursos da árvore após as remoções:
        a) Percurso em-ordem:
        b) Percurso pré-ordem:
        c) Percurso pós-ordem:

    5) Anexe este arquivo, com o código da árvore binária de busca, ao
        entregar a prova.

*/

import { BinarySearchTree } from './lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()
arvore.insert(51)
arvore.insert(16)
arvore.insert(87)
arvore.insert(9)
arvore.insert(44)
arvore.insert(72)
arvore.insert(99)
arvore.insert(1)
arvore.insert(14)
arvore.insert(35)
arvore.insert(60)
arvore.insert(79)
arvore.insert(92)
arvore.insert(20)
arvore.insert(43)
arvore.insert(58)
arvore.insert(86)
arvore.insert(29)

let percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Em ordem:', {percurso})

percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log('Pré-ordem:', {percurso})

percurso = []
arvore.postOrderTraversal(val => percurso.push(val))
console.log('Pós-ordem:', {percurso})

console.log('-----------------------------------------------')
percurso = []
arvore.inOrderTraversal(n => percurso.push(n))
console.log(percurso)

// Exclusão do 58
arvore.remove(58)
percurso = []
arvore.inOrderTraversal(n => percurso.push(n))
console.log('Sem o 58:', percurso)

// Exclusão do 35
arvore.remove(35)
percurso = []
arvore.inOrderTraversal(n => percurso.push(n))
console.log('Sem o 35:', percurso)

// Exclusão d0 87
arvore.remove(87)
percurso = []
arvore.inOrderTraversal(n => percurso.push(n))
console.log('Sem o 87:', percurso)

// Exclusão do 51
arvore.remove(51)
percurso = []
arvore.inOrderTraversal(n => percurso.push(n))
console.log('Sem o 51:', percurso)
