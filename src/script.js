const container = document.querySelector(".container")
const paint = document.querySelector(".Paint")
const eraser = document.querySelector(".Eraser")
const reset = document.querySelector(".Reset")

let dimension = 4
let togglerValue = 0

drawGrid()  //for initial grid

function drawGrid(){
    let boxesNumber = dimension * dimension
    for(let i = 0; i < boxesNumber; i++){
        const div = document.createElement('div')
        div.className = "box"
        container.append(div)
    }
}

const boxes = document.querySelectorAll(".box")

function draw(e){
    if(togglerValue == 0){
        e.target.style.backgroundColor = random_rgba()
    }

    else if(togglerValue == 1){
        e.target.style.backgroundColor = "white"
    }

}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function generateGrid(){
    dimension = prompt("The Square grid length should?")
    drawGrid()
}

function resetGrid(){
    removeGrid()
    generateGrid()
}

boxes.forEach(box => {
    box.addEventListener("mouseover", draw);
});

paint.addEventListener("click",() => togglerValue = 0)
eraser.addEventListener("click",() => togglerValue = 1)
reset.addEventListener("click",resetGrid)





