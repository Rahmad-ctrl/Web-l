export function nav(){
  let menu = document.querySelector('.nav-menu');
  let menuIcon = document.querySelector('i');
  let navBtn = document.getElementById('navBtn');
  window.navBtn = function (){
    menu.classList.toggle('menuOn');
    if (menu.classList.contains('menuOn')) {
    menuIcon.classList.replace('fa-bars','fa-xmark');
    menuIcon.style.transform = 'rotate(180deg) scale(1.1)'
  } else {
    menuIcon.classList.replace('fa-xmark','fa-bars');
    menuIcon.style.transform = 'rotate(0deg) scale(1)';
    };
  };
    window.ke = function (target){
      if (typeof target === 'string') {
        let element = document.querySelector(target);
        if (target) {
          element.scrollIntoView({
            behavior: 'smooth',
            block : 'start'
          })
        }
      }
      tutup()
    };
    window.tutup = function (){
      menu.classList.remove('menuOn')
      menuIcon.classList.replace('fa-xmark','fa-bars');
      menuIcon.style.transform = 'rotate(0deg)'
    }
    window.darkOn = function (){
      let body = document.querySelector('body');
      let iconDrk = document.getElementById('iconDrk');
      body.classList.toggle('darkOn');
      if (body.classList.contains('darkOn')) {
        iconDrk.classList.replace('fa-moon','fa-sun');
        iconDrk.style.transform = 'rotate(360deg)'
      } else {
        iconDrk.classList.replace('fa-sun','fa-moon');
        iconDrk.style.transform = 'rotate(0deg)'
      }
      
    }
};