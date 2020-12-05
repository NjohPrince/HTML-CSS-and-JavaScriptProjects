const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 0
let newWidth = 0

next.addEventListener('click', () => {
    currentActive++;
    newWidth += 33;
    progress.style.width = newWidth + "%";
    circles[currentActive].classList.add('active')
    
})