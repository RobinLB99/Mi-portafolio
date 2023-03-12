document.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('#interruptor');
  const auto = document.getElementById("auto")
  const sol = document.getElementById("sol")
  const luna = document.getElementById('luna')

  let click = 1

  theme.addEventListener('click', () => {

    click += 1;

    if (click > 3) {
      click = 1
    }

    if (click === 1) {
      auto.style.display = 'block'
      sol.style.display = 'none'
      luna.style.display = 'none'

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// darkTheme()
			} else {
				// lightTheme()
			}

    } else if (click === 2) {
      auto.style.display = 'none'
      sol.style.display = 'block'
      luna.style.display = 'none'
    } else {
      auto.style.display = 'none'
      sol.style.display = 'none'
      luna.style.display = 'block'
    }
  })

  // const readTheme = (theme) => {
	// 	if (theme === 2) {
	// 		lightTheme()
	// 	} else if (theme === 3) {
	// 		darkTheme()
	// 	} else if (theme === 1) {
	// 		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 			darkTheme()
	// 		} else {
	// 			lightTheme()
	// 		}
	// 	}
	// }

	// readTheme(click);

})