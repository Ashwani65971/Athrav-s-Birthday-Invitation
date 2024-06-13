// js code for whishing card invitation 
let titlesText = document.querySelector('.front-page-titles');
let frontPage = document.querySelector('.front-page');
let audio = document.querySelector('.happy-birthday-bgm');
let whishingPage = document.querySelector('.whising-page');
let backBtn = document.querySelector('.backbtn-img');
titlesText.addEventListener('click',()=>{
    frontPage.classList.add('active');
    setTimeout(()=>{
        whishingPage.classList.add('active');
    },1500);
    
    setTimeout(()=>{
        if(audio.paused)
            {
                audio.play();
            }
            else
            {
                audio.pause();
            }
    },800);
})

audio.addEventListener('ended',()=>{
    audio.play();
})

backBtn.addEventListener('click',()=>{
    frontPage.classList.remove('active');
    setTimeout(()=>{
        whishingPage.classList.remove('active');
    },1500);
    audio.pause();
})