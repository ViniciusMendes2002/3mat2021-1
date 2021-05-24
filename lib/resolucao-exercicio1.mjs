export class Stack {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção 
    push(val) {
        this.#data.push(val)
    }

    // Remoção
    pop() {
        return this.#data.pop()
    }

    // Permite visualizar o conteúdo de #data fora da classe
    toString() {
        return JSON.stringify(this.#data)
    }

    // PROPRIEDADE CALCULADA: retorna se a pilha está ou não vazia
    get empty() {
        return this.#data.length === 0
    }

    // Dá uma espiadinha no topo da linha (último elemento), mas sem retirá-lo 
    peek() {
        return this.#data[this.#data.length - 1]
    }
}