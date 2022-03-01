const container = document.querySelector('.container');
container.style['grid-template-rows'] = 'repeat(16, 1fr)';
container.style['grid-template-columns'] = 'repeat(16, 1fr)';
for(let i = 0; i < 16*16; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.addEventListener('mouseenter', function(e){
        this.style['background-color'] = 'black';
    });
    container.appendChild(div);
}

function restart(){
    let num = parseInt(prompt('Enter the number of squares per side for the new grid!'));
    while( !(num <= 100 && num >= 0)){
        num = parseInt(prompt('Please enter a number between 0 and 100.'));
    }
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    container.style['grid-template-rows'] = `repeat(${num}, 1fr)`;
    container.style['grid-template-columns'] = `repeat(${num}, 1fr)`;
    for(let i = 0; i < num*num; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.addEventListener('mouseenter', function(e){
            this.style['background-color'] = 'black';
        });
        container.appendChild(div);
    }
}
function clear(){
    const children = container.childNodes;
    children.forEach((child)=>{
        child.style['background-color'] = 'white';
    })
}

const btn1 = document.querySelector('.restart');
btn1.addEventListener('click', restart)

const btn2 = document.querySelector('.clear');
btn2.addEventListener('click', clear);