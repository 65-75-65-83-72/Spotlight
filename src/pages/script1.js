const navItems = document.getElementById('nav-items'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
      
      
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navItems.classList.add('show-items')
  })
 }     


if(navClose){
  navClose.addEventListener('click', () =>{
    navItems.classList.remove('show-menu')
  })
}


const navLink = document.querySelectorAll('nav_link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-items')
  navMenu.classList.remove('show-items')
}
navLink.forEach(n => n.addEventListener('click', linkAction))