/*
    Implemente um programa verificador de palíndromos utilizando um deque.
    Data de entrega: 26/05, até 11h20, valendo nota de participação
*/

const texto = 'Socorram-me, subi no ônibus em Marrocos'

const Deque = []

for(let i = 0; i < texto.length; i++) {
    Deque.unshift(texto.charAt(i)) 
}

console.log(Deque)

let textoRev = ''

while(Deque.length) {
    textoRev += Deque.shift()
}

console.log(textoRev)