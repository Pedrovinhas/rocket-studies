const btn = document.getElementById('openModal');
const modal = document.querySelector('.modal-wrapper');

btn.addEventListener('click', () => {
    modal.classList.remove('invisible');
})

document.addEventListener("keydown", function(e) {
    const isEscKey = e.key === 'Escape';

    isEscKey ? modal.classList.add('invisible') : ''
    
}) 

