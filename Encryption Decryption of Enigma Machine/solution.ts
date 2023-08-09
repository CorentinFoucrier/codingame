const operation: string = readline(); // Line 1
const startingAt: number = parseInt(readline()); // Line 2
const rotors: string[][] = [];
for (let i = 0; i < 3; i++) {
    rotors.push(readline().split("")); // Line 3-5
}
const message: string[] = readline().split(""); // Line 6
const abc: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

if (operation === "ENCODE") {
    const send: string = message
        // Caesar shift
        .map<string>((v, i) => {
            let abcI: number = abc.indexOf(v) + startingAt + i;
            while(abcI > 0) {
                if (abcI <= 25) break;
                abcI = abcI - 25 - 1;
            }
            return abc[abcI];
        })
        // Rotors
        .map(v => rotors[0][abc.indexOf(v)])
        .map(v => rotors[1][abc.indexOf(v)])
        .map(v => rotors[2][abc.indexOf(v)])
        .join("");
    console.log(send);
} else {
    const send: string = message
        // Reverse rotors
        .map(v => abc[rotors[2].indexOf(v)])
        .map(v => abc[rotors[1].indexOf(v)])
        .map(v => abc[rotors[0].indexOf(v)])
        // Reverse caesar shift
        .map<string>((v, i) => {
            let abcI: number = Math.abs(abc.indexOf(v)) - startingAt - i;
            while(abcI < 0) {
                if (abcI >= 25) break;
                abcI = abcI + 25 + 1;
            }
            return abc[abcI];
        })
        .join("");
    console.log(send);
}
