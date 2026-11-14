const button=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));
const contactButton = document.querySelector(".reveal-contact");
const contactEmail = document.querySelector(".contact-email");
if (contactButton && contactEmail) {
  contactButton.addEventListener("click", () => {
    const isVisible = !contactEmail.hidden;
    contactEmail.hidden = isVisible;
    contactButton.setAttribute("aria-expanded", String(!isVisible));
    contactButton.innerHTML = isVisible ? 'Contact <span>↗</span>' : 'Email address <span>↗</span>';
  });
}
