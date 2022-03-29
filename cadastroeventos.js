var nome = 'Tiago'
var hoje = new Date()
var datadoevento = '2023-01-01'
var dataeventopadrao = new Date(datadoevento)
var idade = 18
const lista = ['João', 'Maria', 'André', 'Pedro', 'Francisca']

console.log('Data do evento: ' +datadoevento)

if (dataeventopadrao < hoje) {
    console.log('Data não permitida.')
} else console.log('Data permitida.')

if (idade < 18){
    console.log('Idade não permitida.')
    } else {console.log('Idade aceita.')
}

if (lista.length > 100){
    console.log('Sem capacidade para mais participantes.')
} else {console.log('Com capacidade para mais participantes.')
}

lista.push(nome)
console.log('Lista de participantes: ' +lista)