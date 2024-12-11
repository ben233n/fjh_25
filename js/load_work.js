let loading=document.getElementById('loading');
var work=document.getElementsByClassName('work');
var schedule_bg=document.getElementById('schedule_bg');
let body = document.body;


let isPageLoaded = true;
let progress = 0;
const interval = setInterval(() => {
    if (progress < 90 && isPageLoaded) {  // 當加載完成前最大達到90%
        progress += 1;
        schedule_bg.style.width = progress + "%";
    } else {
        clearInterval(interval);
    }
}, 20);



window.onload = function(){
    // body.style.overflow="auto";
    setInterval(function(){
        isPageLoaded = false;
        schedule_bg.style.width="95%";

    },500);

    loading.classList.add("loading_animation");
    setInterval(function(){
        loading.style.display="none";
    },800);

    setInterval(function(){
        work[0].classList.add("appear_left");
    },600);
}



