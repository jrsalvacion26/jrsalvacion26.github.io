const order1 = document.querySelector("#order_box");
const buttonOrder = document.querySelector(".button")

function order(){
    if(order1.style.display == "none"){
        order1.style.display = "block";
    }
    else{
        order1.style.display = "none";
    }
}

const order2 = document.querySelector("#order_box");
const closeButton = document.querySelector("#closeImg");

function closeTag(){
    if(order2.style.display == "block"){
        order2.style.display = "none";
    }
    else{
        order2.style.display = "block";
    }
    
}