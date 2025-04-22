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

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red} ${green} ${blue})`;
}

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
            if (div.style.backgroundColor == '') {
                div.style.backgroundColor = generateRandomColor();
                div.style.opacity = 0.1;
            } else {
                if (div.style.opacity < 1.0)
                div.style.opacity = parseFloat(div.style.opacity) + 0.1;
            }
        });
    
        container.appendChild(div);
    }
}

function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}


