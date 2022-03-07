let button = document.getElementsByClassName("btn")[0];
let searchContainer = document.getElementsByClassName("search-container")[0];

button.addEventListener('click',()=>{
    searchContainer.classList.toggle('active');
})