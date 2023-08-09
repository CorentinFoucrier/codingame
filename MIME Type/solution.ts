const N: number = parseInt(readline())
const Q: number = parseInt(readline())
const EXT = []
const MT = []
for (let i = 0; i < N; i++) {
    const inputs: string[] = readline().split(' ')
    EXT.push(inputs[0].toUpperCase())
    MT.push(inputs[1])
}
const files: string[] = []
for (let i = 0; i < Q; i++) {
    const FNAME: string = readline()
    files.push(FNAME)
}

files.map(f => {
    if (!/(.+)?\.[a-zA-Z0-9]+$/.test(f)) {
        console.log('UNKNOWN')
        return
    }
    const i: number = EXT.indexOf(f.split('.').slice(-1)[0].toUpperCase())
    if (i < 0) {
        console.log('UNKNOWN')
        return
    }
    console.log(MT[i])
})
