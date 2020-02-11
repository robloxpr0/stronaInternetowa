moveToPage.onclick = mainPage; 

function mainPage(){
    coverImage.classList.toggle('move');
    setTimeout(displayNone, 1000);
    setTimeout(showContent, 700);
}

function displayNone(){
    coverImage.style.display = 'none';
}

function showContent(){
    container.style.display = 'block';
    container.classList.toggle('showContainer');
}
