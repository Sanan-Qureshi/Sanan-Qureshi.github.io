const body=document.body,button=document.getElementById('themeToggle'),label=document.getElementById('themeText');button.addEventListener('click',()=>{const dark=body.dataset.theme!=='dark';body.dataset.theme=dark?'dark':'light';body.classList.toggle('dark',dark);label.textContent=dark?'DARK':'LIGHT';});
// Highlight the navigation item corresponding to the section currently in view.
const navLinks=[...document.querySelectorAll('.jump a')];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>{
        if(link.getAttribute('href')==='#'+entry.target.id) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    }
  });
},{rootMargin:'-28% 0px -62% 0px'});
document.querySelectorAll('main .section').forEach(section=>sectionObserver.observe(section));

document.querySelectorAll('[data-photo] input').forEach(input=>input.addEventListener('change',e=>{const file=e.target.files&&e.target.files[0];if(!file)return;const box=e.target.closest('[data-photo]'),img=box.querySelector('img');img.src=URL.createObjectURL(file);box.classList.add('has-image');}));
