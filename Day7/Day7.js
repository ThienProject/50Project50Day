const box = document.querySelectorAll('.content');
window.addEventListener('scroll', checkBoxes)
checkBoxes();
function checkBoxes(){
    box.forEach(i =>{
        const triggerBottom = window.innerHeight  / 5 * 4;
        const contentTop = i.getBoundingClientRect().top;
        if(contentTop < triggerBottom) {
            i.classList.add('show')
        } else {
            i.classList.remove('show')
        }
    })
    
}