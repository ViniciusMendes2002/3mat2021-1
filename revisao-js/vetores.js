let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']

// Exibir o vetor
console.log(frutas)

// Tirar o último elemento do vetor
let ultimaFruta = frutas.pop()


console.log(frutas)
console.log(ultimaFruta)

// Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediárias
// splice()
// 1° Paramêtro: Posição que será removida (A contagem começa em zero)
// 2° Paramêtro: Quantidade de elementos que serão removidos


let terceiraFruta = frutas.splice(2, 1) //Fruta na posição 2
console.log(frutas)
console.log(terceiraFruta) // splice() sempre retorna um vetor

<<<<<<< HEAD
// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')

console.log(frutas)

// Inserir um elemento no início do vetor
=======

// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')


console.log(frutas)

//Inserir elementos no início do vetor
>>>>>>> 3b7d630cb023eb9f96ab3ec57dc15a79c5653f50
frutas.unshift('amora')

console.log(frutas)

<<<<<<< HEAD
// Inserindo em posição intermediária
// splice() para inserção
// 1º parâmetro: a posição onde ocorrerá a inserção
// 2º parâmetro: quantos elementos serão excluídos (0)
// Parâmetros seguintes: elementos a serem inseridos

// Inserindo na 4ª posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)

// Inserindo duas frutas na 3ª posição
frutas.splice(2, 0, 'caqui', 'jaca')
console.log(frutas)

// Substituindo 6ª fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)

/*******************
 * Percursos de Vetores
 */

 // 1) Via for tradicional
 // É o mais flexível, permitindo o percurso parcial (pode começar
 // em um elemento que não seja o primeiro e terminar em um elemento que não
 // seja o último)

 for (let i = 0; i < frutas.length; i++) {
     console.log(i, frutas[i])
 }

console.log('----------------------------------------')

 // 2) Via for tradicional, em  ordem inversa
for (let i = frutas.length - 1; i >= 0; i--){
     console.log(i, frutas[i])
}

console.log('----------------------------------------')

// 3) Percurso usando for..of
// Percorre totalmente um vetor, sem necessidade de manter uma variável contadora
// Variáveis:
// fruta -> nomde da variável que receberá um elemento (pode ser qualquer nome válido
// de variável)
// frutas -> o nome do vetor que está sendo percorrido

for (let fruta of frutas) {
    console.log(fruta)
}

console.log('----------------------------------------')

// 4) Percurso utilizando forEach()
// forEach() recebe como argumento uma função cujo argumento
// é cada um dos elementos de vetor percorrido
// O nome do parâmetro da função pode ser qualquer nome válido
// de identificador
frutas.forEach(function(fruta){
    console.log(fruta)
})

console.log('----------------------------------------')

// forEach() utilizando arrow function parâmetro
frutas.forEach(fruta => console.log(fruta))
=======

// Inserindo em posição intermediaria
//splice() para inserção
// 1° Parâmetro: a posição onde ocorrerá a inserção
// 2° Parâmetro: quantos elementos serão excluídos (0)
// Parâmetros seguintes: elementos a serem inseridos

// Inserindo na 4° posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)


// Inserindo duas frutas na terceira posição
frutas.splice(2, 0, 'caquí', 'jaca')
console.log(frutas)


// Substituindo a 6° fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)


>>>>>>> 3b7d630cb023eb9f96ab3ec57dc15a79c5653f50
