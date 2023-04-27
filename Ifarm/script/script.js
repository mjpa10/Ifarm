const wrapper = document.querySelector('.wrapper');
const Loginlink = document.querySelector('.login-link');
const Registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');


Registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

Loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

btnpopup.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');
});




