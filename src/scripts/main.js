const burgerBtn = document.querySelector('.burger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('DOMContentLoaded', () => {

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('tool');

    burgerBtn.classList.contains('tool')
    ? (document.querySelector('.tool-1').style.transform = "translateY(12px)",
    document.querySelector('.tool-1').style.transform = "rotate(135deg)",
    
    document.querySelector('.tool-2').style.transform = "translateY(-12px)",
    document.querySelector('.tool-2').style.transform = "rotate(-135deg)",
    
    document.querySelector('.tool-3').style.transform = "scale(0)",
    mobileMenu.style.display = 'block',
    document.querySelector('.mobile-menu__nav').style.display = 'block')

    
    : (document.querySelector('.tool-1').style.transform = "translateY(0px)",
    document.querySelector('.tool-1').style.transform = "rotate(0deg)",
    
    document.querySelector('.tool-2').style.transform = "translateY(0px)",
    document.querySelector('.tool-2').style.transform = "rotate(0deg)",
    
    document.querySelector('.tool-3').style.transform = "scale(1)",
    mobileMenu.style.display = 'none',
    document.querySelector('.mobile-menu__nav').style.display = 'none');
    
    
    
  })


})