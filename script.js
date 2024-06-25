let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll',()=>{
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 50;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute('id')
    
    if((top >= offset) && (top < offset + heightSection)){
      links.forEach(link => {
        link.classList.remove('ativo')

        document.querySelector(`nav a[href*="${idSection}"]`).classList.add('ativo')
      })
    }
    
  })
})


function scrollSection(event){
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  let topSection = section.offsetTop;

  window.scrollTo({
    top: topSection,
    behavior: "smooth"
  })
}

links.forEach(link => {
  link.addEventListener('click', scrollSection)
})