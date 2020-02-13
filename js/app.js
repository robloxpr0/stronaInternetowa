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

fb.addEventListener('touchstart', function(){
    fb.classList.add('fbHover');
});
fb.addEventListener('touchend', function(){
    fb.classList.remove('fbHover');
});
insta.addEventListener('touchstart', function(){
    insta.classList.add('inHover');
});
insta.addEventListener('touchend', function(){
    insta.classList.remove('inHover');
});
yt.addEventListener('touchstart', function(){
    yt.classList.add('ytHover');
});
yt.addEventListener('touchend', function(){
    yt.classList.remove('ytHover');
});
