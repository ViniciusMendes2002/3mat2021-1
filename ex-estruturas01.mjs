/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.
    Data de entrega: 26/05, até 11h20, valendo nota de participação
*/

// Não consegui chegar ao resultado neste exercício

import { Stack } from './lib/Stack.mjs'

let pilha = new Stack()

let expr = '3'


while(expr > 0) {
    rest = expr % 2
    pilha.push(rest)
    expr = val / 2
}

while(! pilha.empty()) {
    numBinario += pilha.pop()
}

console.log(pilha.toString())
