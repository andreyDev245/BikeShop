
// counter product
let pageCounterMinus = document.querySelector('.page_card_counter_minus');
let pageCounterPlus = document.querySelector('.page_card_counter_plus');
let pageCardCounter = document.querySelector('.page_card_counter_num');
let cardCounterNum = 0;

pageCounterPlus.addEventListener('click', function(){
    pageCardCounter.textContent = cardCounterNum += 1;
});

pageCounterMinus.addEventListener('click', function minus(){
    if (pageCardCounter.innerHTML > 0) {
        pageCardCounter.textContent = cardCounterNum -= 1;
    }  
});

// galery card

let bigImg = document.querySelector('.page_card_galery_img > img');
let btnImg = document.querySelectorAll('.page_card_galery_btn > img');

let galeryFun = function(picture, btn){
    btn.addEventListener('click', function(){
        bigImg.src = picture;
    });
};

for (let i = 0; i <= btnImg.length -1; i++) {
    let image = btnImg[i];
    galeryFun(image.src, btnImg[i]);
}
