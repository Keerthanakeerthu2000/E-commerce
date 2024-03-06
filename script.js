
var sidebar=document.querySelector(".sidebar")
function openSideBar(){
    sidebar.style.display="block"

}
function closeSideBar(){
    sidebar.style.display="none"

}


// collection
var collectionProduct = document.querySelector(".collections")
        var search = document.getElementById("search")
        var collectionList = collectionProduct.querySelectorAll("div")
        
        search.addEventListener("keyup",function(){
            var enteredValue = event.target.value.toUpperCase()
            for(count=0;count<collectionList.length;count=count+1){
                var collectionName =collectionList[count].querySelector("p").textContent

                if(collectionName.toUpperCase().indexOf(enteredValue)<0)
                {
                    collectionList[count].style.display="none"
                }
                else{
                    collectionList[count].style.display="block"
                }
            }
            
    
        })


// contact us
function alertMessage(){
    alert("Submitted Successfully")
}

var subscribe=document.getElementById("subscribe")
subscribe.addEventListener("click",function(){
    alert("Subcribed Successfully")
})











