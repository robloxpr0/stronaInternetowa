hamburger.onclick = mobileShow;
function mobileShow(){
    menuMobile.classList.toggle('is-active');
    line1.classList.toggle('change1');
    line2.classList.toggle('change2');
    line3.classList.toggle('change3');

}
window.onscroll = mojaFunkcja;
let navbar = document.getElementById('menu');
let scroll = navbar.offsetTop;

function mojaFunkcja(){
    if(window.pageYOffset >= scroll){
        navbar.classList.add('scrolled');
        slider.classList.add('margin');
    } else{
        navbar.classList.remove('scrolled');
        slider.classList.remove('margin');
    }
}
fb.ontouchstart = changeFb;
function changeFb(){
    fb.style.backgroundColor = '#4267b2;'
} 

