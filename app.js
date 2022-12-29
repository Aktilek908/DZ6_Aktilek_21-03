const icrement = document.querySelector('.icrement')
const decrement = document.querySelector('.decrement')
const input = document.querySelector('input')

function icrementNumber (){
    input.value++
}

function decrementNumber (){
    input.value--
}

icrement.addEventListener('click', icrementNumber)
decrement.addEventListener('click', decrementNumber)
