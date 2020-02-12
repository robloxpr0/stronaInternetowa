moveToPage.onclick = mainPage;
hamburger.onclick = MobileShow;
function mainPage(){
    coverImage.classList.toggle('move');
    setTimeout(displayNone, 1000);
    setTimeout(showContent, 700);
    moveToPage.disabled = 'true';
}

function displayNone(){
    coverImage.style.display = 'none';
}

function showContent(){
    container.style.display = 'block';
    container.classList.toggle('showContainer');
}

function MobileShow(){
    menuMobile.classList.toggle('is-active');
    line1.classList.toggle('change1');
    line2.classList.toggle('change2');
    line3.classList.toggle('change3');
}