const hamBurger = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')


function toggleButton() {
    navList.classList.toggle('show')
}

hamBurger.addEventListener('click', toggleButton)