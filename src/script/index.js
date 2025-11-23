export function nav(){
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.nav-hero button');
  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('menuOn')})
};