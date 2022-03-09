left =  document.querySelector(".left-box");
right =  document.querySelector(".right-box");

document.addEventListener("mouseleave",()=>{
    left.style.width = "50%";
    right.style.width = "50%";
})
left.addEventListener("mouseover",()=>{
    left.style.width = "75%";
    right.style.width = "25%";
})
right.addEventListener("mouseover",()=>{
    left.style.width = "25%";
    right.style.width = "75%";
})
