const theme = document.querySelector('#interruptor');
const auto = document.getElementById("auto")
const sol = document.getElementById("sol")
const luna = document.getElementById('luna')

const body = document.getElementsByTagName("body");
const a = document.querySelectorAll("a")
const nav = document.querySelector(".nav");
const home = document.querySelector(".home")
const projects = document.querySelector(".projects")
const photo = document.querySelector("#photo_perfil")
const card = document.querySelectorAll(".card")
const cardHover = document.querySelectorAll(".card:hover")
const buttons = document.querySelectorAll(".buttons")


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

