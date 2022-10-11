const nav = document.querySelector('nav ul');
const menuToggle = document.querySelector('.toggle input');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
});