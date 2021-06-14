/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    Estrutura de dados Doubly Linked List, função de inserção em lista vazia, início, final e posição intermediária.
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j, k) {
        if(j < 0) return // Sai sem fazer nada, pois a posição não pode ser negativa
        const l = new A(k)
        // 1° Caso: Lista vazia
        if(this.empty) {
            this.#f = l
            this.#g = l
        }
        // 2° Caso: Inserção no início
        else if(j === 0) {
            l.d = this.#f
            this.#f.c = l
            this.#f = l
        }
        // 3° Caso: Inserção no final
        else if(j >= this.#h) {
            l.c = this.#g
            this.#g.d = l
            this.#g = l
        }
        // 4° Caso: Inserção em posição intermediária
        else {
            let m = this.#n(j)
            let o = m.c
            l.d = m // O sucessor do novo nodo passa a ser o nodo da posição
            o.d = l // O sucessor do nodo anterior passa a ser o novo nodo
            l.c = o
            m.c = l
        }
        this.#h++

    }

    /* Código omitido */

}