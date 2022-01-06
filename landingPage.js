let menu = document.querySelector('.icon-menu');
let navbar =  document.querySelector('.navbar');
let content = document.querySelector('.content');

    menu.onclick = function(){
        navbar.classList.toggle('ativo')
        content.classList.toggle('ativo')
    }