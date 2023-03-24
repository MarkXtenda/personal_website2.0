const header = document.querySelector("header")
const hero = document.querySelector("#hero")
const sections = document.querySelectorAll('section')
const darkColor = "#101624"
const lightColor = "#10253e"

const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
    menuOverlay.style.transition = 'transform 0.3s ease-out';
    menuToggle.classList.toggle('active');
    menuOverlay.style.display='flex';
    menuOverlay.classList.toggle('show');
});

menuOverlay.addEventListener('click', () => {
    menuOverlay.style.transition = 'transform 0.3s ease-out';
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('show');
})

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('background-transition')
        menuOverlay.style.transition = 'background-color 0.5s ease-in-out'
        menuOverlay.style.background = lightColor

        sections.forEach(element => {
            let elementCoordinates = element.getBoundingClientRect()
            if (elementCoordinates.top < 300 && elementCoordinates.bottom > 300) {
                element.style.boxShadow = `0 3px 7px -3px ${lightColor}, 0 -3px 7px -3px ${lightColor}`
                element.style.background = lightColor
            }
            else {
                element.style.boxShadow = `0 3px 7px -3px ${darkColor}, 0 -3px 7px -3px ${darkColor}`
                element.style.background = darkColor
            }
        });

    }
    else {
        header.classList.remove('background-transition')
        menuOverlay.style.background = darkColor;
        hero.style.background = darkColor;
    }
  });
  