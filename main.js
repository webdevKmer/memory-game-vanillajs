const faces = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];
const tiles = [ ...faces, ...faces]
let mixedTiles = []

function revealTile() {
    console.log('hello');
}

let arrToSlice = [...tiles]

for (let i = 0; i < tiles.length; i++) {
    const elt = arrToSlice.splice(Math.floor(Math.random()*arrToSlice.length), 1);
    mixedTiles.push(elt[0])
}

console.log(mixedTiles);

let gameGridElt = document.querySelector('.tiles')
let tilesHTML = mixedTiles.map((elt) => {
    return `
    <div class="tile grey" data-color=${elt}></div>
    `
}).join('')

gameGridElt.innerHTML = tilesHTML
let gameTiles = document.querySelectorAll('.tile')
Array.from(gameTiles).map(elt => {
    elt.addEventListener('click', () => {
        elt.classList.add(elt.dataset.color)
    })
})