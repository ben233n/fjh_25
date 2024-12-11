// 選單按鈕
var menu=document.getElementById("menu");
var header_ul=document.getElementById("header_ul");
// 點擊選單
menu.addEventListener("click",function(){
    header_ul.classList.toggle("show");
}
);