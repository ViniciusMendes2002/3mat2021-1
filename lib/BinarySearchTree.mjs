/*
    ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA

    - Árvore -> é uma estrutura de dados não-linear, hirárquica,
    que é formada recursivamente por outras subárvores.
    - Árvore binária -> uma árvore na qual cada nodo tem grau máximo 
    igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descentendentes
    diretos).
    - Árvore binária de busca -> é uma árvora binária otimizada para a
    operação de busca binária. Por isso, na inserção, os valores são
    colocados já em ordem.  
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null    // Ponteiro para subárvore esquerda (valores menores)
        this.right = null   // Ponteiro para subárvore direita (valores maiores)
    }
}

export class BinarySearchTree{

    #root       // Raiz da árvore
    constructor() {
        this.#root = null
        console.log(this.#root)
    }

    insert(val) {

        const node = new Node(val)

        // 1° Caso: Árvore vazia
        if(this.#root === null) this.#root = node
        // 2° Caso: inserção recursiva
        else this.#insertNode(node, this.#root)

        console.log(this.#root)
    }

    // Parâmetros: 
    // node -> nodo a ser inserido
    //root -> raiz da SUBÁRVORE no qual a nodo será inserido
    #insertNode(node, root) {
        if(node.data < root.data) {     // Vamos para à esquerda
            // Possibilidade 1: Nodo à esquerda vazio, inserimos o nodo
            if(root.left === null) root.left = node
            // Possibilidade 2: nodo à esquerda ocupado, precisamos descer mais à esquerda
            else this.#insertNode(node, root.left)
        }
        else if (node.data > root.data) {   // Vamos para a direita
            // Possibilidade 1: Nodo à direita vazio, inserimos o nodo
            if(root.right === null) root.right = node
            // Possibilidade 2: nodo à direita ocupado, precisamos descer mais à direita
            else this.#insertNode(node, root.right)
        }  
    }

    // Percurso da árvore em ordem
    // 1°: Visita  EM ORDEM a subárvore esquerda
    // 2°: Visita a raiz
    // 3°: Visita EM ORDEM a subárvore direita

    inOrderTraversal(fnCallback, root = this.#root) {
        if(root != null) {
            this.inOrderTraversal(fnCallback, root.left)    // Visita a subárvore esquerda
            fnCallback(root.data)                           // Visita a raiz
            this.inOrderTraversal(fnCallback, root.right)   // Visita a subárvore direita
        }
    }

    // Percurso da árvore em PRÉ-ORDEM
    // 1°: Visita  a raiz
    // 2°: Visita a sub-árvore esquerda em PRÉ-ORDEM
    // 3°: Visita a sub-árvore direita em PRÉ-ORDEM

    preOrderTraversal(fnCallback, root = this.#root) {
            if(root != null) {
            fnCallback(root.data)                           // Visita a raiz
            this.preOrderTraversal(fnCallback, root.left)   // Visita a subárvore esquerda
            this.inOrderTraversal(fnCallback, root.right)   // Visita a subárvore direita
        }
    }

}   
    
const arvore = new BinarySearchTree()
arvore.insert(35)
arvore.insert(20)
arvore.insert(51)
arvore.insert(26)

let percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log({percurso})

percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log({percurso})

