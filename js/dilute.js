let article_2_img_video =document.getElementById("article_2_img_video");
let triangle_1_L =document.getElementById("triangle_1_L"); //第1個左邊的三角形
let triangle_1_R =document.getElementById("triangle_1_R"); //第1個左邊的三角形


let article_2_img_paint =document.getElementById("article_2_img_paint");
let triangle_2_L =document.getElementById("triangle_2_L"); //第2個左邊的三角形
let triangle_2_R =document.getElementById("triangle_2_R"); //第2個左邊的三角形





let article_2_img_model =document.getElementById("article_2_img_model");
let triangle_3_L =document.getElementById("triangle_3_L"); //第三個左邊的三角形
let triangle_3_R =document.getElementById("triangle_3_R"); //第三個左邊的三角形









// 第三個容器的幻燈片
const model_1=["./img/如果發生火燒厝.jpg","./img/紙籃球.jpg","./img/數學課.jpg","./img/拾荒.jpg"];
let model_a=0;
const model_2=["./img/繪畫作品圖.png","./img/沅錡寬.png"];
let model_b=0;
const model_3=["./img/阿尼亞.gif","./img/有馬加奈.gif","./img/羅馬城.gif"];
let model_c=0;

const transitionTime = 500;
// 下面是第一個容器的三角形
triangle_1_L.addEventListener("click",function(){
    if(model_a< model_1.length-1)
    {
        model_a=model_a+1;
    }
    else
    {
        model_a=0;
    }
    article_2_img_video.style.opacity=0;
    setTimeout(() => {
        article_2_img_video.src = model_1[model_a];
    }, transitionTime);
    article_2_img_video.onload=function(){
        article_2_img_video.style.opacity = 1;
    };

});



triangle_1_R.addEventListener("click",function(){
    if(model_a> 0)
    {
        model_a=model_a-1;
    }
    else
    {
        model_a=model_1.length-1;
    }
    article_2_img_video.style.opacity=0;
    setTimeout(() => {
        article_2_img_video.src = model_1[model_a];
    }, transitionTime);
    article_2_img_video.onload=function(){
        article_2_img_video.style.opacity = 1;
    };
});


// 下面是第三個容器的二角形
triangle_2_L.addEventListener("click",function(){
    if(model_b< model_2.length-1)
    {
        model_b=model_b+1;
    }
    else
    {
        model_b=0;
    }
    article_2_img_paint.style.opacity=0;
    setTimeout(() => {
        article_2_img_paint.src = model_2[model_b];
    }, transitionTime);
    article_2_img_paint.onload=function(){
        article_2_img_paint.style.opacity = 1;
    };
});

triangle_2_R.addEventListener("click",function(){
    if(model_b> 0)
    {
        model_b=model_b-1;
    }
    else
    {
        model_b=model_2.length-1;
    }
    article_2_img_paint.style.opacity=0;
    setTimeout(() => {
        article_2_img_paint.src = model_2[model_b];
    }, transitionTime);
    article_2_img_paint.onload=function(){
        article_2_img_paint.style.opacity = 1;
    };
});

// 下面是第三個容器的三角形
triangle_3_L.addEventListener("click",function(){
    if(model_c< model_3.length-1)
    {
        model_c=model_c+1;
    }
    else
    {
        model_c=0;
    }
    article_2_img_model.style.opacity=0;
    setTimeout(() => {
        article_2_img_model.src = model_3[model_c];
    }, transitionTime);
    article_2_img_model.onload=function(){
        article_2_img_model.style.opacity = 1;
    };
});

triangle_3_R.addEventListener("click",function(){
    if(model_c> 0)
    {
        model_c=model_c-1;
    }
    else
    {
        model_c=model_3.length-1;
    }
    article_2_img_model.style.opacity=0;
    setTimeout(() => {
        article_2_img_model.src = model_3[model_c];
    }, transitionTime);
    article_2_img_model.onload=function(){
        article_2_img_model.style.opacity = 1;
    };
});
