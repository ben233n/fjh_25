let article_2_img_1=document.getElementById('article_2_img_1');
let article_2_img_2=document.getElementById('article_2_img_2');
let article_2_img_3=document.getElementById('article_2_img_3');


const bang_img_1=["./img/阿尼亞.png","./img/有馬加奈.png"];
let timer=0;


setInterval(function(){
    article_2_img_3.classList.toggle("active");
    article_2_img_3.style.transition="all 1s";
    timer = (timer+1)%bang_img_1.length;
    article_2_img_3.src=bang_img_1[timer];
    article_2_img_3.classList.toggle("active");
    article_2_img_3.style.transition="all 1s";



},1000);



