document.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('#interruptor');
  const auto = document.getElementById("auto")
  const sol = document.getElementById("sol")
  const luna = document.getElementById('luna')

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
				// darkTheme()
			} else {
				// lightTheme()
			}

    } else if (click === 2) {
      auto.setAttribute("style", "display: none")
      sol.setAttribute("style", "display: block")
      luna.setAttribute("style", "display: none")
    } else {
      auto.setAttribute("style", "display: none")
      sol.setAttribute("style", "display: none")
      luna.setAttribute("style", "display: block")
    }
  })

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