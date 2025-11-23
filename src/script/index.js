export function nav(){
  window.navBtn = function (){
    let menu = document.querySelector('.nav-menu');
    let menuIcon = document.querySelector('i');
    let navBtn = document.getElementById('navBtn')
    menu.classList.toggle('menuOn');
    if (menu.classList.contains('menuOn')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
      menuIcon.style.transform ='rotate(360deg) scale(1.1)'
    } else {
      menuIcon.classList.add('fa-bars');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.style.transform ='rotate(0deg) scale(1)';
    };
    setTimeout(() => {
      menuIcon.style.transform =' '
    },500);
  }
};