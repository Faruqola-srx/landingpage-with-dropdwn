const iconMenu=document.querySelector('.icon-menu')
const twoNav=document.querySelector('.two-nav');
function MenuIconDisplay() {
    twoNav.classList.toggle('active');
}

iconMenu.addEventListener('click',MenuIconDisplay);