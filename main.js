//String (textos)
//Number (número)
//Boolean (true | false)

window.addEventListener('scroll', onScroll);

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
   
   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(services)
   activateMenuAtCurrentSection(about)
   activateMenuAtCurrentSection(contact)
   //activateMenuAtCurrentSection(services)
 }
 
 function activateMenuAtCurrentSection(section) {
     //linha alvo
     const targetLine = scrollY + innerHeight / 2
     
     //verificar se a sessão passou da linha
     //quais dados vou precisar ?
     
     //topo da seção
     const sectionTop = section.offsetTop
     //altura da seção
     const sectionHeight = section.offsetHeight
     
     //o topo da seção chegou ou ultrapassou a linha alvo
     const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

     //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar
    
    //a seção termina onde?
     const sectionEndAt = sectionTop + sectionHeight
     
     //o final da seção passou da linha alvo
     const sectionEndPassedTargetline = sectionEndAt <= targetLine

//Limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

const sectionId = section.getAttribute('id')
const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

menuElement.classList.remove('active')
if(sectionBoundaries) {
    menuElement.classList.add('active')
}
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 function showNavOnScroll() {
     if(scrollY > 0) {
        navigation.classList.add('scroll');
    }else {
        navigation.classList.remove('scroll');
    }
 }
 
 function showBackToTopButtonOnScroll() {
   if(scrollY > 1300) {
        backToTopButton.classList.add('show');
    }else {
        backToTopButton.classList.remove('show');
    }
     
 }
 
 function openMenu() {
     document.body.classList.add('menu-expanded');
 }

function closeMenu() {
     document.body.classList.remove('menu-expanded');
    
}


ScrollReveal({
    origin: 'bottom', 
    distance: '30px',
    duration: 700, 
}).reveal('#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content');











