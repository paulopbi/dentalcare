const btnMobile = document.querySelector('.nav-toggle__btn')

function toggleMenu() {
    const nav = document.querySelector('.nav-menu')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)