var article_2=document.getElementsByClassName('article_2');
var article_main_down=document.getElementsByClassName('article_main_down');
var article_main_top=document.getElementsByClassName('article_main_top');
let article_2_text=document.getElementsByClassName('article_2_text');
let article_1=document.getElementsByClassName('article_1');
let article_1_p_p=document.getElementsByClassName('article_1_p_p');
let article_1_p=document.getElementsByClassName('article_1_p');

window.addEventListener("scroll",function(){
    Array.from(article_main_top).forEach(function(element_top) {
        if (element_top.getBoundingClientRect().top < window.innerHeight * 0.8) {
            element_top.classList.add("appear");
        } else {
            element_top.classList.remove("appear");
        }
    });
});


window.addEventListener("scroll",function(){
    Array.from(article_main_down).forEach(function(element_down) {
        if (element_down.getBoundingClientRect().top < window.innerHeight * 0.9) {
            element_down.classList.add("appear");
        } else {
            element_down.classList.remove("appear");
        }
    });
});


window.addEventListener("scroll",function() {
    Array.from(article_2).forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
            element.classList.add("appear");
        } else {
            element.classList.remove("appear");
        }
    });
});

window.addEventListener("scroll",function() {
    Array.from(article_2_text).forEach(function(element_text) {
        if (element_text.getBoundingClientRect().top < window.innerHeight * 0.9) {
            element_text.classList.add("appear_left");
        } else {
            element_text.classList.remove("appear_left");
        }
    });
});


window.addEventListener("scroll",function(){
    for(let i = 0; i < article_1.length; i++)
    {
        if (article_1[i].getBoundingClientRect().top < window.innerHeight * 0.9) {
            article_1[i].classList.add("appear_left");
        } else {
            article_1[i].classList.remove("appear_left");
        }

    }
});

window.addEventListener("scroll",function() {
    Array.from(article_1_p).forEach(function(element_text) {
        if (element_text.getBoundingClientRect().top < window.innerHeight * 0.8) {
            element_text.classList.add("appear_left");
        } else {
            element_text.classList.remove("appear_left");
        }
    });
});

window.addEventListener("scroll",function() {
    Array.from(article_1_p_p).forEach(function(element_text) {
        if (element_text.getBoundingClientRect().top < window.innerHeight * 0.85) {
            element_text.classList.add("appear_left");
        } else {
            element_text.classList.remove("appear_left");
        }
    });
});


