const container = document.querySelector(".container")
const paint = document.querySelector(".Paint")
const eraser = document.querySelector(".Eraser")

let togglerValue = 0

for(let i = 0; i < 16; i++){
    const div = document.createElement('div')
    div.className = "box"
    container.append(div)
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

boxes.forEach(box => {
    box.addEventListener("mouseover", draw);
});

paint.addEventListener("click",() => togglerValue = 0)
eraser.addEventListener("click",() => togglerValue = 1)




