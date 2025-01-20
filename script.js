const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
});



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle(fa-xmark);
    navbar.classList.toggle('active')
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};



ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top'} );
 ScrollReveal().reveal('.home-img, .swiper, .project-box, .contact form', { origin: 'bottom'} );
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'} );

 ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'} );

const typed = new Typed('.multiple-text', {
    strings: ['BCA Graduate', 'Frontend Developer', 'Tech Enthusiast '],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        console.log('You clicked on: ' + this.textContent);
    });
});


document.addEventListener("DOMContentLoaded",function
    (event){
    let circle = document.querySelectorAll('.circle');
    circle.forEach(function(progress) {
    let degree = 0;
    var targetDegree = parseInt(progress.getAttribute
    ('data-degree'));
    let color = progress.getAttribute('data-color');
    let number = progress.querySelector('.number');

    var interval = setInterval(function(){
    degree += 1;
    if (degree > targetDegree) {
    clearInterval(interval);
    return;
    }

    progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
    number.innerHTML = degree + '<span>%</span>';
    number.style.color = color;
},50)
    })
    });

