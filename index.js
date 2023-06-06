function openMenu() {
  let menu = document.getElementsByClassName("menu")[0];
  if (menu.style.display == "inline-block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "inline-block";
  }
}
