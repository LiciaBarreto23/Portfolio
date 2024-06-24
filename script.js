let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll',()=>{
  console.log('oi')
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTo;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute('id')
    
    if((top >= offset) && (top < offset + heightSection)){
      links.forEach(link => {
        link.classList.remove('ativo')

        document.querySelector(`nav span a[href*="${idSection}"]`).classList.add('ativo')
      })
    }
    
  })
})
