document.addEventListener('DOMContentLoaded', () => {
  const theme = document.querySelector('#interruptor');
  const auto = document.getElementById("auto")
  const sol = document.getElementById("sol")
  const luna = document.getElementById('luna')

  const logo = document.querySelector('.logo')
  const blob = document.querySelector('#blob_1')

  const root = document.querySelector(':root')

  const readTheme = (theme) => {
    if (theme === 2) {
      light_theme()
    } else if (theme === 3) {
      dark_theme()
    } else if (theme === 1) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dark_theme()
      } else {
        light_theme()
      }
    }
  }

  const dark_theme = () => {
    root.style.setProperty('--scrollbar-thumb-color', 'rgba(255, 255, 255, 0.5)');
    root.style.setProperty('--scrollbar-track-color', 'rgba(93, 93, 93, 0.5)');

    root.style.setProperty('--text-color', 'rgb(237, 246, 255)');
    root.style.setProperty('--background-color', 'rgb(24, 24, 26)');
    root.style.setProperty('--navbar', '#18181a56');
    root.style.setProperty('--background', 'linear-gradient(130deg, rgba(17, 17, 17, 0.37), rgba(29, 28, 28, 0.158)), url("../img/backgrounds/artur-shamsutdinov-unsplash.jpg"), no-repeat, center');
    root.style.setProperty('--card-color', 'rgba(36,41,46,.6)');
    root.style.setProperty('--backgroundCard-color', 'rgb(38 ,39 ,43)');
    root.style.setProperty('--borderCard-color', 'rgb(93 ,93 ,93)');
    root.style.setProperty('--tecnologiesBackground-color', 'rgba(61 ,61 ,61 ,.745)');
    logo.style.setProperty('filter', 'none')
    blob.src = './img/Formas/blob-dark.png'
  }

  const light_theme = () => {
    root.style.setProperty('--scrollbar-thumb-color', 'rgba(0, 0, 0, 0.5)');
    root.style.setProperty('--scrollbar-track-color', 'rgba(255, 255, 255, 0.5)');

    root.style.setProperty('--text-color', 'rgb(18, 9, 0)');
    root.style.setProperty('--background-color', 'rgb(231, 231, 229)');
    root.style.setProperty('--navbar', '#e7e7e791');
    root.style.setProperty('--background', 'linear-gradient(130deg, rgba(238 ,238 ,238 ,.441), rgba(226 ,227 ,227 ,.599)), url("../img/backgrounds/christopher-gower-unsplash.jpg"), no-repeat, center');
    root.style.setProperty('--card-color', 'rgba(219 ,214 ,209 ,.4)');
    root.style.setProperty('--backgroundCard-color', 'rgba(232 ,232 ,232)');
    root.style.setProperty('--borderCard-color', 'rgb(255 ,255 ,255)');
    root.style.setProperty('--tecnologiesBackground-color', 'rgba(201 ,207 ,220,.947)');
    logo.style.setProperty('filter', 'invert()')
    blob.src = './img/Formas/blob-light.png'
  }

  let click = 1

  theme.addEventListener('click', () => {

    click += 1;

    if (click > 3) {
      click = 1
    }

    if (click === 1) {
      auto.style.display = 'flex'
      sol.style.display = 'none'
      luna.style.display = 'none'
      readTheme(click);

    } else if (click === 2) {
      auto.style.display = 'none'
      sol.style.display = 'flex'
      luna.style.display = 'none'
      readTheme(click);

    } else {
      auto.style.display = 'none'
      sol.style.display = 'none'
      luna.style.display = 'flex'
      readTheme(click);
    }

  })

  readTheme(click);

})