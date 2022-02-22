/*se esta seleccionando la clase menu-btn y se esta CREANDO EL EVENTO CLICK*/
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');/*hace aparacer y desaprecer la clase show*/
});
/*los elementos van apareciendo a cuando vamos scrolleando*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 500 });
ScrollReveal().reveal('.cards-baner-one', { delay: 500 });
ScrollReveal().reveal('.cards-baner-two', { delay: 500 });