// 作品展示，點圖片，展開圖片
var yuna=document.getElementById("yuna");
var hamburger=document.getElementById("hamburger");
var capybara=document.getElementById("capybara");
var cake=document.getElementById("cake");
var uq=document.getElementById("uq"); //沅錡
var forehead=document.getElementById("forehead"); //額頭
var hakari=document.getElementById("hakari");
var anya3d=document.getElementById("anya3d");
var kana3d=document.getElementById("kana3d");
var loma3d=document.getElementById("loma3d");
var yuyuko3d=document.getElementById("yuyuko3d");

// 選單按鈕
var menu=document.getElementById("menu");
var header_ul=document.getElementById("header_ul");

// 引入幻燈片
var slideshow = document.getElementById("slideshow");
var img_bg = document.getElementById("img_bg");
var chacha=document.getElementById("chacha");//叉叉

yuna.addEventListener("click",function(){
    slideshow.src="./img/申有娜點開.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };

    img_bg.style.display= "block";
    chacha.style.display= "block";
});

hamburger.addEventListener("click",function(){
    slideshow.src="./img/漢堡.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});
capybara.addEventListener("click",function(){
    slideshow.src="./img/水豚.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});
cake.addEventListener("click",function(){
    slideshow.src="./img/蛋糕.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});
uq.addEventListener("click",function(){
    slideshow.src="./img/沅錡.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});
forehead.addEventListener("click",function(){
    slideshow.src="./img/額頭.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});
hakari.addEventListener("click",function(){
    slideshow.src="./img/花園點開.jpg";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});


anya3d.addEventListener("click",function(){
    slideshow.src="./img/阿尼亞.gif";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});

kana3d.addEventListener("click",function(){
    slideshow.src="./img/有馬加奈.gif";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});

loma3d.addEventListener("click",function(){
    slideshow.src="./img/羅馬城.gif";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});

yuyuko3d.addEventListener("click",function(){
    slideshow.src="./img/西行寺幽幽子.gif";
    slideshow.onload=function(){
        slideshow.style.opacity = 1;
    };
    img_bg.style.display= "block";
    chacha.style.display= "block";
});



// 叉叉被點擊
chacha.addEventListener("click",function(){
    slideshow.style.opacity = 0;
    img_bg.style.display= "none";
    chacha.style.display= "none";
});


// 點擊選單
menu.addEventListener("click",function(){
    header_ul.classList.toggle("show");
}
);


//偵測黑底被點擊，然後把照片關掉
img_bg.addEventListener("click",function(){
    slideshow.style.opacity = 0;
    img_bg.style.display= "none";
    chacha.style.display= "none";
});
