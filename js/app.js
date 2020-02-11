moveToPage.onclick = mainPage; 

function mainPage(){
    coverImage.classList.toggle('move');
    setTimeout(displayNone, 1000);
}

function displayNone(){
    coverImage.style.display = 'none';
}

