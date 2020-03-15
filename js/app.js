hamburger.onclick = hamburgerClick;
function hamburgerClick() {
    menuList.classList.toggle('is-active');
    line1.classList.toggle('change1');
    line2.classList.toggle('change2');
    line3.classList.toggle('change3');
}
let menuHeight;
let navOff;

window.onscroll = fixedNav;
function fixedNav(){
    if(menu.offsetTop != 0){
        navOff = menu.offsetTop;
    }
    menuHeight = menu.offsetHeight;
    if(pageYOffset >= navOff){
        menu.classList.add('menuFixed');
        air.style.height = menuHeight + 'px';
    } else {
        menu.classList.remove('menuFixed');
        air.style.height = 0;
    }
}

fb.addEventListener('touchstart', function () {
    fb.classList.add('fbHover');
});
fb.addEventListener('touchend', function () {
    fb.classList.remove('fbHover');
});
insta.addEventListener('touchstart', function () {
    insta.classList.add('inHover');
});
insta.addEventListener('touchend', function () {
    insta.classList.remove('inHover');
});
yt.addEventListener('touchstart', function () {
    yt.classList.add('ytHover');
});
yt.addEventListener('touchend', function () {
    yt.classList.remove('ytHover');
});

