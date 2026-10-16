const navbar = document.querySelector('.navbar');
const burgerBtn = document.getElementById('burgerBtn');
const closeBtn = document.querySelector('.close');

burgerBtn?.addEventListener('click', () => {
    navbar.classList.add('show');
});

closeBtn?.addEventListener('click', () => {
    navbar.classList.remove('show');
});