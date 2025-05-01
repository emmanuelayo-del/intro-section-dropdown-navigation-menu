const iconMenuOpen = document.querySelector('.icon-menu-open')

const iconMenuClose = document.querySelector('.icon-menu-close')

const mobileNavEl = document.querySelector('.mobile-navigation-bar')

const overLay = document.querySelector('.overlay')

const mainNavLink = document.querySelector('.main-nav-link')

const iconArrowDown = document.querySelector('.icon-arrow-down')

const iconArrowUp = document.querySelector('.icon-arrow-up')

const arrowUp1 = document.querySelector('.arrow-up-1')

const mainNavLink2 = document.querySelector('.main-nav-link-2')

const arrowUp2 = document.querySelector('.arrow-up-2')

const iconArrowDown2 = document.querySelector('.icon-arrow-down-2')

const iconArrowUp2 = document.querySelector('.icon-arrow-up-2')

const anMainNavLink = document.querySelector('.an-main-nav-link')

const arrowUp3 = document.querySelector('.arrow-up-3')

const iconArrowDown3 = document.querySelector('.icon-arrow-down-3')

const iconArrowUp3 = document.querySelector('.icon-arrow-up-3')

const anMainNavLink4 = document.querySelector('.an-main-nav-link-4')

const iconArrowDown4 = document.querySelector('.icon-arrow-down-4')

const iconArrowUp4 = document.querySelector('.icon-arrow-up-4')

const arrowUp4 = document.querySelector('.arrow-up-4')


iconMenuOpen.addEventListener('click', ()=> {
    mobileNavEl.classList.remove('hidden')
    overLay.classList.remove('hidden')
    iconMenuOpen.classList.add('hidden')
})

iconMenuClose.addEventListener('click', ()=> {
    mobileNavEl.classList.add('hidden')
    overLay.classList.add('hidden')
    iconMenuOpen.classList.remove('hidden')
})

mainNavLink.addEventListener('click', ()=> {
    iconArrowDown.classList.toggle('hidden')
    arrowUp1.classList.toggle('hidden')
    iconArrowUp.classList.toggle('hidden')
})

mainNavLink2.addEventListener('click', ()=> {
    iconArrowDown2.classList.toggle('hidden')
    arrowUp2.classList.toggle('hidden')
    iconArrowUp2.classList.toggle('hidden')
})

anMainNavLink.addEventListener('click', ()=> {
    iconArrowDown3.classList.toggle('hidden')
    arrowUp3.classList.toggle('hidden')
    iconArrowUp3.classList.toggle('hidden')
})

anMainNavLink4.addEventListener('click', ()=> {
    iconArrowDown4.classList.toggle('hidden')
   arrowUp4.classList.toggle('hidden')
   iconArrowUp4.classList.toggle('hidden') 
})
