const iconMenuOpen = document.querySelector('.icon-menu-open')
console.log(iconMenuOpen);
const iconMenuClose = document.querySelector('.icon-menu-close')
console.log(iconMenuClose);
const mobileNavEl = document.querySelector('.mobile-navigation-bar')
console.log(mobileNavEl);
const overLay = document.querySelector('.overlay')
console.log(overLay);
const iconArrowDown = document.querySelector('.icon-arrow-down')
console.log(iconArrowDown);
const iconArrowUp = document.querySelector('.icon-arrow-up')
console.log(iconArrowUp);
const arrowUp1 = document.querySelector('.arrow-up-1')
console.log(arrowUp1);
const arrowUp2 = document.querySelector('.arrow-up-2')
console.log(arrowUp2);
const iconArrowDown2 = document.querySelector('.icon-arrow-down-2')
console.log(iconArrowDown2);
const iconArrowUp2 = document.querySelector('.icon-arrow-up-2')
console.log(iconArrowUp2);
const iconArrowDown3 = document.querySelector('.icon-arrow-down-3')
console.log(iconArrowDown3);
const iconArrowUp3 = document.querySelector('.icon-arrow-up-3')
console.log(iconArrowUp3);
const arrowUp3 = document.querySelector('.arrow-up-3')
console.log(arrowUp3);
const iconArrowDown4 = document.querySelector('.icon-arrow-down-4')
console.log(iconArrowDown4);
const iconArrowUp4 = document.querySelector('.icon-arrow-up-4')
console.log(iconArrowUp4);
const arrowUp4 = document.querySelector('.arrow-up-4')
console.log(arrowUp4);

iconMenuOpen.addEventListener('click', ()=> {
    mobileNavEl.classList.remove('hidden')
    overLay.classList.remove('hidden')
})

iconMenuClose.addEventListener('click', ()=> {
    mobileNavEl.classList.add('hidden')
    overLay.classList.add('hidden')
})

iconArrowDown.addEventListener('click', ()=> {
    arrowUp1.classList.remove('hidden')
    // arrowUp2.classList.remove('hidden')
    iconArrowUp.classList.remove('hidden')
    iconArrowDown.classList.add('hidden')
})

iconArrowUp.addEventListener('click', ()=> {
    arrowUp1.classList.add('hidden')
    // arrowUp2.classList.add('hidden')
    iconArrowDown.classList.remove('hidden')
    iconArrowUp.classList.add('hidden')
})

iconArrowDown2.addEventListener('click', ()=> {
    arrowUp2.classList.remove('hidden')
    iconArrowUp2.classList.remove('hidden')
    iconArrowDown2.classList.add('hidden')
})

iconArrowUp2.addEventListener('click', ()=> {
    arrowUp2.classList.add('hidden')
    iconArrowUp2.classList.add('hidden')
    iconArrowDown2.classList.remove('hidden')
})

iconArrowDown3.addEventListener('click', ()=> {
    arrowUp3.classList.remove('hidden')
    iconArrowUp3.classList.remove('hidden')
    iconArrowDown3.classList.add('hidden')
})

iconArrowUp3.addEventListener('click', ()=> {
    arrowUp3.classList.add('hidden')
    iconArrowUp3.classList.add('hidden')
    iconArrowDown3.classList.remove('hidden')
})

iconArrowDown4.addEventListener('click', ()=> {
    arrowUp4.classList.remove('hidden')
    iconArrowUp4.classList.remove('hidden')
    iconArrowDown4.classList.add('hidden')
})

iconArrowUp4.addEventListener('click', ()=> {
    arrowUp4.classList.add('hidden')
    iconArrowUp4.classList.add('hidden')
    iconArrowDown4.classList.remove('hidden')
})
