const header = document.querySelector("header")
const hero = document.querySelector("#hero")
const sections = document.querySelectorAll('section')
const darkColor = "#101624"
const lightColor = "#10253e"

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add('background-transition')

        sections.forEach(element => {
            let elementCoordinates = element.getBoundingClientRect()
            if (elementCoordinates.top < 200 && elementCoordinates.bottom > 200) {
                if (element.querySelector(".appear")) {
                    
                }
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
        hero.style.background = "#101624"
    }
  });
  