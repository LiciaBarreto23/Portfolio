let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll',()=>{
  sections.forEach(section => {
    var top = window.scrollY;
    let offset = section.offsetTop - 50;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute('id')
    
    console.log(top)
    if((top >= offset) && (top < offset + heightSection)){
      links.forEach(link => {
        link.classList.remove('ativo')

         document.querySelector(`nav a[href*="${idSection}"]`).classList.add('ativo');
         let hrefatual = document.querySelector(`nav a[href*="${idSection}"]`).getAttribute('href');
         //console.log(hrefatual)
      })
    }
    if(top == 0){
      resetaranimation();
    }
  })
})

function resetaranimation(){
  let home = document.querySelector('#typewriter');
  console.log(home)
  home.style = "animation: none"

  requestAnimationFrame(() => {
    home.style = "animation: typing 2.5s steps(15),    blink-caret .4s step-end infinite alternate;"
  })
}

function scrollSection(event){
  event.preventDefault();

  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  let topSection = section.offsetTop;

  if(href=='#home'){
    resetaranimation();
  }

  window.scrollTo({
    top: topSection,
    behavior: "smooth"
  })
}

links.forEach(link => {
  link.addEventListener('click', scrollSection)
})

