const body = document.body;
const themeSwitch = body.querySelector('.theme-switch');
const themeToggle = themeSwitch.getElementsByTagName('i')[0];
const themes = themeSwitch.querySelectorAll('ul li');


themes.forEach(theme =>{
    theme.addEventListener('click', ()=>{
        theme.classList.contains('dark') ? body.setAttribute('class','bg-dark') :
        theme.classList.contains('sakura') ? body.setAttribute('class','bg-sakura') :
        theme.classList.contains('green') ? body.setAttribute('class', 'bg-green') :
            body.removeAttribute('class');
    });
});

themeToggle.addEventListener('click',()=>{
    themeSwitch.classList.toggle('active');
});