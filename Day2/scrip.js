const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const point = document.querySelectorAll('.point');

let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive > point.length){
        currentActive = point.length;
    }
    update();
});

prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})

function update(){
    point.forEach((p, i)=>{
        if(i<currentActive){
            p.classList.add('active');
        }
        else{
            p.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (point.length - 1) * 100 + '%'
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === point.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


