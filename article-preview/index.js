const mobileBtn = document.getElementById('mobile');
const desktopBtn = document.getElementById('desktop');

const profil = document.querySelector(".profil");
const media = document.querySelector('.media');

const share = document.querySelector('.share');


mobileBtn.addEventListener('click', () => {
    console.log("Holà")
    if (profil.style.display !== 'none'){
        profil.style.display = 'none';
        media.style.display = 'flex';
        share.style.background = 'var(--title)';

    }else{
        profil.style.display = 'block';
        media.style.display = 'none';
        share.style.background = 'white';
    }
})

desktopBtn.addEventListener('click', () => {
    if(media.style.display === 'inline-flex'){
        media.style.display = 'none';
    }else{
        media.style.display = 'inline-flex'
    }    
})
