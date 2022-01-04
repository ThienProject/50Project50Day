const cards = document.querySelectorAll('.card')
cards.forEach(card =>{
    card.addEventListener('click',()=>{
        removeActioveCLass();
        card.classList.add('active');
    })
   
});
function removeActioveCLass(){
    cards.forEach(card=>{
        card.classList.remove('active');
    })
}

