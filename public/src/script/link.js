export function link(){
  window.ke = function(target) {
  if (typeof target === 'string') {
    let element = document.querySelector(target);
    if (target) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  tutup()
};

window.kehal = function (ke){
  if (!ke) {
    console.log('maaf')
  }else{
    window.location.href = ke
  }
}
}