let menuMobile = document.getElementById('menuMobile');
let navBarMobile = document.getElementById('navBar');
let closeHamburguer = document.getElementById('closeHamburguer');

menuMobile.addEventListener("click", function() {
    navBarMobile.classList.add('showNav');
    console.log(navBarMobile.classList);
    console.log('ta indo');
});

closeHamburguer.addEventListener('click', () => {
    navBarMobile.classList.remove('showNav');
    console.log(navBarMobile.classList);
});




