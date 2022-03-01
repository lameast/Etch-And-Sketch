const container = document.querySelector('.container');
container.style['grid-template-rows'] = 'repeat(16, 1fr)';
container.style['grid-template-columns'] = 'repeat(16, 1fr)';
for(let i = 0; i < 16*16; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.appendChild(div);
}