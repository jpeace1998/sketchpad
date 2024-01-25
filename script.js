const GRIDSIDE = 600;

const sketchArea = document.querySelector("#grid-container");
sketchArea.classList.add('sketchArea');
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor()
{
    this.style.backgroundColor = "black";
}


// Don't forget to add squaresPerSide as an argument when you come back
function createGridCells(squaresPerSide)
{   
    const numOfSquares = (squaresPerSide * squaresPerSide);
    widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;
    for (let i = 0; i < (numOfSquares); i++)
    {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);
    }
}

function clearGrid() 
{
    while (sketchArea.firstChild)
    {
        sketchArea.removeChild(sketchArea.lastChild);
    }
};

const buttonContainer = document.querySelector("#button-container");
const button = document.createElement("button");
button.innerText = "Change Size";
button.classList.add("button");
buttonContainer.appendChild(button);

button.addEventListener("click", () => 
{
    let newSquares = prompt("Please enter the number of squares you would like the grid to be on one side.");
    if (newSquares >= 100)
    {
        alert("Error. Please use a number under 100.");
    } else
    {
        clearGrid();
        createGridCells(newSquares);
    }

    
});


createGridCells(16);

