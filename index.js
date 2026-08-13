const toggle_botton= document.querySelector(".navbar-menu-toggle")
const sidenavbar=document.querySelector(".side-navbar")
toggle_botton.addEventListener("click",function(){
    sidenavbar.style.left="0%"

})
function closenav(){
    sidenavbar.style.left="-60%"
}