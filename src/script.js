const box = document.querySelectorAll(".box")
const container = document.querySelector(".container")

for(let i = 0; i < 16; i++){
    const div = document.createElement('div')
    div.className = "box"
    container.append(div)
}

function draw(e){
    e.target.style.backgroundColor = random_rgba()
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

container.addEventListener("click",draw(e))


