const navIcon = document.querySelector('.nav-icon')
navIcon.addEventListener('click', toggleNav)

console.log(innerWidth)

function toggleNav(){
    const barOne = document.querySelector('.bar-one')
    const barTwo = document.querySelector('.bar-two')
    const barThree = document.querySelector('.bar-three')
    const navUl = document.querySelector('.nav-ul')
    const heroSection = document.querySelector('.hero-section')
    barOne.classList.toggle('nav-toggle-one')
    barThree.classList.toggle('nav-toggle-two')
    barTwo.classList.toggle('nav-toggle-three')
    navUl.classList.toggle('nav-toggle')
    //heroSection.classList.toggle('hero-background-toggle')
}