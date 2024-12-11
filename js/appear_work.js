var work=document.getElementsByClassName('work');


window.addEventListener("scroll",function(){
    Array.from(work).forEach(function(element_work) {
        if (element_work.getBoundingClientRect().top < window.innerHeight * 0.8 ) {
            element_work.classList.add("appear_left");
        } else {
            element_work.classList.remove("appear_left");
        }
    });
});

