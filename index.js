let navUL = document.getElementsByClassName("nav-list")[0];

document
  .getElementsByClassName("main-item-menu")[0]
  .addEventListener("click", function () {
    let element = document.getElementsByClassName("main-item-menu")[0];
    element.classList.toggle("close");
    navUL.classList.toggle("show");
  });
