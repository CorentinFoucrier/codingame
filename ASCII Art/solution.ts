const L: number = parseInt(readline())
const H: number = parseInt(readline())
const T: string[] = readline().split('').map(v => v.toUpperCase())
const ABC: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const OUTPUT: string[] = []

for (let i = 0; i < H; i++) {
    const ROW: string = readline()
    OUTPUT[i] = ''
    for (let j = 0; j < T.length; j++) {
        const letter: string = T[j]
        const letterI: number = ABC.indexOf(letter) + 1
        if (!ABC.includes(letter)) {
            OUTPUT[i] += ROW.substring(27 * L - L, 27 * L)
        } else {
            OUTPUT[i] += ROW.substring(letterI * L - L, letterI * L)
        }
    }
    console.log(OUTPUT[i])
}
