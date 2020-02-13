moveToPage.onclick = mainPage;
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
    container.classList.toggle('showContainer');
    let cialo = document.querySelector('body');
    cialo.style.overflow = "auto";
    let html = document.querySelector('html');
    html.style.overflow = "auto";
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

