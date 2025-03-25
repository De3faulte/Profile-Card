
    const name = document.querySelector('h2');

    name.addEventListener('click', () => {
        if(name.style.fontSize === '2rem'){
            name.style.fontSize = '1.5rem';
        } else {
            name.style.fontSize = '2rem';
        }
        name.style.transition = 'font-size 0.3s ease';
    });
