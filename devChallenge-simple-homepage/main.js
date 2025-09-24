const $ = (selector) => document.querySelector(selector);

const $menu = $('.menu')
const $close = $('.close')
const $nav = $('.hidden')


const $btnSwitchTheme = $("#btn-switch-theme");
const $body = $("#body");
const $heading = $(".heading");
const $subHeading = $(".sub-heading");
const $logo = $("#logo-alarado");
const $activeLink = $('.active-link')
const $moon = $('#moon')
const $sun = $('#sun')


$btnSwitchTheme.addEventListener("click", () => {
  $body.classList.toggle("dark");
  $heading.classList.toggle("text-dark");
  $subHeading.classList.toggle("text-dark");
  $activeLink.classList.toggle("text-dark");
  $moon.classList.toggle('background-theme-icon')
  $sun.classList.toggle('background-theme-icon')
  $sun.classList.toggle('sun-dark')

  $logo.src = $body.classList.contains("dark")
    ? "/assets/alarado-icon-homepage-dark.svg"
    : "/assets/alarado-icon-homepage.svg";

  $moon.src = $body.classList.contains("dark")
  ? "/assets/Moon_fill.svg"
  : "/assets/Moon_fill_light.svg";

  $nav.style.background = $body.classList.contains("dark") ? '#111729' : '#F2F9FE' 
});

$menu.addEventListener('click', () => {
  $nav.classList.add("active");
})

$close.addEventListener('click', () => {
  $nav.classList.remove("active");
})

