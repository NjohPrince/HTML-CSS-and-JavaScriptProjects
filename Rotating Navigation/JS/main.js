const open = document.getElementById('open')
const content = document.getElementById('content')
const nav = document.getElementById('nav')
const close = document.getElementById('close')

close.style.display = 'none';
open.addEventListener('click', () => {
    content.classList.add('content-rotate');
    nav.classList.add('nav-rotate');
    open.style.display = 'none'
    close.style.display = 'block';
})