const GRID_SIZE = 960;

const container = document.querySelector('#container');
const button = document.querySelector('#newGridButton');

generateGrid(16);

button.addEventListener('click', () => {
    let newGridCellsPerSide = parseInt(prompt('Quante celle per lato vuoi che sia la tua griglia? (Massimo 100)'));
    while (newGridCellsPerSide > 100) {
        newGridCellsPerSide = parseInt(prompt('Hai inserito un valore maggiore di 100, riprova'));
    }
    deleteGrid();
    generateGrid(newGridCellsPerSide);
})

//-----------------------------------------------------------//

function generateGrid(cellsPerSide) {
    const totalCells = cellsPerSide * cellsPerSide;
    const cellSize = (GRID_SIZE / cellsPerSide) - 2;

    for (let i = 0; i < totalCells; i++) {
        const div = document.createElement('div');
        div.setAttribute('style', `
            width: ${cellSize}px;
            height: ${cellSize}px;
            border: 1px solid gray;
            `
        );
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        });
    
        container.appendChild(div);
    }
}

function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}




