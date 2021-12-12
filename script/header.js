let menuIcon = document.getElementById('menu-icon')
let menuMobile = document.getElementById('menu-mobile')

menuIcon.addEventListener('click', (e) => {
    menuMobile.classList.toggle('show-menu')
})

document.body.addEventListener('click', (e) => {
    if (e.target != menuMobile && e.target != menuIcon) {
        menuMobile.classList.remove('show-menu')
    }
})