const button_1 = document.querySelector(".button_1")
const button_2 = document.querySelector(".button_2")
const container = document.querySelector(".container")
const container_2 = document.querySelector(".container_2")
const container_3 = document.querySelector(".container_3")
const anus = document.getElementById("ball");
const body = document.getElementById('body');  
const score = document.querySelector('.score');
let counter = 0;


button_1.addEventListener('click',() => {
    container.classList.add('high')
    setTimeout(() => {
        container_2.classList.remove('none')

    },1000)
})

button_2.addEventListener('click',() => {
    container.classList.add('high')
    setTimeout(() => {
        container_3.classList.remove('none')

    },1000)
})

anus.addEventListener('mouseenter', () => {
    let top = randomPosition();
    let left = randomPosition();

    setTimeout(() => {
        anus.style.top = `${top}px`;
    anus.style.left = `${left}px`;
    }, 100)
})

function randomPosition () {
    let random = Math.round(Math.random() * 700)  
    return random
}

anus.addEventListener('click', () => {
    body.style.backgroundColor = 'red';
    setTimeout(() => {
        body.style.backgroundColor = 'black'
    }, 100)
    counter++
    score.textContent = counter;
})
