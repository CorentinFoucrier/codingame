// Write an answer using console.log()
// To debug: console.error('Debug messages...')

const streamOfConsciousness: string = readline()
const bustThreshold: number = parseInt(readline())

// ---
type CardDetails = {
    nb: number // Combien il y a de cartes
    value: number // Combien vaut cette carte Ex. A = 1
}
type Cards = {
    [card: string]: CardDetails,
}
const cards: Cards = {}
'A23456789TJQK'.split('').forEach((cardName, i) => cards[cardName] = { nb: 4, value: i + 1})

// Traitement de flux de conscience
const regex = new RegExp('^[23456789TJQKA]+', '') // Suite possible
streamOfConsciousness.split('.').forEach((thought) => {
    const match: string[] | null = thought.match(regex)
    if (match && match[0].length === thought.length) {
        thought.split('').forEach(cardName => cards[cardName].nb--) // Décrementer les cartes qui ont été piochées du paquet
    }
})

// Contage des cartes qui sont en dessous du `bustThreshold`
// Et du total de cartes restantes
let totalOfCardsUnderBustThreshold: number = 0
let totalOfCardsLeft: number = 0
Object.values(cards).forEach((card: CardDetails) => {
    if (card.value < bustThreshold) {
        totalOfCardsUnderBustThreshold += card.nb
    }
    totalOfCardsLeft += card.nb
})

// Réponse :
console.log(Math.round(totalOfCardsUnderBustThreshold / totalOfCardsLeft * 100) + '%')
