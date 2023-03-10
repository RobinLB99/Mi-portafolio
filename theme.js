document.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('#interruptor');
  const auto = document.getElementById("auto")
  const sol = document.getElementById("sol")
  const luna = document.getElementById('luna')

  const body = document.getElementsByTagName("body")[0];
  const a = document.getElementsByTagName("a")
  const nav = document.querySelector(".navbar");
  const home = document.querySelector(".home")
  const projects = document.querySelector(".projects")
  const photo = document.querySelector("#photo_perfil")
  const card = document.querySelectorAll(".card")
  const cardhover = document.querySelectorAll('.cardhover')
  const buttons = document.querySelectorAll(".buttons")
  const card_button = document.querySelectorAll(".button")
  const card_buttonhover = document.querySelectorAll('.card_button_hover')
  const tecnologie = document.querySelectorAll('.tecnologie')
  const footer = document.getElementsByTagName('footer')[0]


  const darkTheme = () => {
    body.style.backgroundColor = 'var(--background-color-darkMode)';
    body.style.color = 'var(--text-color-darkMode)';
    body.style.textShadow = 'var(--background-color-darkMode) 2px 2px 2px';


    for (let i = 0; i < a.length; i++) {
      a[i].style.color = 'var(--text-color-darkMode)'
    }
    nav.style.backgroundColor = 'var(--navbar-darkMode)'
    home.style.background = 'var(--background_dark)'
    home.style.backgroundSize = 'cover'
    home.style.backgroundAttachment = 'fixed'
    projects.style.background = 'var(--background_dark)'
    projects.style.backgroundSize = 'cover'
    projects.style.backgroundAttachment = 'fixed'
    photo.style.borderBottom = "4px solid var(--text-color-darkMode)";
    card.forEach(element => {
      element.style.backgroundColor = 'var(--card-color-darkMode)'
    });

    cardhover.forEach(element => {
      element.style.backgroundColor = "var(--backgroundCard-color-darkMode)";
      element.style.border = "3px solid var(--borderCard-color-darkMode)";
    });

    buttons.forEach(element => {
      element.style.backgroundColor = 'var(--backgroundCard-color-darkMode)'
    })
    card_button.forEach(element => {
      element.style.color = 'color: var(--text-color-darkMode)'
      element.style.backgroundColor = 'var(--background-color-darkMode)'
    })
    card_buttonhover.forEach(element => {
      element.style.backgroundColor = 'var(--borderCard-color-darkMode)'
    })
    tecnologie.forEach(element => {
      element.style.backgroundColor = 'var(--tecnologiesBackground-color-darkMode)'
    })
    footer.style.borderColor = 'var(--text-color-darkMode)'
  }

  const lightTheme = () => {
    body.style.backgroundColor = 'var(--background-color-lightMode)';
    body.style.color = 'var(--text-color-lightMode)';
    body.style.textShadow = 'var(--background-color-lightMode) 2px 2px 2px';

    for (let i = 0; i < a.length; i++) {
      a[i].style.color = 'var(--text-color-lightMode)'
    }
    nav.style.backgroundColor = 'var(--navbar-lightMode)'
    home.style.background = 'var(--background_light)'
    home.style.backgroundSize = 'cover'
    home.style.backgroundAttachment = 'fixed'
    projects.style.background = 'var(--background_light)'
    projects.style.backgroundSize = 'cover'
    projects.style.backgroundAttachment = 'fixed'

    photo.style.borderBottom = "4px solid var(--text-color-lightMode)";
    card.forEach(element => {
      element.style.backgroundColor = 'var(--card-color-lightMode)'
    });

    cardhover.forEach(element => {
      element.style.backgroundColor = "var(--backgroundCard-color-lightMode)";
      element.style.border = "3px solid var(--borderCard-color-lightMode)";
    });

    buttons.forEach(element => {
      element.style.backgroundColor = 'var(--backgroundCard-color-lightMode)'
    })
    card_button.forEach(element => {
      element.style.color = 'var(--text-color-lightMode)'
      element.style.backgroundColor = 'var(--background-color-lightMode)'
    })
    card_buttonhover.forEach(element => {
      element.style.backgroundColor = 'var(--borderCard-color-lightMode)'
    })
    tecnologie.forEach(element => {
      element.style.backgroundColor = 'var(--tecnologiesBackground-color-lightMode)'
    })
    footer.style.borderColor = 'var(--text-color-lightMode)'
  }

  let click = 1;

  theme.addEventListener('click', () => {

    click += 1;

    if (click > 3) {
      click = 1
    }

    if (click === 1) {
      auto.setAttribute("style", "display: block")
      sol.setAttribute("style", "display: none")
      luna.setAttribute("style", "display: none")
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				darkTheme()
			} else {
				lightTheme()
			}
    } else if (click === 2) {
      auto.setAttribute("style", "display: none")
      sol.setAttribute("style", "display: block")
      luna.setAttribute("style", "display: none")
      lightTheme()
    } else {
      auto.setAttribute("style", "display: none")
      sol.setAttribute("style", "display: none")
      luna.setAttribute("style", "display: block")
      darkTheme()
    }
  })

  for (let i = 0; i < card_button.length; i++) {
    card_button[i].addEventListener('mouseover', function() {

      card_button[i].addEventListener('mouseover', () =>  {
        card_button[i].classList.add('card_button_hover');
      });

      card_button[i].addEventListener('mouseout', () => {
        card_button[i].classList.remove('card_button_hover');
      })

    })
  }

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('mouseover', function() {

        card[i].addEventListener('mouseover', () =>  {
          card[i].classList.add('cardhover');
        });

        card[i].addEventListener('mouseout', () => {
          card[i].classList.remove('cardhover');
        })

    })
  }

  const readTheme = (theme) => {
		if (theme === 2) {
			lightTheme()
		} else if (theme === 3) {
			darkTheme()
		} else if (theme === 1) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				darkTheme()
			} else {
				lightTheme()
			}
		}
	}

	readTheme(click);

})