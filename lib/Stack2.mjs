export class Stack {

    #data
    #tail   // Cauda (topo) da pilha

    constructor() {
        this.#data = {}     // Objeto vazio
        this.#tail = -1
    }

    push(val) {
        this.#tail++    // Incrementando o topo
        this.#data[this.#tail] = val
    }

    pop() {
        // Se a pilha estiver vazia, retorna undefined para evitar que o
        // valor de #tail fique abaixo de -1
        if(this.empty) return undefined    
        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail]   // Destrói a posição do objeto
        this.#tail--
        return temp
    }

    toString() {
        return JSON.stringify(this.#data)
    }

    get empty() {
        return this.#tail < 0   // Estará vazia se o tail for -1
    }

    peek() {
        return this.#data[this.#tail]
    }

}
