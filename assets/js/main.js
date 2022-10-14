const colorTheme = document.querySelector(
  '.nav__controls__theme-switch input[type="checkbox"]'
);
function cambiaTema(ev) {
  if (ev.target.checked) {
    document.documentElement.setAttribute("theme", "light");
  } else {
    document.documentElement.setAttribute("theme", "dark");
  }
}
colorTheme.addEventListener("change", cambiaTema);
