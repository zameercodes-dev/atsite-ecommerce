let productcontainer=document.getElementById("product")
let search=document.querySelector(".search")
let productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    let enteredvalue=event.target.value.toUpperCase()
    for(count=0;count<productlist.length;count=count+1){
        let productname=productlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})


