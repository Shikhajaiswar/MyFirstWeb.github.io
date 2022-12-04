burgur = document.querySelector('.burgur');
navbar = document.querySelector('.navbar');
nav_bar = document.querySelector('.nav-bar');

burgur.addEventListener('click',()=>{
    
    nav_bar.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

});



