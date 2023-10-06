 let sections = document.querySelectorAll('section');
 let navLinks = document.querySelectorAll('.header nav a');

// Setting active indicator when you scroll or select a page/section
window.onscroll = () => {
    let top = window.scrollY;

    if (top === 0) {
        // If at the top of the page, remove active from other nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        // and set the "Home" link as active
        document.querySelector('.header nav a[href="#home"]').classList.add('active');
    } else {
        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`.header nav a[href="#${id}"]`).classList.add('active');
            }
        });
    }
    //  sticky navbutton
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.srollY > 100);

    // remove toggle icon when you click on navbutton link
    menuIcon.onclick = () => {
        menuIcon.classList.remove('fa-times');
        navBar.classList.remove('active');
    };

};

// code for typing text
var typed = new Typed(".multi-text", {
    strings: ["Web developer", "Technical writer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//  toggle nav on small screen
let menuIcon = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbutton');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navBar.classList.toggle('active');
};


// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

 ScrollReveal().reveal('.about, .services-box h3', { origin: 'top', scale: 1 });
 ScrollReveal().reveal('.heading', { origin: 'left', scale: 1 });
 ScrollReveal().reveal('.main, .services-container, .portfolio-container', { origin: 'right', scale: 1 });
 ScrollReveal().reveal('.services-box p, form', { origin: 'bottom', scale: 1 });

