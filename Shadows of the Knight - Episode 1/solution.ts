var inputs: string[] = readline().split(' ')
let maxX: number = parseInt(inputs[0]) // width of the building.
let maxY: number = parseInt(inputs[1]) // height of the building.
const N: number = parseInt(readline()) // maximum number of turns before game over.
var inputs: string[] = readline().split(' ')
let currentX: number = parseInt(inputs[0])
let currentY: number = parseInt(inputs[1])

// cf Les bâtiments sont représentés par des rectangles de fenêtres, la fenêtre en haut à gauche a pour position (0,0)
// donc les miniums ici sont de 0
let minX: number = 0
let minY: number = 0

// game loop
while (true) {
    const bombDir: string = readline() // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    console.error("maxX : " + maxX)
    console.error("maxY : " + maxY)
    console.error("minX : " + minX)
    console.error("minY : " + minY)
    console.error("currentX : " + currentX)
    console.error("currentY : " + currentY)
    console.error("bombDir : " + bombDir)

    // modification de la zone de recherche
    if (bombDir.includes('U')) {
        // La bombe est au dessus alors H (hauteur max) prends la valeur de la position Y actuel de batman
        // puisque toutes les cases en dessous de lui ne servent à rien car la bombe ne si trouve pas
        maxY = currentY
    }
    if (bombDir.includes('D')) {
        // Sinon la bombe et en dessous alors le minimum de la zone de recherche va prendre la pos X actuel de batman
        // car la encore les cases au dessus de lui sont inutile car pas de bombe
        minY = currentY
    }
    if (bombDir.includes('R')) {
        // Pareil dans le cas de R toute les cases a gauche à partir de la pos actuel sont inutile
        // donc le minimum est initialisé avec la pos actuel de batman
        minX = currentX
    }
    if (bombDir.includes('L')) {
        maxX = currentX
    }

    // Set up de la nouvelle position de batman en prenant le milieu du min et du max
    //    arrondir   min + max  / 2
    currentX = Math.floor((minX + maxX) / 2)
    currentY = Math.floor((minY + maxY) / 2)

    console.log('%d %d', currentX, currentY)
}
