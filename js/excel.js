/*  */
/*  */
/*  */
/*I'm watching you*/
/*  */
/*  */
/*  */
let money_button_word=document.getElementById('money_button_word');
let money_button_go=document.getElementById('money_button_go');
let cover=document.getElementById('cover');
let user=document.getElementById('user').value.trim();
let email=document.getElementById('email').value.trim();
let money=document.getElementsByName('money');
let selectedValue = "";
let step_1=document.getElementById('step_1');
let step_2=document.getElementById('step_2');
let money_img=document.getElementById('money_img');
let pig_box=document.getElementById('pig_box');
let money_img_img=document.getElementById('money_img_img');
let Donate_money=false;
let arrow=document.getElementById('arrow');
money_button_go.style.display="none";
cover.style.display="none";



money_button_word.addEventListener("click",function(){
    user=document.getElementById('user').value.trim();  
    email=document.getElementById('email').value.trim();
    for(i=0 ; i < money.length ; i++)  //用這個找點選的金額
    {
        if(money[i].checked)
        {
            selectedValue = money[i].value;
            break;
        }
    }
    if(selectedValue==="")
    {
        alert("請選擇捐款金額");
    }
    else if(user.length<2)
    {
        if(user==="")
        {
            alert("請輸入名字");
        }
        else
        {
            alert("請輸入正確的名字");
        }
    }
    else if(!(email.includes("@")) || !(email.includes(".")) || email.length<=5)
    {
        if(email==="" )
        {
            alert("請輸入email");
        }
        else
        {
            alert("請輸入正確的email");
        }
    }
    else
    {
        step_1.style.backgroundColor="#a59482";
        step_2.style.backgroundColor="#6c5c4b";
        money_button_go.style.display="block";
        cover.style.display="block";
        if(selectedValue==="100元")
        {
            money_img_img.src="./img/100.png";
        }
        else if(selectedValue==="500元"){
            money_img_img.src="./img/500.png";
        }
        else if(selectedValue==="1000元"){
            money_img_img.src="./img/1000.png";
        }
        else
        {
            money_img_img.src="./img/2000.png";
        }
    }

});

let x,y,img_left,img_top;
let flag=false;
money_img.addEventListener("mousedown",function(e){
    money_img_img.style.width="100%";
    flag=true;
    x=e.offsetX;
    y=e.offsetY;
    document.addEventListener("mousemove",function(e){
        img_left=e.clientX - x -cover.getBoundingClientRect().left;
        img_top = e.clientY - y  -cover.getBoundingClientRect().top; //-cover.getBoundingClientRect().top是因為錢在這個容器裡面

        if(flag===true)
        {
            money_img.style.top= img_top +"px";
            money_img.style.left= img_left + "px";
        }
        
    });
});
document.addEventListener("mouseup",function(){
    money_img_img.style.width="80%";
    flag=false;
    draggableRect = pig_box.getBoundingClientRect();
    targetRect = money_img.getBoundingClientRect();

    if (
        draggableRect.left < targetRect.right &&
        draggableRect.right > targetRect.left &&
        draggableRect.top < targetRect.bottom &&
        draggableRect.bottom > targetRect.top
    ) {
        alert("放置成功！");  // 彈出提示
        pig_box.style.width="100%";
        setInterval(function(){
            pig_box.style.width="90%";
        },300)
        money_img.style.display="none";
        Donate_money=true;
    }


});

money_button_go.addEventListener("click",function(){
    if (Donate_money===false) {
        event.preventDefault();// 阻止表單提交
        alert("還未把錢放入小豬裡"); // 顯示提示訊息
    }
    else
    {
        alert("捐款成功！你的錢將與我的靈魂產生連結"); 
    }
});



money_img.addEventListener("click",function(){
    if (window.innerWidth < 900) {
        alert("放置成功！");  // 彈出提示
        pig_box.style.width="100%";
        setInterval(function(){
            pig_box.style.width="90%";
        },300)
        money_img.style.display="none";
        Donate_money=true;
    }
});

if (window.innerWidth < 900) {
    arrow.src="./img/請把錢投進去手機.png";
}
else
{
    arrow.src="./img/請把錢投進去.png";
}



